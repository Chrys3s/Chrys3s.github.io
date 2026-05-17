import { TerminalSection } from '../components/TerminalSection';
import resumePdf from '../../imports/Asmit_CV.pdf';

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
          <div className="text-xs text-[#00ff00]/70 mb-2 flex justify-between items-center">
            <span># RESUME.pdf</span>
            <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="text-[#00ff00]/60 hover:text-[#00ff00] hover:underline flex items-center gap-1 transition-colors">
              [Download]
            </a>
          </div>
          <div className="mt-4 h-[600px] border border-[#00ff00]/20 bg-white/5 rounded overflow-hidden">
            <iframe 
              src={`${resumePdf}#zoom=100`}
              className="w-full h-full"
              title="Resume PDF"
            />
          </div>
        </div>


      </TerminalSection>
    </div>
  );
}
