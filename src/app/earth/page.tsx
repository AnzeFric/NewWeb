"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import { useRef, useEffect } from "react";
import * as THREE from "three";

import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export default function EarthModel() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;

    // Initial dimensions
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    container.appendChild(renderer.domElement);

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.01, 1000);
    camera.position.set(0, 0, 7);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 1.5;
    controls.maxDistance = 10;

    // Load textures
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/textures/8k_earth_daymap.jpg");

    // Earth geometry and textured material
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 1,
      metalness: 0,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Animate
    const animate = () => {
      earth.rotation.y += 0.004;
      earth.rotation.x += 0.002;

      controls.update();
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      renderer.dispose();
      texture.dispose();
      geometry.dispose();
      material.dispose();
      ambientLight.dispose();
      directionalLight.dispose();

      if (process.env.NODE_ENV === "production") {
        controls.dispose();
      }

      if (mountRef.current && renderer.domElement.parentNode) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <ContainerWrapper sections={1}>
      {() => (
        <div
          ref={mountRef}
          style={{
            width: "100vw",
            height: "100vh",
          }}
        />
      )}
    </ContainerWrapper>
  );
}
