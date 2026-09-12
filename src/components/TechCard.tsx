import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  onAdd: (tech: Technology) => void;
  isAdded: boolean;
}

export default function TechCard({ tech, onAdd, isAdded }: TechCardProps) {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-lg transition">
      <div className="card-body p-5">
        <div className="flex items-start justify-between">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
          <span className="badge badge-ghost badge-sm font-semibold">
            {tech.badge}
          </span>
        </div>

        <h3 className="card-title mt-3 text-lg font-bold">{tech.name}</h3>
        <p className="text-sm text-base-content/60">{tech.description}</p>

        <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
          <span className="badge badge-primary badge-outline">
            {tech.category}
          </span>
          <span className="badge badge-ghost">{tech.difficulty}</span>
          <span className="ml-auto flex items-center gap-1 text-warning font-semibold">
            ★ {tech.rating}
          </span>
        </div>

        <button
          onClick={() => onAdd(tech)}
          disabled={isAdded}
          className={`btn mt-4 w-full border-0 ${
            isAdded
              ? 'btn-disabled bg-base-200 text-base-content/40'
              : 'gradient-brand text-white'
          }`}
        >
          {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
}