'use client';
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Model from './Model';
import { Environment, OrbitControls } from '@react-three/drei';
import { useWindowSize } from '@/hooks/useWindowSize';

function Loader(){
  return <mesh>
    <boxGeometry args={[1,1,1]} />
    <meshBasicMaterial 
    color='gray'
    wireframe
    />
  </mesh>
}

const Scene = ({index}) => {
  const {width} = useWindowSize();
  const modelScale = width < 768 ? 2.5 : 4; 
  return (
    <div className='w-full h-[70vh]'>
      <Canvas>  
        <Suspense 
        fallback={<Loader/>}
        >
        <ambientLight intensity={0.5} />
        <Environment preset='city' />
        <Model 
        scale={modelScale}
        index={index} />
        <OrbitControls 
        />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Scene