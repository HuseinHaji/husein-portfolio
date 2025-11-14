export default function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col md:flex-row items-start md:items-center gap-8"
    >
      {/* Left – text */}
      <div className="flex-1 space-y-4">
        <p className="text-xs uppercase tracking-[0.25em] text-sky-400">
          Data Analytics · Data Science · Economics
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-sky-400">
            Huseyn Hajiyev
          </span>
        </h1>
        <p className="text-lg text-slate-300 max-w-xl">
          Data Analyst and Economics student with{" "}
          <span className="text-sky-300">
            hands-on experience in data analysis, machine learning and
            visualization
          </span>
          . I enjoy turning raw data into clear, actionable insights that
          support real business and policy decisions.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="#projects"
            className="px-4 py-2 rounded-full bg-sky-500 hover:bg-sky-400 text-sm font-semibold transition-colors"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="px-4 py-2 rounded-full border border-slate-700 hover:border-sky-400 text-sm font-semibold text-slate-200 hover:text-sky-300 transition-colors"
          >
            Contact me
          </a>
          <a
            href="/Huseyn_Hajiyev_Resume.pdf"
            className="px-4 py-2 rounded-full border border-slate-700 hover:border-sky-400 text-sm font-semibold text-slate-200 hover:text-sky-300 transition-colors"
            download
          >
            Download CV
          </a>
        </div>
        <p className="text-xs text-slate-500">
          Focus: Python · R · SQL · Power BI · Tableau · Econometrics
        </p>
      </div>

      {/* Right – card */}
      <div className="w-full md:w-64">
        <div className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-5 shadow-lg shadow-sky-950/40">
          <div className="h-28 w-28 rounded-2xl bg-slate-800 mx-auto mb-4 flex items-center justify-center text-4xl">
            <span className="select-none">📈</span>
          </div>
          <div className="space-y-1 text-center">
            <p className="text-sm font-semibold text-slate-100">
              Data Analyst & Econ Student
            </p>
            <p className="text-xs text-slate-400">
              M.Sc. Economics ·  
              3 years of analytics experience 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
