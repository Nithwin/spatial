'use client';

import { useGLTF } from "@react-three/drei";

const models = [
    '/3d/1.glb',
    '/3d/2.glb',
    '/3d/3.glb',
]
const Model = ({index,scale}) => {
    const {scene} = useGLTF(models[index]);
    const y = scale === 2.5 ? -1 : -3;
  return (
    <primitive 
    scale={scale}
    position={[0,y,0]}

    object={scene} />
  )
}

export default Model
// useGLTF.preload(models[index]);