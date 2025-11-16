import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Data Analyst",
    org: "FINCA NBCO",
    period: "Jun 2023 – Aug 2024",
    location: "Azerbaijan",
    bullets: [
      "Developed data-driven models to improve customer segmentation and risk assessment.",
      "Streamlined data workflows with Python and SQL, reducing processing time and improving reporting efficiency.",
      "Designed dashboards in Power BI and Tableau to translate complex data into clear business insights.",
    ],
  },
  {
    role: "Data Scientist",
    org: "QSS Analytics LLC",
    period: "Mar 2023 – May 2023",
    location: "Azerbaijan",
    bullets: [
      "Built automated dashboards and predictive models using Python, SQL and BI tools.",
      "Applied statistical and machine learning techniques to identify trends and support decisions.",
      "Delivered insights through interactive dashboards and clear reports for non-technical stakeholders.",
    ],
  },
  {
    role: "Data Analyst",
    org: "ANG LLC",
    period: "Nov 2021 – Nov 2022",
    location: "Azerbaijan",
    bullets: [
      "Analyzed large datasets using statistical techniques to uncover trends and drivers.",
      "Supported forecasting and planning by improving the accuracy and clarity of analytics.",
      "Created data-driven reports for leadership with a focus on clarity and actionability.",
    ],
  },
  {
    role: "M.Sc. Economics",
    org: "University of Bonn",
    period: "2024 – present",
    location: "Bonn, Germany",
    bullets: [
      "Focus on Econometrics, Statistics and data-oriented courses.",
      "Developing research projects related to finance and term-structure modeling.",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="space-y-4" delay={0.15}>
      <h2 className="text-xl font-semibold tracking-tight">
        Experience & Education
      </h2>

      <motion.div
        className="relative mt-4 pl-6 sm:pl-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* vertical line */}
        <div className="absolute left-2 sm:left-3 top-0 bottom-0 border-l border-slate-800/70" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.org}
            variants={itemVariants}
            className="relative pl-4 sm:pl-6 pb-8 last:pb-0"
          >
            {/* timeline dot */}
            <div className="absolute left-0 sm:left-1 top-2 h-3 w-3 rounded-full border border-sky-400 bg-slate-950" />

            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-sm font-semibold text-slate-100">
                    {exp.role}
                  </p>
                  <p className="text-xs text-slate-400">{exp.org}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-400">{exp.period}</p>
                  <p className="text-[11px] text-slate-500">
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="mt-2 space-y-1 text-xs text-slate-300">
                {exp.bullets.map((b) => (
                  <li key={b} className="leading-relaxed">
                    • {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}
