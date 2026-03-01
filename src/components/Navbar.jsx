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
      className="fixed top-0 inset-x-0 z-30 backdrop-blur border-b border-border bg-surface/90"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <a
            href="#top"
            className="text-sm font-semibold tracking-tight text-text"
          >
            <span>Husein</span>
            <span className="text-accent">.dev</span>
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`transition-colors rounded-md px-1 ${
                active === item.id
                  ? "text-accent font-semibold"
                  : "text-muted hover:text-text"
              } focus:outline-none focus-visible:ring-1 focus-visible:ring-accent`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="flex sm:hidden items-center gap-3 text-xs">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActive(item.id)}
              className={`transition-colors ${
                active === item.id
                  ? "text-accent font-semibold"
                  : "text-muted hover:text-text"
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

