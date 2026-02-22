import React from 'react';
import { useGLTF } from '@react-three/drei/native';
import { Group } from 'three';

export default function PanAbajo() {
  const gltf = useGLTF(
    require('../../assets/images/panAbajo.glb')
  ) as any;

  const scene = gltf?.scene as Group;

  if (!scene) return null;

  return (
    <primitive
      object={scene}
      scale={0.3}
    />
  );
}
