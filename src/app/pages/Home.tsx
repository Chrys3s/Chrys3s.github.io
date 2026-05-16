import { TypewriterText } from '../components/TypewriterText';
import { Link } from 'react-router';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="text-center space-y-6">
        <div className="text-4xl md:text-6xl mb-4">
          <TypewriterText text="ASMIT SHARMA" delay={50} />
        </div>

        <div className="text-xl md:text-2xl text-[#00ff00]/80">
          {'>'} CYBER SECURITY ENGINEER
        </div>

        <div className="mt-8 text-sm text-[#00ff00]/60">
          <div className="mb-2">System booted successfully...</div>
          <div className="mb-2">All security protocols active</div>
          <div className="mb-2">Connection encrypted: AES-256</div>
          <div className="animate-pulse">Ready for access_</div>
        </div>

        <div className="mt-12 space-y-3">
          <div className="text-sm text-[#00ff00]/70">// QUICK ACCESS MENU</div>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/about"
              className="border border-[#00ff00]/50 px-6 py-3 hover:bg-[#00ff00]/10 transition-colors"
            >
              [1] ABOUT.EXE
            </Link>
            <Link
              to="/skills"
              className="border border-[#00ff00]/50 px-6 py-3 hover:bg-[#00ff00]/10 transition-colors"
            >
              [2] SKILLS.DAT
            </Link>
            <Link
              to="/projects"
              className="border border-[#00ff00]/50 px-6 py-3 hover:bg-[#00ff00]/10 transition-colors"
            >
              [3] PROJECTS.LOG
            </Link>
            <Link
              to="/contact"
              className="border border-[#00ff00]/50 px-6 py-3 hover:bg-[#00ff00]/10 transition-colors"
            >
              [4] CONTACT.PGP
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
