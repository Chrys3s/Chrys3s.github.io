import { useState, useEffect } from 'react';

export function TerminalHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-[#00ff00] pb-2 mb-6">
      <div className="flex justify-between items-center text-[#00ff00]">
        <div className="flex items-center gap-2">
          <span className="animate-pulse">█</span>
          <span>CYBER_SEC_TERMINAL v2.0</span>
        </div>
        <div className="text-sm">
          {currentTime.toLocaleTimeString()} | {currentTime.toLocaleDateString()}
        </div>
      </div>
      <div className="text-xs mt-1 text-[#00ff00]/70">
        User: root@Harut0 | Status: ONLINE
      </div>
    </div>
  );
}
