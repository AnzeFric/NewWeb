"use client";

import ContainerWrapper from "@/components/global/wrappers/ContainerWrapper";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function EarthModel() {
  const mountRef = useRef<HTMLDivElement>(null);

  // --- Sun position calculator (approximate but realistic) ---
  function getSunDirection(date: Date): THREE.Vector3 {
    const rad = Math.PI / 180;

    // Days since J2000.0
    const d =
      (Date.UTC(
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes()
      ) -
        Date.UTC(2000, 0, 1, 12, 0, 0)) /
      86400000;

    // Mean anomaly of the Sun
    const g = (357.529 + 0.98560028 * d) % 360;
    // Mean longitude
    const q = (280.459 + 0.98564736 * d) % 360;
    // Ecliptic longitude
    const L =
      (q + 1.915 * Math.sin(g * rad) + 0.02 * Math.sin(2 * g * rad)) % 360;

    // Obliquity of the ecliptic
    const e = 23.439 * rad;

    // Sun coordinates in Earth-centered system
    const x = Math.cos(L * rad);
    const y = Math.cos(e) * Math.sin(L * rad);
    const z = Math.sin(e) * Math.sin(L * rad);

    return new THREE.Vector3(x, y, z).normalize();
  }

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

    // Load textures
    const loader = new THREE.TextureLoader();
    const texture = loader.load("/textures/8k_earth_daymap.jpg");

    // Earth mesh
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 1,
      metalness: 0,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    // Update sunlight to real-world position
    const updateSun = () => {
      const sunDir = getSunDirection(new Date());
      directionalLight.position.copy(sunDir.multiplyScalar(10));
      directionalLight.target.position.set(0, 0, 0);
    };
    updateSun();

    // Refresh Sun every minute
    const sunInterval = setInterval(updateSun, 60000);

    // Control state
    let isMouseDown = false;
    let mouseX = 0;
    let mouseY = 0;

    // Quaternion helpers
    const rotationSpeed = 0.005;
    const quat = new THREE.Quaternion();
    const quatX = new THREE.Quaternion();
    const quatY = new THREE.Quaternion();

    // Mouse handlers
    const onMouseDown = (event: MouseEvent) => {
      isMouseDown = true;
      mouseX = event.clientX;
      mouseY = event.clientY;
      container.style.cursor = "grabbing";
    };

    const onMouseMove = (event: MouseEvent) => {
      if (!isMouseDown) return;

      const deltaX = event.clientX - mouseX;
      const deltaY = event.clientY - mouseY;
      mouseX = event.clientX;
      mouseY = event.clientY;

      // Rotate using quaternions
      quatX.setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        deltaX * rotationSpeed
      );
      quatY.setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        deltaY * rotationSpeed
      );

      quat.multiplyQuaternions(quatX, quatY);
      earth.quaternion.multiplyQuaternions(quat, earth.quaternion);
    };

    const onMouseUp = () => {
      isMouseDown = false;
      container.style.cursor = "grab";
    };

    // Touch handlers
    const onTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        isMouseDown = true;
        mouseX = event.touches[0].clientX;
        mouseY = event.touches[0].clientY;
      }
    };

    const onTouchMove = (event: TouchEvent) => {
      if (!isMouseDown || event.touches.length !== 1) return;

      event.preventDefault();
      const deltaX = event.touches[0].clientX - mouseX;
      const deltaY = event.touches[0].clientY - mouseY;
      mouseX = event.touches[0].clientX;
      mouseY = event.touches[0].clientY;

      quatX.setFromAxisAngle(
        new THREE.Vector3(0, 1, 0),
        deltaX * rotationSpeed
      );
      quatY.setFromAxisAngle(
        new THREE.Vector3(1, 0, 0),
        deltaY * rotationSpeed
      );

      quat.multiplyQuaternions(quatX, quatY);
      earth.quaternion.multiplyQuaternions(quat, earth.quaternion);
    };

    const onTouchEnd = () => {
      isMouseDown = false;
    };

    // Wheel zoom
    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const zoomSpeed = 1;
      const minDistance = 2;
      const maxDistance = 10;

      const currentDistance = camera.position.length();
      const newDistance = Math.max(
        minDistance,
        Math.min(maxDistance, currentDistance + event.deltaY * zoomSpeed * 0.01)
      );

      camera.position.normalize().multiplyScalar(newDistance);
    };

    // Event listeners
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseUp);

    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);

    container.addEventListener("wheel", onWheel, { passive: false });

    container.style.cursor = "grab";

    // Animate
    const animate = () => {
      if (!isMouseDown) {
        earth.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0.5), 0.005);
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handler
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
      clearInterval(sunInterval);
      window.removeEventListener("resize", handleResize);

      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseUp);

      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);

      container.removeEventListener("wheel", onWheel);

      renderer.dispose();
      texture.dispose();
      geometry.dispose();
      material.dispose();

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
            touchAction: "none", // Prevents default touch behaviors
          }}
        />
      )}
    </ContainerWrapper>
  );
}
