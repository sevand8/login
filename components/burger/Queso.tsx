import { useGLTF } from '@react-three/drei/native';
import React from "react"

export default function Queso() {
  const gltf = useGLTF(
    require('../../assets/images/Queso.glb')
  ) as any;

  return <primitive object={gltf.scene} scale={0.3} />;
}
