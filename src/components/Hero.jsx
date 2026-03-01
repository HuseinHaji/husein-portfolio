import { motion } from "framer-motion";
import huseynPhoto from "../assets/huseyn.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col md:flex-row items-start md:items-center gap-10 sm:gap-12"
    >
      {/* Left – text */}
      <motion.div
        className="flex-1 space-y-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-accent">
          Analytics · Economics · Data Science
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-accent">Huseyn Hajiyev</span>
        </h1>

        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Data Analyst and M.Sc. Economics student with 3+ years of hands-on experience building dashboards, statistical models, and data-driven insights. I transform complex datasets into clear, actionable intelligence for business and policy decisions.
        </p>

        <p className="text-sm text-muted">
          Seeking Data Analyst roles (working student, junior, or internship) in Germany
        </p>

        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href="#projects"
            className="px-4 py-2.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-4 py-2.5 rounded-lg border-2 border-accent bg-surface text-accent hover:bg-bg text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get in Touch
          </a>

          <a
            href="/Huseyn_Hajiyev_Resume.pdf"
            className="px-4 py-2.5 rounded-lg border-2 border-border bg-surface text-text hover:border-accent hover:text-accent text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            download
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 text-xs text-muted">
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            3+ years analytics
          </span>
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            M.Sc. Economics (Bonn)
          </span>
          <span className="rounded-full border border-border px-3 py-1 bg-white">
            Python · SQL · Power BI · Tableau
          </span>
        </div>

      </motion.div>

      {/* Right – card (BIGGER) */}
      <motion.div
        className="w-full md:w-80"    // <--- increased from md:w-64
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative rounded-2xl border border-border bg-surface p-7 shadow-sm">
          <a
            href="https://www.linkedin.com/in/huseynhajiyev10"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-36 w-36 mx-auto mb-5 rounded-2xl overflow-hidden border-2 border-border hover:border-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent"
          >
            <img
              src={huseynPhoto}
              alt="Huseyn Hajiyev"
              className="h-full w-full object-cover"
            />
          </a>

          <div className="space-y-2 text-center">
            <p className="text-base font-semibold text-text">
              Data Analyst
            </p>

            <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
              Analytics Professional · University of Bonn
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
