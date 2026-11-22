import { Box3, ExtrudeGeometry, Mesh, Vector3 } from "three";
import type { BufferGeometry, Material } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

let cache: Promise<BufferGeometry> | null = null;

/**
 * Extrude le vrai logo (public/assets/LogoPortofolio.svg) en 3D.
 * Géométrie centrée, hauteur normalisée à 1. Chargement mis en cache.
 */
function loadLogoGeometry(): Promise<BufferGeometry> {
  if (cache) return cache;
  cache = fetch("/assets/LogoPortofolio.svg")
    .then((r) => r.text())
    .then((svg) => {
      const data = new SVGLoader().parse(svg);
      const shapes = data.paths.flatMap((p) => SVGLoader.createShapes(p));
      const geometry = new ExtrudeGeometry(shapes, {
        depth: 70,
        bevelEnabled: true,
        bevelThickness: 14,
        bevelSize: 8,
        bevelSegments: 3,
        curveSegments: 10,
      });
      const box = new Box3().setFromBufferAttribute(
        geometry.getAttribute("position") as never,
      );
      const size = box.getSize(new Vector3());
      const center = box.getCenter(new Vector3());
      geometry.translate(-center.x, -center.y, -center.z);
      const k = 1 / size.y;
      geometry.scale(k, k, k);
      return geometry;
    });
  return cache;
}

/**
 * Mesh du logo, hauteur `height`. Le SVG a l'axe Y vers le bas : on le
 * retourne via l'échelle du mesh (le renderer corrige alors l'ordre des
 * faces tout seul, ce qui garde des normales lisses sur le biseau).
 */
export async function createLogoMesh(material: Material, height = 1): Promise<Mesh> {
  const geometry = await loadLogoGeometry();
  const mesh = new Mesh(geometry, material);
  mesh.scale.set(height, -height, height);
  return mesh;
}
