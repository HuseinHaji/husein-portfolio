import { motion } from "framer-motion";

const rows = [
  {
    label: "Core analytics",
    items: ["Python", "R (basics)", "SQL"],
  },
  {
    label: "BI & visualization",
    items: ["Power BI", "Tableau", "Excel (advanced)"],
  },
  {
    label: "Data platforms & tools",
    items: ["Oracle DB", "Git & GitHub", "APIs"],
  },
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
      <div className="rounded-2xl border border-border bg-surface px-5 py-4 sm:px-6 sm:py-5 space-y-3 shadow-sm">
        <p className="text-xs sm:text-sm font-semibold text-text">
          Tech I use to ship real work:
        </p>

        <div className="space-y-2.5 text-[11px] sm:text-xs text-muted">
          {rows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2"
            >
              <span className="w-40 shrink-0 font-medium text-text">
                {row.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {row.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full bg-bg border border-border px-2.5 py-0.5 text-text"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
