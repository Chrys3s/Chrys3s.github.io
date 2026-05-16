import { ReactNode } from 'react';

interface TerminalSectionProps {
  title: string;
  command: string;
  children: ReactNode;
}

export function TerminalSection({ title, command, children }: TerminalSectionProps) {
  return (
    <div className="mb-8">
      <div className="text-[#00ff00] mb-2">
        <span className="text-[#00ff00]/60">root@cybersec:~$</span> {command}
      </div>
      <div className="border border-[#00ff00]/30 bg-black/50 p-4 rounded">
        <div className="text-[#00ff00] mb-3 flex items-center gap-2">
          <span className="text-lg">{'>'}</span>
          <span className="uppercase tracking-wider">{title}</span>
        </div>
        <div className="pl-4 text-[#00ff00]/90">
          {children}
        </div>
      </div>
    </div>
  );
}
