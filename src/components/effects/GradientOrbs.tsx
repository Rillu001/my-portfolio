export function GradientOrbs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[100px]" />
      <div className="absolute -right-40 top-1/3 h-[380px] w-[380px] rounded-full bg-amber-600/[0.05] blur-[100px]" />
      <div className="absolute bottom-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-amber-500/[0.04] blur-[120px]" />
    </div>
  );
}
