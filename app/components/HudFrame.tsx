export default function HudFrame({ className }: { className?: string }) {
  return (
    <>
      <span className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-accent-light/70 ${className}`} />
      <span className={`absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-accent-light/70 ${className}`} />
      <span className={`absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-accent-light/70 ${className}`} />
      <span className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-accent-light/70 ${className}`} />
    </>
  );
}