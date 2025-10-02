export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent to-accent-secondary animate-pulse" />
        <p className="text-fg/60">Loading OutfitSync...</p>
      </div>
    </div>
  );
}
