"use client";

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] animate-mesh-1" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent-light/20 rounded-full blur-[140px] animate-mesh-2" />
      <div className="absolute top-[30%] right-[10%] w-[300px] h-[300px] bg-purple-900/30 rounded-full blur-[100px] animate-mesh-3" />
    </div>
  );
}