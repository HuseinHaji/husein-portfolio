const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];
  
  export default function Navbar() {
    return (
      <header className="fixed top-0 inset-x-0 z-30 backdrop-blur border-b border-slate-800/80 bg-slate-950/70">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            <span className="text-slate-100">Husein</span>
            <span className="text-sky-400">.dev</span>
          </a>
          <div className="hidden sm:flex gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-slate-300 hover:text-sky-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>
    );
  }
  