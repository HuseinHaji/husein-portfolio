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
        className="flex-1 space-y-5"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-xs uppercase tracking-[0.25em] text-muted">
          Data · Analytics · Economics
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-text">
          Hi, I&apos;m{" "}
          <span className="text-accent">Huseyn Hajiyev</span>
        </h1>

        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Data Analyst and Economics student with{" "}
          <span className="text-text font-medium">
            hands-on experience in data analysis, machine learning, and visualization
          </span>
          . I turn raw data into clear, actionable insights that support business and
          policy decisions.
        </p>

        <p className="text-sm text-muted">
          Open to Working Student Data Analyst, Junior Data Analyst, or analytics-focused internships in Germany
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl bg-accent hover:bg-accent-hover text-sm font-medium text-white transition-colors"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-xl border border-border bg-surface text-sm font-medium text-text hover:bg-bg transition-colors"
          >
            Contact me
          </a>

          <a
            href="/Huseyn_Hajiyev_Resume.pdf"
            className="px-4 py-2 rounded-xl border border-border bg-surface text-sm font-medium text-text hover:bg-bg transition-colors"
            download
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-3 pt-3 text-xs text-muted">
          <span className="rounded-full border border-border bg-surface px-3 py-1">
            3+ years in data analytics
          </span>
          <span className="rounded-full border border-border bg-surface px-3 py-1">
            M.Sc. Economics · University of Bonn
          </span>
          <span className="rounded-full border border-border bg-surface px-3 py-1">
            Python · SQL · Power BI · Tableau
          </span>
        </div>
      </motion.div>

      {/* Right – profile card */}
      <motion.div
        className="w-full md:w-80"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="relative rounded-2xl border border-border bg-surface p-7 shadow-sm">
          <a
            href="https://www.linkedin.com/in/huseynhajiyev10"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-36 w-36 mx-auto mb-5 rounded-2xl overflow-hidden border border-border hover:border-accent transition-colors"
            aria-label="Open LinkedIn profile"
          >
            <img
              src={huseynPhoto}
              alt="Huseyn Hajiyev"
              className="h-full w-full object-cover"
            />
          </a>

          <div className="space-y-2 text-center">
            <p className="text-base font-semibold text-text">Data Analyst</p>
            <p className="text-sm text-muted leading-relaxed max-w-xs mx-auto">
              3+ years of analytics experience
            </p>

            <div className="pt-2">
              <a
                href="https://www.linkedin.com/in/huseynhajiyev10"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:text-accent-hover underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}