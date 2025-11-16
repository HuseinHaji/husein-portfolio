import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

// ----------------------
// WORK EXPERIENCE
// ----------------------
const work = [
  {
    role: "Data Analyst | Working Student",
    org: "Atradius",
    period: "Mar 2025 – Present",
    location: "Cologne, Germany · On-site",
    bullets: [
      "Creation of ad-hoc queries, reports and data analyses for global risk underwriting.",
      "Development of ML models for credit limit decisions (neural nets, fuzzy logic).",
      "Working with Oracle DB, ML platforms and MS Office suite.",
    ],
  },
  // ... (your other jobs unchanged)
];

// ----------------------
// EDUCATION
// ----------------------
const education = [
  {
    role: "M.Sc. Economics",
    org: "University of Bonn",
    period: "2024 – Present",
    location: "Bonn, Germany",
    bullets: [
      "Focus on Econometrics, Statistics, and quantitative methods.",
      "Research in finance and term-structure modeling.",
    ],
  },
  {
    role: "Bachelor of Business Administration (GPA: 94.07)",
    org: "Azerbaijan State University of Economics",
    period: "2019 – 2023",
    location: "Azerbaijan",
    bullets: [
      "Strong foundation in quantitative analysis, statistics and finance.",
      "Graduated with distinction (94.07 GPA).",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="space-y-10" delay={0.15}>
      <h2 className="text-xl font-semibold tracking-tight">
        Experience & Education
      </h2>

      {/* WORK EXPERIENCE */}
      <div>
        <h3 className="text-lg font-semibold text-sky-400 mb-4">
          Work Experience
        </h3>

        <motion.div
          className="relative mt-4 pl-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 border-l border-slate-800/70" />

          {work.map((exp) => (
            <motion.div
              key={exp.role + exp.org}
              variants={itemVariants}
              className="relative pb-8 last:pb-0"
            >
              {/* Timeline Dot (centered on line) */}
              <div className="absolute left-[10px] top-2 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 ml-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">
                      {exp.role}
                    </p>
                    <p className="text-xs text-slate-400">{exp.org}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">{exp.period}</p>
                    <p className="text-[11px] text-slate-500">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-2 space-y-1 text-xs text-slate-300">
                  {exp.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* EDUCATION */}
      <div>
        <h3 className="text-lg font-semibold text-sky-400 mb-4">Education</h3>

        <motion.div
          className="relative mt-4 pl-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 border-l border-slate-800/70" />

          {education.map((exp) => (
            <motion.div
              key={exp.role + exp.org}
              variants={itemVariants}
              className="relative pb-8 last:pb-0"
            >
              {/* Timeline Dot (centered) */}
              <div className="absolute left-[10px] top-2 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />

              <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 ml-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-100">
                      {exp.role}
                    </p>
                    <p className="text-xs text-slate-400">{exp.org}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400">{exp.period}</p>
                    <p className="text-[11px] text-slate-500">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-2 space-y-1 text-xs text-slate-300">
                  {exp.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
