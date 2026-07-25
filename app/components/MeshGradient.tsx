"use client";

export default function MeshGradient() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent/25 rounded-full blur-[130px] animate-mesh-1" />
      <div className="absolute top-[40%] right-[-15%] w-[600px] h-[600px] bg-accent-light/15 rounded-full blur-[150px] animate-mesh-2" />
      <div className="absolute top-[80%] left-[5%] w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[120px] animate-mesh-3" />
      <div className="absolute top-[120%] right-[10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[140px] animate-mesh-2" />
    </div>
  );
}