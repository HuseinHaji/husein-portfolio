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
      className="fixed top-0 inset-x-0 z-30 backdrop-blur border-b border-slate-800/80 bg-slate-950/70"
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
        <div className="hidden sm:flex gap-6 text-sm">
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
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden gap-3 text-xs">
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
        </div>
      </nav>
    </motion.header>
  );
}
