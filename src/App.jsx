import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStackStrip from "./components/TechStackStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";
import SectionDivider from "./components/SectionDivider";

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-slate-100"
          : "min-h-screen bg-slate-50 text-slate-900"
      }
    >
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((prev) => (prev === "dark" ? "light" : "dark"))
        }
      />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-24 space-y-16 sm:space-y-24 text-[15px] sm:text-[16px]">
        <Hero />
        <TechStackStrip />
        <SectionDivider />

        <About />
        <SectionDivider />

        <Skills />
        <SectionDivider />

        <Projects />
        <SectionDivider />

        <Experience />
        <SectionDivider />

        <Contact />
      </main>

      <footer
        className={
          isDark
            ? "border-t border-slate-800 py-6"
            : "border-t border-slate-200 py-6 bg-slate-100/70"
        }
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className={isDark ? "text-slate-500" : "text-slate-600"}>
            © {new Date().getFullYear()} Huseyn Hajiyev. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="mailto:huseynhadjiyev@outlook.com"
              className={`inline-flex items-center gap-1 hover:text-sky-500 transition-colors ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span>📧</span>
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/huseynhajiyev10"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 hover:text-sky-500 transition-colors ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1 hover:text-sky-500 transition-colors ${
                isDark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <span>💻</span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;
