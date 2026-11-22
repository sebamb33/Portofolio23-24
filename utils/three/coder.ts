import {
  CanvasTexture,
  CapsuleGeometry,
  CylinderGeometry,
  Group,
  LatheGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
  SRGBColorSpace,
  Sprite,
  SpriteMaterial,
  IcosahedronGeometry,
  InstancedMesh,
  Matrix4,
  Quaternion,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
} from "three";
import type { Object3D } from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { createLogoMesh } from "./logo";

/*
 * Figurine blanche « porcelaine » assise à un bureau, qui code sur un laptop.
 * Tout est construit avec des primitives : aucun modèle à télécharger.
 * Repère local : le personnage regarde vers +z, le sol est à y = 0.
 */

export interface CoderInput {
  /** Position du pointeur normalisée [-1, 1]. */
  px: number;
  py: number;
}

export interface Coder {
  root: Group;
  /** Objets cliquables (pour faire coucou). */
  hitTargets: Object3D[];
  update: (t: number, dt: number, input: CoderInput) => void;
  wave: () => void;
  /** Ajoute les petits « A » en relief (asynchrone : charge le SVG). */
  attachLogos: () => Promise<void>;
}

const rbox = (w: number, h: number, d: number, r: number) =>
  new RoundedBoxGeometry(w, h, d, 3, r);

function roundedCylinder(radius: number, height: number, corner: number) {
  const pts: Vector2[] = [new Vector2(0, -height / 2)];
  const steps = 6;
  for (let i = 0; i <= steps; i++) {
    const a = -Math.PI / 2 + (i / steps) * (Math.PI / 2);
    pts.push(
      new Vector2(
        radius - corner + Math.cos(a) * corner,
        -height / 2 + corner + Math.sin(a) * corner,
      ),
    );
  }
  for (let i = 0; i <= steps; i++) {
    const a = (i / steps) * (Math.PI / 2);
    pts.push(
      new Vector2(
        radius - corner + Math.cos(a) * corner,
        height / 2 - corner + Math.sin(a) * corner,
      ),
    );
  }
  pts.push(new Vector2(0, height / 2));
  return new LatheGeometry(pts, 40);
}

