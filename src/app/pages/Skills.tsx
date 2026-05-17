import { TerminalSection } from '../components/TerminalSection';
import { SkillBar } from '../components/SkillBar';

export default function Skills() {
  return (
    <div className="space-y-6">
      <TerminalSection title="Skills.dat" command="./scan_capabilities.sh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="text-sm mb-3 text-[#00ff00]/70">// SECURITY DOMAINS</div>
            <SkillBar skill="Red Teaming" level={85} />
            <SkillBar skill="Blue Teaming" level={88} />
            <SkillBar skill="Cloud Security" level={82} />
            <SkillBar skill="Digital Forensics" level={80} />
          </div>
          <div>
            <div className="text-sm mb-3 text-[#00ff00]/70">// PROGRAMMING & CLOUD</div>
            <SkillBar skill="Python" level={90} />
            <SkillBar skill="JavaScript" level={75} />
            <SkillBar skill="GCP" level={78} />
            <SkillBar skill="AWS" level={80} />
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm mb-3 text-[#00ff00]/70">// SECURITY TOOLS</div>
          <div className="flex flex-wrap gap-2">
            {['Wireshark', 'Metasploit', 'Burpsuite', 'Autopsy', 'Python',
              'JavaScript', 'GCP', 'AWS', 'ReactJS', 'Flask', 'TensorFlow',
              'Streamlit', 'Netcat', 'Nikto', 'John the Ripper', 'Hydra',
              'Nmap', 'Sqlmap', 'Kali Linux', 'Zap', 'Nessus'].map((tool) => (
              <span key={tool} className="border border-[#00ff00]/50 px-3 py-1 text-sm">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="text-sm mb-3 text-[#00ff00]/70">// AREAS OF INTEREST</div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="border-l-2 border-[#00ff00]/50 pl-3">VAPT</div>
            <div className="border-l-2 border-[#00ff00]/50 pl-3">Web App Security Analyst</div>
            <div className="border-l-2 border-[#00ff00]/50 pl-3">Cloud Security Analyst</div>
            <div className="border-l-2 border-[#00ff00]/50 pl-3">SOC Analyst</div>
            <div className="border-l-2 border-[#00ff00]/50 pl-3">Network Security Analyst</div>
          </div>
        </div>
      </TerminalSection>
    </div>
  );
}
