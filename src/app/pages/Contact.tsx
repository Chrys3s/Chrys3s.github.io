import { TerminalSection } from '../components/TerminalSection';

export default function Contact() {
  return (
    <div className="space-y-6">
      <TerminalSection title="Contact.pgp" command="echo $CONTACT_INFO">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-[#00ff00]/60 w-32">Name:</span>
            <span>Asmit Sharma</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#00ff00]/60 w-32">Location:</span>
            <span>Ajmer, India</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#00ff00]/60 w-32">Email:</span>
            <a href="mailto:asmitsharma674@gmail.com" className="hover:text-[#00ff00] hover:underline">
              asmitsharma674@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#00ff00]/60 w-32">Phone:</span>
            <a href="tel:+918890626388" className="hover:text-[#00ff00] hover:underline">
              +91 8890626388
            </a>
          </div>
        </div>

        <div className="mt-6 p-4 border border-[#00ff00]/30 bg-black/50">
          <div className="text-xs text-[#00ff00]/70 mb-2">
            # ABOUT ME
          </div>
          <div className="text-sm">
            Security enthusiast, philomath, and continuous learner passionate about
            enhancing security in the technical world. Available for opportunities in
            cybersecurity, cloud security, and digital forensics.
          </div>
        </div>

        <div className="mt-6 p-4 border border-[#00ff00]/30 bg-black/50">
          <div className="text-xs text-[#00ff00]/70 mb-2">
            # WORK EXPERIENCE
          </div>
          <div className="text-sm">
            <div className="mb-2">
              <span className="text-[#00ff00]">Intern - Pheme Software Pvt. Ltd.</span>
              <span className="text-[#00ff00]/60 text-xs ml-2">(Jun 2021 - Aug 2021)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[#00ff00]/80">
              <li>Handled security aspects of web applications including user authentication and IAM</li>
              <li>Created APIs using Flask framework</li>
              <li>Developed web interfaces using ReactJS</li>
            </ul>
          </div>
        </div>
      </TerminalSection>
    </div>
  );
}
