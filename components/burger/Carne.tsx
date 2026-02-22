import { useGLTF } from '@react-three/drei/native';
import React from "react"

export default function Carne() {
  const gltf = useGLTF(
    require('../../assets/images/Carne.glb')
  ) as any;

  return <primitive object={gltf.scene} scale={0.3} />;
}
