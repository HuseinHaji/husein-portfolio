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
        <p className="text-xs uppercase tracking-[0.25em] text-blue-600">
          Data · Analytics · Economics
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-blue-600">Huseyn Hajiyev</span>
        </h1>

        <p className="text-lg text-slate-600 max-w-xl">
          Data Analyst and Economics student with{" "}
          <span className="text-blue-500">
            hands-on experience in data analysis, machine learning and visualization
          </span>
          . I enjoy turning raw data into clear, actionable insights that support
          real business and policy decisions.
        </p>

        <p className="text-sm text-slate-500">
          Open to Working Student Data Analyst, Junior Data Analyst, or analytics-focused internships in Germany
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-colors"
          >
            View projects
          </a>

          <a
            href="#contact"
            className="px-4 py-2 rounded-full border border-slate-300 hover:border-blue-600 text-sm font-semibold text-slate-800 hover:text-blue-500 transition-colors"
          >
            Contact me
          </a>

          <a
            href="/Huseyn_Hajiyev_Resume.pdf"
            className="px-4 py-2 rounded-full border border-slate-300 hover:border-blue-600 text-sm font-semibold text-slate-800 hover:text-blue-500 transition-colors"
            download
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap gap-3 pt-3 text-xs text-slate-600">
          <span className="rounded-full border border-slate-300 px-3 py-1">
            3+ years in data analytics
          </span>
          <span className="rounded-full border border-slate-300 px-3 py-1">
            M.Sc. Economics · University of Bonn
          </span>
          <span className="rounded-full border border-slate-300 px-3 py-1">
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
        <div className="relative rounded-2xl border border-slate-300 bg-white p-7 shadow-lg shadow-slate-200">
          <a
            href="https://www.linkedin.com/in/huseynhajiyev10"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-36 w-36 mx-auto mb-5 rounded-2xl overflow-hidden border border-slate-300 hover:border-blue-600 transition-all"
          >
            <img
              src={huseynPhoto}
              alt="Huseyn Hajiyev"
              className="h-full w-full object-cover"
            />
          </a>

          <div className="space-y-2 text-center">
            <p className="text-base font-semibold text-slate-900">
              Data Analyst
            </p>

            <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">
              3+ years of analytics experience 
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
