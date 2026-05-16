import { TerminalSection } from '../components/TerminalSection';
import { ProjectCard } from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="space-y-6">
      <TerminalSection title="Projects.log" command="ls -la ./projects/">
        <ProjectCard
          title="M-STEGO"
          description="Research-based project to find differences between already used steganographic algorithms for video files and a tool developed for embedding encrypted messages in video files."
          tech={['Steganography', 'Encryption', 'Video Processing', 'Research']}
          status="completed"
        />
        <ProjectCard
          title="BLUETOOTH SECURE CHAT SYSTEM"
          description="Secure chat application using Bluetooth as the medium of communication with end-to-end encryption using the Diffie-Hellman key exchange for authentication and the Double Ratchet algorithm for data encryption."
          tech={['Bluetooth', 'E2E Encryption', 'Diffie-Hellman', 'Double Ratchet']}
          status="completed"
        />
        <ProjectCard
          title="PHILOMATH"
          description="Web-based UI using Streamlit to show comparative time series prediction analysis between various dense feedforward and recurrent neural networks using TensorFlow."
          tech={['Python', 'TensorFlow', 'Streamlit', 'Neural Networks', 'Time Series']}
          status="completed"
        />
        <ProjectCard
          title="KALAM - WEB DEV LEARNING PLATFORM"
          description="Full-stack interactive and hands-on web development learning platform designed to teach programming through practical exercises."
          tech={['ReactJS', 'Flask', 'Full-Stack', 'Education']}
          status="completed"
        />
        <ProjectCard
          title="STEGANOGRAPHY WITH CUSTOM ENCRYPTION"
          description="Terminal UI application for securing information through hybrid implementation of steganography and encryption using custom designed encryption algorithms."
          tech={['Python', 'Steganography', 'Custom Encryption', 'CLI']}
          status="completed"
        />
        <ProjectCard
          title="LOG ANALYSIS TOOL"
          description="Terminal user interface application for parsing, managing, analysing, and converting unstructured log files into structured file formats (CSVs). Published in Springer's Lecture Notes series."
          tech={['Python', 'RegEx', 'Pattern Matching', 'Data Processing']}
          status="completed"
        />
      </TerminalSection>
    </div>
  );
}
