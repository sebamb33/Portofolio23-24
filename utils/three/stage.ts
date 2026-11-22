import {
  NeutralToneMapping,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SRGBColorSpace,
  WebGLRenderer,
} from "three";
import type { Texture } from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export interface StageOptions {
  fov?: number;
  maxDpr?: number;
  /** Appelé à chaque frame visible. `t` = temps écoulé (s), `dt` = delta (s). */
  onFrame?: (t: number, dt: number) => void;
  /** Rend une seule image, sans boucle (reduced-motion). */
  still?: boolean;
}

export interface Stage {
  scene: Scene;
  camera: PerspectiveCamera;
  renderer: WebGLRenderer;
  canvas: HTMLCanvasElement;
  render: () => void;
  start: () => void;
  dispose: () => void;
}

/**
 * Petit moteur commun aux scènes 3D : renderer transparent, environnement
 * doux pour les reflets, redimensionnement, et boucle qui ne tourne QUE
 * lorsque le canvas est à l'écran et que l'onglet est actif.
 */
export function createStage(container: HTMLElement, opts: StageOptions = {}): Stage {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, opts.maxDpr ?? 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping;
  renderer.toneMappingExposure = 0.92;
  const canvas = renderer.domElement;
  canvas.style.display = "block";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  container.appendChild(canvas);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const env: Texture = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = env;
  pmrem.dispose();

  const camera = new PerspectiveCamera(opts.fov ?? 35, 1, 0.1, 100);

  const resize = () => {
    const w = container.clientWidth || 1;
    const h = container.clientHeight || 1;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    render();
  };

  const render = () => renderer.render(scene, camera);

  let raf = 0;
  let last = 0;
  let elapsed = 0;
  let onScreen = false;
  let running = false;

  const tick = (now: number) => {
    raf = requestAnimationFrame(tick);
    const dt = Math.min(0.05, last ? (now - last) / 1000 : 0);
    last = now;
    elapsed += dt;
    opts.onFrame?.(elapsed, dt);
    render();
  };

  const update = () => {
    const shouldRun = running && onScreen && !document.hidden && !opts.still;
    if (shouldRun && !raf) {
      last = 0;
      raf = requestAnimationFrame(tick);
    } else if (!shouldRun && raf) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const io = new IntersectionObserver(([entry]) => {
    onScreen = !!entry?.isIntersecting;
    update();
  });
  io.observe(container);
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  document.addEventListener("visibilitychange", update);
  resize();

  return {
    scene,
    camera,
    renderer,
    canvas,
    render,
    start() {
      running = true;
      opts.onFrame?.(0, 0);
      render();
      update();
    },
    dispose() {
      running = false;
      update();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", update);
      scene.traverse((obj) => {
        const mesh = obj as unknown as {
          geometry?: { dispose: () => void };
          material?: { dispose: () => void; map?: Texture | null } | { dispose: () => void }[];
        };
        mesh.geometry?.dispose();
        const mats = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
        mats.forEach((m) => {
          (m as { map?: Texture | null }).map?.dispose();
          m.dispose();
        });
      });
      env.dispose();
      renderer.dispose();
      canvas.remove();
    },
  };
}
