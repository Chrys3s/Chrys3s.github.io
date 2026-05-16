interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  status: 'completed' | 'in-progress' | 'classified';
}

export function ProjectCard({ title, description, tech, status }: ProjectCardProps) {
  const statusColors = {
    completed: 'text-[#00ff00]',
    'in-progress': 'text-yellow-400',
    classified: 'text-red-500'
  };

  const statusLabels = {
    completed: 'COMPLETE',
    'in-progress': 'IN PROGRESS',
    classified: 'CLASSIFIED'
  };

  return (
    <div className="border border-[#00ff00]/40 bg-black/30 p-4 mb-4 hover:border-[#00ff00] transition-colors">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg text-[#00ff00]">[{title}]</h3>
        <span className={`text-xs ${statusColors[status]}`}>
          {statusLabels[status]}
        </span>
      </div>
      <p className="text-sm text-[#00ff00]/80 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, i) => (
          <span key={i} className="text-xs border border-[#00ff00]/50 px-2 py-1 text-[#00ff00]/70">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
