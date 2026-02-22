import { useGLTF } from '@react-three/drei/native';

export default function Tomate() {
  const gltf = useGLTF(
    require('../../assets/images/Tomate.glb')
  ) as any;

  return (
    <primitive
      object={gltf.scene}
      scale={0.3}
    />
  );
}
