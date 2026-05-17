import { TerminalSection } from '../components/TerminalSection';

export default function About() {
  return (
    <div className="space-y-6">
      <TerminalSection title="About.exe" command="cat about.txt">
        <div className="text-xl mb-4">
          {'>'} ASMIT SHARMA - CYBER SECURITY ENGINEER
        </div>
        <p className="mb-4 leading-relaxed">
          Cyber Security | Cloud Security | Network Security | VAPT | Penetration Tester | Web Application Analyst
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-[#00ff00]/60">Location:</span> Ajmer, India
          </div>
          <div>
            <span className="text-[#00ff00]/60">Email:</span>{' '}
            <a href="mailto:asmitsharma674@gmail.com" className="hover:text-[#00ff00] hover:underline">
              asmitsharma674@gmail.com
            </a>
          </div>
          <div>
            <span className="text-[#00ff00]/60">Specialization:</span> Cyber Security & Forensics
          </div>

        </div>

        <div className="mt-6">
          <div className="text-sm mb-3 text-[#00ff00]/70">// EDUCATION</div>
          <div className="space-y-3">
            <div className="border-l-2 border-[#00ff00]/50 pl-4">
              <div className="text-lg">M.Sc., Newcastle University</div>
              <div className="text-sm text-[#00ff00]/60">Newcastle upon Tyne | Sep 2022 - Sep 2023</div>
              <div className="text-sm text-[#00ff00]/60">Major - Cyber Security</div>
            </div>
            <div className="border-l-2 border-[#00ff00]/50 pl-4">
              <div className="text-lg">B. Tech., University of Petroleum and Energy Studies</div>
              <div className="text-sm text-[#00ff00]/60">Dehradun | Aug 2018 - May 2022</div>
              <div className="text-sm text-[#00ff00]/60">Graduated with Honors - Cyber Security & Forensics</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#00ff00]/30">
          <div className="text-sm mb-3 text-[#00ff00]/70">// WORK EXPERIENCE</div>
          <div className="space-y-3">
            <div className="border-l-2 border-[#00ff00]/50 pl-4">
              <div className="text-lg">Intern - Pheme Software Pvt. Ltd.</div>
              <div className="text-sm text-[#00ff00]/60">Jun 2021 - Aug 2021</div>
              <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-[#00ff00]/80">
                <li>Handled security aspects of web applications including user authentication and IAM</li>
                <li>Created APIs using Flask framework</li>
                <li>Developed web interfaces using ReactJS</li>
              </ul>
            </div>
          </div>
        </div>
      </TerminalSection>

      <TerminalSection title="Certifications.cert" command="gpg --list-keys">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">✓</span>
            <div>
              <div>IBM Cybersecurity Analyst Professional Certificate</div>
              <div className="text-xs text-[#00ff00]/60">IBM</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">✓</span>
            <div>
              <div>Preparing for Google Cloud Certification: Cloud Security Engineer</div>
              <div className="text-xs text-[#00ff00]/60">Google Cloud</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">✓</span>
            <div>
              <div>AWS Fundamentals Specialization</div>
              <div className="text-xs text-[#00ff00]/60">Amazon Web Services</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">✓</span>
            <div>
              <div>Python for Everybody</div>
              <div className="text-xs text-[#00ff00]/60">Coursera</div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-[#00ff00]">✓</span>
            <div>
              <div>The Bits and Bytes of Computer Networking</div>
              <div className="text-xs text-[#00ff00]/60">Google</div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-[#00ff00]/30">
          <div className="text-sm mb-3 text-[#00ff00]/70">// ACHIEVEMENTS & PUBLICATIONS</div>
          <div className="space-y-3">
            <div className="border-l-2 border-[#00ff00]/50 pl-4">
              <div className="text-lg">Springer Publication</div>
              <div className="text-sm text-[#00ff00]/80">
                A systematic approach for analysing log files using string matching and regular expressions
              </div>
            </div>
            <div className="border-l-2 border-[#00ff00]/50 pl-4">
              <div className="text-lg">ICCSDF 2021 Presentation</div>
              <div className="text-sm text-[#00ff00]/80">
                International Conference on Cyber Security and Digital Forensics
              </div>
              <div className="text-xs text-[#00ff00]/60">
                Lecture notes on Data Engineering and Communications Technologies
              </div>
            </div>
          </div>
        </div>
      </TerminalSection>
    </div>
  );
}
