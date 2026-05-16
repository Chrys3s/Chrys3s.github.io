import { Link, useLocation } from 'react-router';

export function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'HOME', icon: '~' },
    { path: '/about', label: 'ABOUT', icon: 'i' },
    { path: '/skills', label: 'SKILLS', icon: '*' },
    { path: '/projects', label: 'PROJECTS', icon: '#' },
    { path: '/contact', label: 'CONTACT', icon: '@' },
  ];

  return (
    <nav className="mb-8 border border-[#00ff00]/30 p-4 bg-black/50">
      <div className="text-xs text-[#00ff00]/60 mb-3">$ ls /navigation/</div>
      <div className="flex flex-wrap gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              px-4 py-2 border transition-colors
              ${location.pathname === item.path
                ? 'border-[#00ff00] bg-[#00ff00]/20 text-[#00ff00]'
                : 'border-[#00ff00]/50 hover:bg-[#00ff00]/10 text-[#00ff00]/80'
              }
            `}
          >
            [{item.icon}] {item.label}
          </Link>
        ))}
      </div>
      <div className="mt-3 text-xs text-[#00ff00]/60">
        Current directory: {location.pathname}
      </div>
    </nav>
  );
}
