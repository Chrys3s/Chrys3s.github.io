import { Outlet } from 'react-router';
import { TerminalHeader } from './TerminalHeader';
import { MatrixRain } from './MatrixRain';
import { Navigation } from './Navigation';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-black text-[#00ff00] p-4 md:p-8 relative overflow-hidden">
      <MatrixRain />

      <div className="max-w-5xl mx-auto relative z-10" style={{ fontFamily: 'VT323, monospace' }}>
        <TerminalHeader />
        <Navigation />

        <main className="min-h-[50vh]">
          <Outlet />
        </main>

        <footer className="mt-12 pt-6 border-t border-[#00ff00]/30 text-center text-sm text-[#00ff00]/60">
          <div className="mb-2">
            <span className="animate-pulse">█</span> SYSTEM STATUS: OPERATIONAL
          </div>
          <div className="text-xs">
            © 2026 | All systems secured | Unauthorized access will be logged and prosecuted
          </div>
          <div className="mt-2 text-xs">
            "In God we trust, all others we monitor" - NSA
          </div>
        </footer>
      </div>

      <div className="fixed inset-0 pointer-events-none z-20 bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent animate-pulse opacity-30"
           style={{
             backgroundSize: '100% 4px',
             animation: 'scan 8s linear infinite'
           }}
      />
    </div>
  );
}
