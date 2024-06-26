"use client";
import * as THREE from "three";
import React, { useRef, useEffect } from "react";

export function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Initialize Three.js scene here
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer();

      renderer.setSize(window.innerWidth - 1000, window.innerHeight - 1000);
      containerRef.current?.appendChild(renderer.domElement);
      camera.position.z = 5;

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      // Render the scene and camera
      // renderer.render(scene, camera);
      const renderScene = () => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(renderScene);
      };
      renderScene();

      const handleResize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return <div className={"z-20 w-full h-full rounded-md"} ref={containerRef} />;
}
