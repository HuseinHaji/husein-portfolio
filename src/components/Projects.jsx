import { useState } from "react";

const projects = [
  {
    slug: "yield-curve-suite",
    name: "Yield Curve Modeling Suite",
    status: "In progress",
    description:
      "Research-oriented Python toolkit for term-structure analysis: bootstrapping, nonparametric smoothing, factor models and Monte Carlo simulations.",
    role: "Personal research / university term paper support",
    tech: ["Python", "NumPy", "Pandas", "Econometrics", "SciPy"],
    highlights: [
      "Implements bootstrapping routines to estimate zero-coupon yield curves from bond data.",
      "Experiments with nonparametric smoothing and factor models to describe the term structure.",
      "Includes Monte Carlo simulations to study estimator properties and model robustness.",
    ],
    link: "https://github.com/", // TODO: replace with real repo
  },
  {
    slug: "lichess-analyzer",
    name: "Lichess Game Analyzer",
    status: "Side project",
    description:
      "Analyzes Lichess games and generates performance statistics, opening insights and visualizations of mistakes over time.",
    role: "Personal project combining chess with data analysis",
    tech: ["Python", "APIs", "Data Visualization"],
    highlights: [
      "Pulls game data from the Lichess API and stores it in a structured format.",
      "Computes performance metrics by opening, time control and opponent strength.",
      "Creates simple plots to visualize blunders and improvements over time.",
    ],
    link: "https://github.com/", // TODO: replace with real repo
  },
  {
    slug: "stoic-whatsapp-bot",
    name: "Stoic WhatsApp Bot",
    status: "Completed",
    description:
      "WhatsApp bot that sends daily Stoic quotes and reflections, built with Twilio and simple automation in Python.",
    role: "Automation project to practice APIs and deployment",
    tech: ["Python", "Twilio", "Scheduling"],
    highlights: [
      "Connects to Twilio WhatsApp API to send scheduled messages.",
      "Stores and rotates Stoic quotes and short reflections.",
      "Designed as a small daily habit / motivation system.",
    ],
    link: "https://github.com/", // TODO: replace with real repo
  },
];

export default function Projects() {
  const [activeSlug, setActiveSlug] = useState(projects[0].slug);
  const activeProject = projects.find((p) => p.slug === activeSlug);

  return (
    <section id="projects" className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">
        Projects
      </h2>
      <p className="text-sm text-slate-300">
        A selection of projects that combine my interests in data analytics,
        econometrics and automation. Click a project on the left to see more
        detail.
      </p>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        {/* Left: project list */}
        <div className="space-y-3">
          {projects.map((project) => {
            const isActive = project.slug === activeSlug;
            return (
              <button
                key={project.slug}
                onClick={() => setActiveSlug(project.slug)}
                className={`w-full text-left rounded-2xl border p-4 transition-colors ${
                  isActive
                    ? "border-sky-500/70 bg-slate-900"
                    : "border-slate-800 bg-slate-900/40 hover:border-slate-600"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-100">
                    {project.name}
                  </h3>
                  <span className="text-[11px] text-slate-400">
                    {project.status}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-300 line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-slate-800 px-2 py-0.5 text-[11px] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: detail panel */}
        {activeProject && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-100">
                  {activeProject.name}
                </h3>
                <p className="text-xs text-slate-400">
                  {activeProject.role}
                </p>
              </div>
              <span className="text-[11px] text-sky-400">
                {activeProject.status}
              </span>
            </div>

            <p className="text-xs text-slate-300">
              {activeProject.description}
            </p>

            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-slate-200">
                Highlights
              </p>
              <ul className="space-y-1 text-[11px] text-slate-300">
                {activeProject.highlights.map((h) => (
                  <li key={h}>• {h}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold text-slate-200">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeProject.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-2 py-0.5 text-[11px] text-slate-200"
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
                className="inline-flex text-[11px] font-medium text-sky-400 hover:text-sky-300"
              >
                View on GitHub ↗
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
