import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [fakeThemeOn, setFakeThemeOn] = useState(true); // just for toggle animation

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(item.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    setFakeThemeOn((prev) => !prev);
  };

  return (
    <motion.header
      className="fixed top-0 inset-x-0 z-30 backdrop-blur border-b border-slate-800/80 bg-slate-950/80"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-slate-100"
          >
            <span>Husein</span>
            <span className="text-sky-400">.dev</span>
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`transition-all rounded-md px-1 ${
                active === item.id
                  ? "text-sky-400 font-semibold"
                  : "text-slate-300 hover:text-sky-400"
              } focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-500`}
            >
              {item.label}
            </a>
          ))}

          {/* iPhone-style toggle (just for vibe) */}
          <button
            onClick={handleToggle}
            className="ml-4 inline-flex items-center"
            aria-label="Theme toggle (visual only)"
          >
            <div className="relative w-11 h-6 rounded-full bg-slate-800 border border-slate-600 flex items-center px-1">
              <motion.div
                className="h-4 w-4 rounded-full bg-slate-100 text-[10px] flex items-center justify-center"
                animate={{
                  x: fakeThemeOn ? 0 : 18,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                {fakeThemeOn ? "🌙" : "☀️"}
              </motion.div>
            </div>
          </button>
        </div>

        {/* Mobile nav + toggle */}
        <div className="flex sm:hidden items-center gap-3 text-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`transition-all ${
                active === item.id
                  ? "text-sky-400 font-semibold"
                  : "text-slate-300 hover:text-sky-400"
              }`}
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={handleToggle}
            className="inline-flex items-center"
            aria-label="Theme toggle (visual only)"
          >
            <div className="relative w-10 h-5 rounded-full bg-slate-800 border border-slate-600 flex items-center px-[2px]">
              <motion.div
                className="h-4 w-4 rounded-full bg-slate-100 text-[9px] flex items-center justify-center"
                animate={{
                  x: fakeThemeOn ? 0 : 14,
                }}
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
              >
                {fakeThemeOn ? "🌙" : "☀️"}
              </motion.div>
            </div>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
