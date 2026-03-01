import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    slug: "yield-curve-suite",
    name: "Yield Curve Modeling Suite",
    status: "In progress",
    description:
      "Research-oriented Python toolkit for term-structure analysis: bootstrapping, nonparametric smoothing, factor models and Monte Carlo simulations.",
    role: "University research project",
    problem: "Accurately model bond yield curves from market data",
    method: "Bootstrapping, nonparametric smoothing, Monte Carlo simulations",
    outcome: "Robust estimators for zero-coupon curves; tools for further research",
    tech: ["Python", "NumPy", "Pandas", "Econometrics", "SciPy"],
    highlights: [
      "Bootstrapping routines to estimate zero-coupon yield curves from raw bond data",
      "Nonparametric smoothing and factor models for term structure analysis",
      "Monte Carlo simulations validating estimator robustness",
    ],
    link: "https://github.com/", // TODO: replace with real repo
  },
  {
    slug: "lichess-analyzer",
    name: "Lichess Game Analyzer",
    status: "Side project",
    description:
      "Personal data project analyzing 500+ chess games to identify patterns in performance and mistakes.",
    role: "Personal project (data + chess)",
    problem: "Understand own chess performance across openings and time controls",
    method: "API data extraction, performance metrics calculation, time-series visualization",
    outcome: "Identified patterns in blunders; tracked improvement over 6+ months",
    tech: ["Python", "APIs", "Pandas", "Matplotlib"],
    highlights: [
      "Pulls structured game data from Lichess API and processes into analytical format",
      "Computes win rates, blunder frequency, and performance by opponent strength",
      "Time-series visualizations showing measurable improvement trends",
    ],
    link: "https://github.com/", // TODO: replace with real repo
  },
  {
    slug: "stoic-whatsapp-bot",
    name: "Stoic WhatsApp Bot",
    status: "Completed",
    description:
      "Automated WhatsApp bot delivering daily Stoic quotes and reflections using Python and Twilio.",
    role: "Automation & deployment practice",
    problem: "Deliver daily content to users without manual effort",
    method: "Twilio API, Python scheduling, cloud deployment",
    outcome: "Reliable daily automation; hands-on API and deployment experience",
    tech: ["Python", "Twilio", "Scheduling", "Cloud"],
    highlights: [
      "Twilio WhatsApp API integration for scheduled message delivery",
      "Rotating quote database with reflective prompts",
      "Deployed automation requiring zero manual intervention",
    ],
    link: "https://github.com/", // TODO: replace with real repo
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const panelVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const activeProject = projects.find((p) => p.slug === activeSlug);

  return (
    <AnimatedSection id="projects" className="space-y-4" delay={0.1}>
      <h2 className="text-xl font-semibold tracking-tight">
        Projects
      </h2>
      <p className="text-sm text-muted leading-relaxed">
        A portfolio of analytics, modeling, and data engineering projects. Select a project to see the problem, approach, and outcome.
      </p>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {/* Left: project list */}
        <motion.div
          className="space-y-3"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {projects.map((project) => {
            const isActive = project.slug === activeSlug;
            return (
              <motion.button
                key={project.slug}
                variants={listItemVariants}
                onClick={() => setActiveSlug(project.slug)}
                className={`w-full text-left rounded-2xl border p-4 transition-all ${
                  isActive
                    ? "border-accent bg-surface shadow-sm"
                    : "border-border bg-white/40 hover:border-border hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-text">
                    {project.name}
                  </h3>
                  <span className="text-[11px] text-muted">
                    {project.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-bg px-2 py-0.5 text-[11px] text-text"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Right: detail panel */}
        {activeProject && (
          <motion.div
            key={activeProject.slug}
            className="rounded-2xl border border-border bg-surface p-5 space-y-3 shadow-sm"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-text">
                  {activeProject.name}
                </h3>
                <p className="text-xs text-muted">
                  {activeProject.role}
                </p>
              </div>
              <span className="text-[11px] text-accent">
                {activeProject.status}
              </span>
            </div>

            <p className="text-xs text-muted leading-relaxed">
              {activeProject.description}
            </p>

            <div className="space-y-1.5 border-t border-border pt-3">
              <div>
                <p className="text-[11px] font-semibold text-text mb-1">Problem</p>
                <p className="text-xs text-muted">{activeProject.problem}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-text mb-1">Method</p>
                <p className="text-xs text-muted">{activeProject.method}</p>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-text mb-1">Outcome</p>
                <p className="text-xs text-muted">{activeProject.outcome}</p>
              </div>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-text">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-border bg-bg px-2 py-0.5 text-[11px] text-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {activeProject.link && (
              <a
                href={activeProject.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex text-[11px] font-medium text-accent hover:text-accent-hover transition-colors focus-visible:ring-1 focus-visible:ring-accent"
              >
                View on GitHub ↗
              </a>
            )}
          </motion.div>
        )}
      </div>
    </AnimatedSection>
  );
}
