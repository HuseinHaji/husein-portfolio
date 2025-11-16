import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="space-y-4" delay={0.05}>
      <h2 className="text-xl font-semibold tracking-tight">Skills</h2>

      <p className="text-sm text-slate-300 max-w-2xl">
        I&apos;m most comfortable working end-to-end on analytics problems:
        pulling data, cleaning it, modeling it and turning it into clear,
        visual stories for decision makers.
      </p>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* Core analytics work */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 space-y-3"
        >
          <h3 className="text-sm font-semibold text-slate-100">
            Core analytics & modeling
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li>
              • <span className="font-medium text-sky-300">Python</span> for data
              cleaning, feature engineering and modeling (Pandas, NumPy, SciPy,
              scikit-learn).
            </li>
            <li>
              • <span className="font-medium text-sky-300">SQL</span> (Oracle,
              PostgreSQL, MySQL) for querying, joins and analytical reporting.
            </li>
            <li>
              • Building <span className="font-medium">classification and
              forecasting models</span> for risk, segmentation and performance.
            </li>
            <li>
              • Comfortable with <span className="font-medium">APIs</span>, data
              ingestion and basic automation scripts.
            </li>
          </ul>
        </motion.div>

        {/* BI, visualization & soft skills */}
        <motion.div
          variants={cardVariants}
          className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4 space-y-3"
        >
          <h3 className="text-sm font-semibold text-slate-100">
            BI, visualization & communication
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li>
              • <span className="font-medium text-sky-300">Power BI</span> and{" "}
              <span className="font-medium text-sky-300">Tableau</span> for
              interactive dashboards and management reporting.
            </li>
            <li>
              • <span className="font-medium text-sky-300">Excel (advanced)</span>{" "}
              for quick analysis, prototyping and hand-over to non-technical teams.
            </li>
            <li>
              • Comfortable explaining{" "}
              <span className="font-medium">technical results in simple terms</span>{" "}
              to business stakeholders.
            </li>
            <li>
              • Languages: English (C1), German (B1), Azerbaijani (native).
            </li>
          </ul>
        </motion.div>

        {/* Optional small third card (tools & workflow) */}
        <motion.div
          variants={cardVariants}
          className="md:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/40 p-4 space-y-2"
        >
          <h3 className="text-sm font-semibold text-slate-100">
            Tools & workflow
          </h3>
          <p className="text-xs text-slate-300">
            Git & GitHub · Jupyter / VS Code · Oracle DB · basic R · basic
            TensorFlow/Keras · documentation and reproducible analysis (notebooks,
            dashboards, clear reports).
          </p>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  );
}
