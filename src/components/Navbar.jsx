import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [active, setActive] = useState("about");
  const isDark = theme === "dark";

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

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-30 backdrop-blur border-b ${
        isDark
          ? "border-slate-800/80 bg-slate-950/80"
          : "border-slate-200/80 bg-slate-50/80"
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className={`text-sm font-semibold tracking-tight ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}
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
                  ? "text-sky-500 font-semibold"
                  : isDark
                  ? "text-slate-300 hover:text-sky-400"
                  : "text-slate-700 hover:text-sky-500"
              } focus:outline-none focus-visible:ring-1 focus-visible:ring-sky-500`}
            >
              {item.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className={`ml-4 inline-flex items-center justify-center w-8 h-8 rounded-full border text-xs transition-all ${
              isDark
                ? "border-slate-700 bg-slate-900 text-slate-100 hover:border-sky-500"
                : "border-slate-300 bg-slate-100 text-slate-800 hover:border-sky-500"
            }`}
            aria-label="Toggle light/dark mode"
          >
            {isDark ? "☀️" : "🌙"}
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
                  ? "text-sky-500 font-semibold"
                  : isDark
                  ? "text-slate-300 hover:text-sky-400"
                  : "text-slate-700 hover:text-sky-500"
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            className={`inline-flex items-center justify-center w-7 h-7 rounded-full border text-[11px] transition-all ${
              isDark
                ? "border-slate-700 bg-slate-900 text-slate-100 hover:border-sky-500"
                : "border-slate-300 bg-slate-100 text-slate-800 hover:border-sky-500"
            }`}
            aria-label="Toggle light/dark mode"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
