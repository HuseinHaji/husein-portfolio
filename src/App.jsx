import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStackStrip from "./components/TechStackStrip";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-24 pb-24 space-y-28 text-[15px] sm:text-[16px]">
        <Hero />
        <TechStackStrip />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <footer className="border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Huseyn Hajiyev. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="mailto:huseynhadjiyev@outlook.com"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <span>📧</span>
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/huseynhajiyev10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
            >
              <span>🔗</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-sky-400 transition-colors"
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
