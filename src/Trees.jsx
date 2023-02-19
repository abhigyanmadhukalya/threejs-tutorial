import React, { forwardRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { Color, Vector3 } from "three";
import { GhibliStyleShader } from "./GhibliStyleShader";

export const Trees = forwardRef((props, ref) => {
  const { nodes } = useGLTF("/trees.glb");

  const uniforms = useMemo(() => {
    return {
      colorMap: {
        value: [
          new Color("#427062").convertLinearToSRGB(),
          new Color("#33594E").convertLinearToSRGB(),
          new Color("#234549").convertLinearToSRGB(),
          new Color("#1E363F").convertLinearToSRGB(),
        ],
      },
      brightnessThresholds: {
        value: [0.9, 0.45, 0.001],
      },
      lightPosition: { value: new Vector3(15, 15, 15) },
    };
  }, []);

  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={[0.33, -0.05, -0.68]}
      >
        <shaderMaterial
          attach="material"
          {...GhibliStyleShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
});

useGLTF.preload("/trees.glb");
