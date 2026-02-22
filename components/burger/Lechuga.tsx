import { useGLTF } from '@react-three/drei/native';
import React from "react"

export default function Lechuga() {
  const gltf = useGLTF(
    require('../../assets/images/lechuga.glb')
  ) as any;

  return <primitive object={gltf.scene} scale={0.3} />;
}
