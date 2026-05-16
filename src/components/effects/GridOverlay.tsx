export function GridOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 opacity-[0.15]"
      aria-hidden
      style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        maskImage:
          "radial-gradient(ellipse 80% 60% at 50% 40%, black 20%, transparent 70%)",
      }}
    />
  );
}
