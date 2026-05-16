import { useNavigate } from 'react-router';
import { MatrixRain } from '../components/MatrixRain';

export default function Start() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-black text-[#00ff00] relative overflow-hidden flex items-center justify-center">
      <MatrixRain />

      <button
        onClick={handleStart}
        className="relative z-10 text-6xl md:text-8xl cursor-pointer hover:text-[#00ff00] transition-colors animate-pulse border-none bg-transparent"
        style={{ fontFamily: 'VT323, monospace' }}
      >
        START_
      </button>

      {/* Scanline effect */}
      <div className="fixed inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent animate-pulse opacity-30"
           style={{
             backgroundSize: '100% 4px',
             animation: 'scan 8s linear infinite'
           }}
      />
    </div>
  );
}
