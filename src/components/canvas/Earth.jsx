import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import {MOUSE}  from "three";
import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./Graffiti/scene.gltf");

  return (
    <mesh>
    <hemisphereLight intensity={0.15} groundColor='black' />
    <spotLight
      position={[40,-10,30]}
      angle={0.7}
      penumbra={0.8}
      intensity={1.2}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    <primitive
      object={earth.scene}
      scale={0.4}
      position={[-1.5, -3.25, -0.5]}
      rotation={[-0.02, -5.2, -0.01]}
    />
  </mesh>
  );
};

const EarthCanvas = () => {
  
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [30, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          mouseButtons={{
            LEFT: MOUSE.ROTATE,
            RIGHT: null,

          }}
        />
        <Earth />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
