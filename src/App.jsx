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

import EmailIcon from "./icons/Email";
import LinkedInIcon from "./icons/LinkedIn";
import GitHubIcon from "./icons/GitHub";
import InstagramIcon from "./icons/Instagram";

function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-16 space-y-8 sm:space-y-16 text-[15px] sm:text-[16px]">
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

      <footer className="border-t border-border py-6 bg-bg">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted">
          <p>© {new Date().getFullYear()} Huseyn Hajiyev. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="mailto:huseynhadjiyev@outlook.com"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors focus-visible:ring-1 focus-visible:ring-accent"
            >
              <EmailIcon className="w-4 h-4" />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/huseynhajiyev10"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors focus-visible:ring-1 focus-visible:ring-accent"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors focus-visible:ring-1 focus-visible:ring-accent"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.instagram.com/huseinhajiev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-accent transition-colors focus-visible:ring-1 focus-visible:ring-accent"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
}

export default App;
