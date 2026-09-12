import type { Technology } from '../types';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <div className="card bg-base-100 border border-base-200 sticky top-24">
      <div className="card-body p-5">
        <h2 className="card-title text-lg">Your Stack</h2>
        <p className="text-sm text-base-content/60">
          {stack.length} Technology Selected
        </p>

        {stack.length === 0 ? (
          <div className="mt-6 text-center py-8 border-2 border-dashed border-base-300 rounded-xl">
            <p className="text-sm text-base-content/40">
              Your stack is empty. Add technologies to get started.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 bg-base-200 rounded-xl"
              >
                <img src={item.icon} alt={item.name} className="w-8 h-8" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{item.name}</p>
                  <p className="text-xs text-base-content/60">
                    {item.category}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="btn btn-ghost btn-xs"
                  aria-label={`Remove ${item.name}`}
                >
                  ✕
                </button>
              </div>
            ))}

            <button
              onClick={onRemoveAll}
              className="btn btn-outline btn-error btn-sm w-full mt-2"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </div>
  );
}