import * as THREE from 'three';

function isSharedResource(obj: { userData?: Record<string, unknown> } | null | undefined): boolean {
  return Boolean(obj?.userData && obj.userData.shared === true);
}

export function disposeMaterial(material: THREE.Material | THREE.Material[]) {
  const list = Array.isArray(material) ? material : [material];
  for (const mat of list) {
    if (isSharedResource(mat)) continue;
    for (const value of Object.values(mat)) {
      if (value && typeof value === 'object' && 'isTexture' in value && value.isTexture) {
        const tex = value as THREE.Texture;
        if (!isSharedResource(tex)) {
          tex.dispose();
        }
      }
    }
    mat.dispose();
  }
}

export function disposeObject3D(root: THREE.Object3D | null | undefined) {
  if (!root) return;
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (mesh.geometry && !isSharedResource(mesh.geometry)) {
      mesh.geometry.dispose();
    }
    if (mesh.material) {
      disposeMaterial(mesh.material);
    }
  });
}