function glyphTexture(text: string) {
  const c = document.createElement("canvas");
  c.width = 256;
  c.height = 128;
  const ctx = c.getContext("2d")!;
  ctx.font = "600 72px 'Fira Code', ui-monospace, monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#3a3a3a";
  ctx.fillText(text, 128, 68);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function shadowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(40,44,52,0.3)");
  g.addColorStop(0.55, "rgba(40,44,52,0.12)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  return new CanvasTexture(c);
}

/**
 * Cheveux crépus : ~200 petites boules en une seule InstancedMesh
 * (un seul draw call), réparties sur le haut et l'arrière du crâne,
 * en laissant le visage dégagé.
 */
function buildAfro(material: MeshStandardMaterial) {
  const COUNT = 320;
  const mesh = new InstancedMesh(new IcosahedronGeometry(1, 1), material, COUNT);
  const m = new Matrix4();
  const q = new Quaternion();
  const pos = new Vector3();
  const scl = new Vector3();
  const center = new Vector3(0, 0.42, -0.04);
  let rnd = 7;
  const random = () => ((rnd = (rnd * 16807) % 2147483647) / 2147483647);
  let placed = 0;
  for (let i = 0; placed < COUNT && i < COUNT * 4; i++) {
    // points de Fibonacci sur une sphère
    const y = 1 - (i / (COUNT * 4 - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const phi = i * 2.399963;
    const dir = new Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r);
    if (dir.y < -0.25) continue; // pas sous les oreilles
    if (dir.z > 0.3 && dir.y < 0.3) continue; // visage dégagé
    if (random() > 0.4) continue;
    const radius = 0.36 + random() * 0.07;
    pos.copy(dir).multiplyScalar(radius).add(center);
    pos.y += Math.max(0, dir.y) * 0.08;
    const size = 0.08 + random() * 0.04;
    scl.set(size, size, size);
    q.setFromAxisAngle(dir, random() * Math.PI);
    m.compose(pos, q, scl);
    mesh.setMatrixAt(placed++, m);
  }
  mesh.count = placed;
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

const smooth = (x: number) => x * x * (3 - 2 * x);
const lerp = (a: number, b: number, k: number) => a + (b - a) * k;

export function buildCoder(opts: { particles?: boolean } = {}): Coder {
  const root = new Group();

  // ---------- Matériaux partagés ----------
  const porcelain = new MeshPhysicalMaterial({
    color: 0xf2f3f5,
    roughness: 0.62,
    clearcoat: 0.15,
    clearcoatRoughness: 0.6,
    envMapIntensity: 0.35,
  });
  const porcelainFlat = porcelain.clone();
  porcelainFlat.flatShading = true;
  const ink = new MeshStandardMaterial({ color: 0x55585e, roughness: 0.5 });
  const relief = new MeshStandardMaterial({ color: 0xdfe1e5, roughness: 0.6 });
  const furniture = new MeshStandardMaterial({ color: 0xeceef1, roughness: 0.7 });
  const metal = new MeshStandardMaterial({ color: 0xe9ebee, roughness: 0.55 });
  const keys = new MeshStandardMaterial({ color: 0xdadde2, roughness: 0.7 });
  const screen = new MeshBasicMaterial({ color: 0xf4f6f8, toneMapped: false });
  const hairMat = new MeshStandardMaterial({ color: 0xf0f1f3, roughness: 0.85 });
  const podiumMat = new MeshStandardMaterial({ color: 0xeef0f3, roughness: 0.7 });
  const add = (parent: Object3D, geo: ConstructorParameters<typeof Mesh>[0], mat: ConstructorParameters<typeof Mesh>[1], x = 0, y = 0, z = 0) => {
    const m = new Mesh(geo, mat);
    m.position.set(x, y, z);
    parent.add(m);
    return m;
  };

  // ---------- Socle néomorphique + ombres (fausses, gratuites) ----------
  const shadowMat = new MeshBasicMaterial({
    map: shadowTexture(),
    transparent: true,
    depthWrite: false,
  });
  const podium = add(root, roundedCylinder(1.6, 0.18, 0.08), podiumMat, 0, -0.09, 0.5);
  podium.renderOrder = -1;
  const groundShadow = add(root, new PlaneGeometry(3.9, 3.9), shadowMat, 0.1, -0.179, 0.6);
  groundShadow.rotation.x = -Math.PI / 2;
  const shadow = add(root, new PlaneGeometry(3, 3), shadowMat, 0, 0.002, 0.5);
  shadow.rotation.x = -Math.PI / 2;

  // ---------- Tabouret ----------
  add(root, new CylinderGeometry(0.3, 0.3, 0.07, 32), furniture, 0, 0.98, 0);
  add(root, new CylinderGeometry(0.04, 0.04, 0.92, 12), metal, 0, 0.5, 0);
  add(root, new CylinderGeometry(0.25, 0.28, 0.04, 32), furniture, 0, 0.02, 0);

  // ---------- Bureau ----------
  add(root, rbox(1.9, 0.06, 0.95, 0.02), furniture, 0, 1.5, 0.9);
  for (const [x, z] of [[-0.88, 0.48], [0.88, 0.48], [-0.88, 1.32], [0.88, 1.32]] as const) {
    add(root, new CylinderGeometry(0.025, 0.025, 1.47, 10), metal, x, 0.735, z);
  }

  // ---------- Laptop ----------
  const laptop = new Group();
  laptop.position.set(0, 1.53, 0.58);
  root.add(laptop);
  add(laptop, rbox(0.86, 0.035, 0.58, 0.012), metal, 0, 0.0175, 0);
  add(laptop, new PlaneGeometry(0.74, 0.24), keys, 0, 0.0355, 0.1).rotation.x = -Math.PI / 2;
  add(laptop, new PlaneGeometry(0.26, 0.14), furniture, 0, 0.0355, -0.17).rotation.x = -Math.PI / 2;
  const lid = new Group();
  lid.position.set(0, 0.035, 0.29);
  lid.rotation.x = 0.22;
  laptop.add(lid);
  add(lid, rbox(0.86, 0.56, 0.02, 0.012), metal, 0, 0.28, 0);
  const screenMesh = add(lid, new PlaneGeometry(0.78, 0.48), screen, 0, 0.29, -0.0115);
  screenMesh.rotation.y = Math.PI;
  const glow = new PointLight(0xffffff, 0.6, 2.2, 1.6);
  glow.position.set(0, 0.3, -0.35);
  lid.add(glow);

  // ---------- Mug ----------
  const mug = new Group();
  mug.position.set(0.66, 1.53, 0.68);
  root.add(mug);
  add(mug, new CylinderGeometry(0.075, 0.065, 0.17, 28), porcelain, 0, 0.085, 0);
  const handle = add(mug, new TorusGeometry(0.045, 0.013, 8, 20, Math.PI), porcelain, 0.075, 0.09, 0);
  handle.rotation.z = -Math.PI / 2;

  // ---------- Personnage ----------
  const body = new Group();
  root.add(body);

  // jambes assises
  for (const s of [-1, 1]) {
    add(body, rbox(0.32, 0.24, 0.66, 0.06), porcelain, s * 0.18, 1.12, 0.27);
    add(body, rbox(0.3, 0.7, 0.3, 0.06), porcelain, s * 0.18, 0.74, 0.56);
    add(body, rbox(0.32, 0.14, 0.46, 0.05), porcelain, s * 0.18, 0.36, 0.64);
  }
  add(body, rbox(0.72, 0.2, 0.44, 0.05), porcelain, 0, 1.12, 0);

  // haut du corps (pivot aux hanches : respiration + inclinaison)
  const upper = new Group();
  upper.position.set(0, 1.22, 0);
  body.add(upper);

  const torsoGeo = new CylinderGeometry(0.36, 0.5, 0.9, 4, 1);
  torsoGeo.rotateY(Math.PI / 4);
  torsoGeo.scale(1, 1, 0.62);
  const torso = add(upper, torsoGeo, porcelainFlat, 0, 0.45, 0);

  add(upper, new CylinderGeometry(0.13, 0.14, 0.08, 24), porcelain, 0, 0.94, 0);

  // tête ronde (pivot au cou) + cheveux crépus
  const head = new Group();
  head.position.set(0, 0.95, 0);
  upper.add(head);
  const skull = add(head, new SphereGeometry(0.3, 40, 28), porcelain, 0, 0.3, 0);
  skull.scale.set(1, 1.08, 0.98);
  const earGeo = new SphereGeometry(0.06, 16, 12);
  add(head, earGeo, porcelain, -0.29, 0.28, 0).scale.set(0.6, 1, 0.8);
  add(head, earGeo, porcelain, 0.29, 0.28, 0).scale.set(0.6, 1, 0.8);
  const eyes = new Group();
  eyes.position.set(0, 0.32, 0.282);
  head.add(eyes);
  const eyeGeo = new CapsuleGeometry(0.027, 0.045, 4, 10);
  add(eyes, eyeGeo, ink, -0.095, 0, 0);
  add(eyes, eyeGeo, ink, 0.095, 0, 0);
  const smile = add(head, new TorusGeometry(0.065, 0.013, 8, 24, Math.PI), ink, 0, 0.215, 0.27);
  smile.rotation.z = Math.PI;
  smile.rotation.x = -0.3;
  head.add(buildAfro(hairMat));

  // bras : épaule -> coude -> main en « C »
  const arms = [-1, 1].map((s) => {
    const shoulder = new Group();
    shoulder.position.set(s * 0.37, 0.82, 0);
    upper.add(shoulder);
    add(shoulder, new CapsuleGeometry(0.1, 0.32, 6, 14), porcelain, 0, -0.22, 0);
    const elbow = new Group();
    elbow.position.set(0, -0.42, 0);
    shoulder.add(elbow);
    const fore = add(elbow, new CapsuleGeometry(0.09, 0.2, 6, 14), porcelain, 0, 0, 0.14);
    fore.rotation.x = Math.PI / 2;
    const hand = add(elbow, new TorusGeometry(0.065, 0.035, 10, 20, Math.PI * 1.5), porcelain, 0, 0, 0.34);
    hand.rotation.set(0, Math.PI / 2, Math.PI * 0.25);
    return { s, shoulder, elbow };
  });

  // ---------- Glyphes de code qui s'envolent ----------
  const glyphs: { sprite: Sprite; life: number; dur: number; drift: number }[] = [];
  if (opts.particles !== false) {
    ["</>", "{ }", ";", "=>", "()", "#"].forEach((txt, i) => {
      const sprite = new Sprite(
        new SpriteMaterial({ map: glyphTexture(txt), transparent: true, depthWrite: false, opacity: 0 }),
      );
      sprite.scale.set(0.5, 0.25, 1);
      root.add(sprite);
      glyphs.push({ sprite, life: -i * 0.55, dur: 3.2, drift: (Math.random() - 0.5) * 0.6 });
    });
  }
  const glyphOrigin = new Vector3(0, 2.15, 0.9);

  // ---------- Animation ----------
  const pose = {
    lookX: 0,
    lookY: 0,
    blink: 0,
    nextBlink: 2,
    wave: 0, // 0 = code, 1 = salue
    waveTime: -1,
    nextGlance: 6,
    glance: 0,
  };

  const BASE = { shoulderX: -0.8, elbowX: 0.95 };
  const WAVE_DURATION = 2.4;

  const update = (t: number, dt: number, input: CoderInput) => {
    // respiration + légère inclinaison vers l'écran
    upper.position.y = 1.22 + Math.sin(t * 2.1) * 0.008;
    upper.rotation.x = 0.07 + Math.sin(t * 2.1) * 0.01;
    torso.scale.set(1 + Math.sin(t * 2.1) * 0.006, 1, 1);

    // coucou (déclenché au clic ou à l'arrivée)
    if (pose.waveTime >= 0) {
      pose.waveTime += dt;
      const p = pose.waveTime / WAVE_DURATION;
      pose.wave = p < 0.2 ? smooth(p / 0.2) : p > 0.8 ? smooth((1 - p) / 0.2) : 1;
      if (p >= 1) {
        pose.waveTime = -1;
        pose.wave = 0;
      }
    }

    // de temps en temps, il jette un œil au visiteur
    pose.nextGlance -= dt;
    if (pose.nextGlance <= 0) {
      pose.glance = 1.6;
      pose.nextGlance = 7 + Math.random() * 6;
    }
    pose.glance = Math.max(0, pose.glance - dt);
    const glancing = pose.glance > 0 || pose.wave > 0.01;

    // frappe au clavier, avec de petites pauses de réflexion
    const typing = (Math.sin(t * 0.8) > -0.55 ? 1 : 0.15) * (1 - pose.wave);
    for (const { s, shoulder, elbow } of arms) {
      const phase = s > 0 ? 0 : Math.PI;
      const tap = Math.sin(t * 17 + phase) * 0.06 * typing;
      const isWaving = s < 0; // main droite du personnage
      const w = isWaving ? pose.wave : 0;
      shoulder.rotation.x = lerp(BASE.shoulderX + tap, -0.15, w);
      shoulder.rotation.z = lerp(s * 0.08, -2.55, w);
      elbow.rotation.x = lerp(BASE.elbowX - tap * 0.6, 0.35 + Math.sin(t * 11) * 0.45, w);
    }

    // regard : écran par défaut, suit un peu la souris, se tourne vers le visiteur
    const targetYaw = glancing ? -root.rotation.y * 0.9 : input.px * 0.35;
    const targetPitch = glancing ? -0.05 : 0.16 + input.py * 0.12;
    const k = Math.min(1, dt * 5);
    pose.lookX = lerp(pose.lookX, targetYaw, k);
    pose.lookY = lerp(pose.lookY, targetPitch, k);
    head.rotation.y = pose.lookX;
    head.rotation.x = pose.lookY;

    // clignement des yeux
    pose.nextBlink -= dt;
    if (pose.nextBlink <= 0) {
      pose.blink = 0.14;
      pose.nextBlink = 2 + Math.random() * 3.5;
    }
    pose.blink = Math.max(0, pose.blink - dt);
    eyes.scale.y = pose.blink > 0 ? 0.15 : 1;

    // écran qui « respire » doucement
    screen.color.setHSL(0.6, 0.1, 0.93 + Math.sin(t * 3) * 0.02);

    // glyphes
    for (const g of glyphs) {
      g.life += dt * typing + dt * 0.15;
      if (g.life < 0) continue;
      if (g.life > g.dur) {
        g.life = 0;
        g.drift = (Math.random() - 0.5) * 0.7;
      }
      const p = g.life / g.dur;
      g.sprite.position.set(
        glyphOrigin.x + g.drift * p + Math.sin(p * 6 + g.drift * 10) * 0.05,
        glyphOrigin.y + p * 1.0,
        glyphOrigin.z,
      );
      (g.sprite.material as SpriteMaterial).opacity = Math.sin(Math.PI * p) * 0.75;
    }
  };

  const wave = () => {
    if (pose.waveTime < 0) pose.waveTime = 0;
  };

  const attachLogos = async () => {
    // « A » en relief au dos de l'écran
    const lidLogo = await createLogoMesh(relief, 0.2);
    lidLogo.scale.z = 0.08;
    lidLogo.position.set(0, 0.28, 0.012);
    lid.add(lidLogo);
  };

  return { root, hitTargets: [body], update, wave, attachLogos };
}
