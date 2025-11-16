export default function Contact() {
  return (
    <section id="contact" className="space-y-4 scroll-mt-28">
      <h2 className="text-xl font-semibold tracking-tight">
        Contact
      </h2>
      <p className="text-sm text-slate-300 max-w-xl">
        If you&apos;d like to talk about data analytics, research projects or
        potential opportunities, feel free to reach out via email or LinkedIn.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Email
          </p>
          <a
            href="mailto:huseynhadjiyev@outlook.com"
            className="text-sky-400 hover:text-sky-300 break-all"
          >
            huseynhadjiyev@outlook.com
          </a>
          <p className="text-xs text-slate-500">
            This is the best way to reach me for professional inquiries.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Links
          </p>
          <div className="flex flex-col gap-1">
            <a
              href="https://www.linkedin.com/in/huseynhajiyev10"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 hover:text-sky-300 text-xs"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/huseinhaji"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 hover:text-sky-300 text-xs"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.instagram.com/huseinhajiev"
              target="_blank"
              rel="noreferrer"
              className="text-slate-200 hover:text-sky-300 text-xs"
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
