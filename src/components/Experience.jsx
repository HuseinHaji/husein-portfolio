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

export default function Experience() {
  return (
    <section id="experience" className="space-y-4 scroll-mt-28">
      <h2 className="text-xl font-semibold tracking-tight">
        Experience & Education
      </h2>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div
            key={exp.role + exp.org}
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4"
          >
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
                <li key={b} className="leading-relaxed">
                  • {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
