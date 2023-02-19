import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";
import { Trees } from "./Trees";

export const Scene = () => {
  const refTrees = useRef(null);

  useFrame(() => {
    const { current: group } = refTrees;
    if (group) {
      group.rotation.x = group.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Trees ref={refTrees} />
    </>
  );
};
