"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function NeuralSphere() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Wireframe sphere (the "brain" structure)
    const geometry = new THREE.IcosahedronGeometry(2.2, 2);
    const wireMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const wireSphere = new THREE.Mesh(geometry, wireMaterial);
    scene.add(wireSphere);

    // Glowing nodes at each vertex
    const positions = geometry.attributes.position;
    const nodeGeometry = new THREE.SphereGeometry(0.035, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const nodes = new THREE.Group();
    for (let i = 0; i < positions.count; i += 3) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(positions.getX(i), positions.getY(i), positions.getZ(i));
      nodes.add(node);
    }
    scene.add(nodes);

    let mouseX = 0;
    let mouseY = 0;
    function handleMouseMove(e: MouseEvent) {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }
    window.addEventListener("mousemove", handleMouseMove);

    let animationId: number;
    function animate() {
      wireSphere.rotation.y += 0.0022;
      wireSphere.rotation.x += 0.0008;
      nodes.rotation.y += 0.0022;
      nodes.rotation.x += 0.0008;

      camera.position.x += (mouseX * 1.2 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }
    animate();

    function handleResize() {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      wireMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full min-h-[400px]" />;
}