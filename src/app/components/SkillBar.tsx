interface SkillBarProps {
  skill: string;
  level: number;
}

export function SkillBar({ skill, level }: SkillBarProps) {
  const blocks = 20;
  const filled = Math.round((level / 100) * blocks);

  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1 text-sm">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="flex gap-[2px]">
        {Array.from({ length: blocks }).map((_, i) => (
          <div
            key={i}
            className={`h-3 flex-1 border border-[#00ff00] ${
              i < filled ? 'bg-[#00ff00]' : 'bg-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
