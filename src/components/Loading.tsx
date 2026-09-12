export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="mt-4 text-sm text-base-content/60">
        Loading technologies...
      </p>
    </div>
  );
}