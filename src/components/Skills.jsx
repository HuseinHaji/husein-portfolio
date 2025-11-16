const skillGroups = [
  {
    title: "Programming & Data",
    skills: [
      "Python (Pandas, NumPy, SciPy)",
      "R (basics)",
      "SQL",
      "PostgreSQL / MySQL / Oracle",
      "APIs",
      "Git & GitHub",
    ],
  },
  {
    title: "Machine Learning & Statistics",
    skills: [
      "scikit-learn",
      "TensorFlow / Keras (basics)",
      "Statistical modeling",
      "Segmentation & risk models",
      "Forecasting & time series",
    ],
  },
  {
    title: "Analytics & Visualization",
    skills: [
      "Power BI",
      "Tableau",
      "Qlik Sense",
      "Excel (advanced)",
      "Dashboard design",
    ],
  },
  {
    title: "Soft Skills & Languages",
    skills: [
      "Analytical thinking",
      "Problem-solving",
      "Storytelling with data",
      "Team collaboration",
      "English (C1), German (B1)",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-4 scroll-mt-28">
      <h2 className="text-xl font-semibold tracking-tight">
        Skills
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
            <h3 className="text-sm font-semibold text-slate-100 mb-2">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-2.5 py-1 text-xs text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
