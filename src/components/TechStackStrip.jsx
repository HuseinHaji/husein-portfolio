import { motion } from "framer-motion";

const stack = [
  "Python",
  "R (basics)",
  "SQL",
  "Power BI",
  "Tableau",
  "Excel (advanced)",
  "Git & GitHub",
];

export default function TechStackStrip() {
  return (
    <motion.section
      className="scroll-mt-28"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 sm:px-6 sm:py-4 flex flex-wrap items-center gap-2 sm:gap-3">
        <p className="text-xs sm:text-sm font-semibold text-slate-200">
          Tech stack:
        </p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-flex items-center rounded-full bg-slate-900 border border-slate-700 px-2.5 py-1 text-[11px] sm:text-xs text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
