import AnimatedSection from "./AnimatedSection";
import LinkedInIcon from "../icons/LinkedIn";
import GitHubIcon from "../icons/GitHub";
import InstagramIcon from "../icons/Instagram";
import EmailIcon from "../icons/Email";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="space-y-4" delay={0.2}>
      <h2 className="text-xl font-semibold tracking-tight">Contact</h2>

      <p className="text-sm text-slate-300 max-w-xl">
        Feel free to reach out about analytics, research or opportunities.
      </p>

      <div className="grid gap-3 sm:grid-cols-2">

        {/* Email card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Email
          </p>
          <a
            href="mailto:huseynhadjiyev@outlook.com"
            className="flex items-center gap-2 text-sky-400 hover:text-sky-300"
          >
            <EmailIcon className="w-4 h-4" />
            huseynhadjiyev@outlook.com
          </a>
        </div>

        {/* Socials card */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-sm space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            Socials
          </p>

          <div className="flex flex-col gap-2 text-xs">

            <a
              href="https://www.linkedin.com/in/huseynhajiyev10"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-200 hover:text-sky-300"
            >
              <LinkedInIcon className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-200 hover:text-sky-300"
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/huseinhajiev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-slate-200 hover:text-sky-300"
            >
              <InstagramIcon className="w-4 h-4" />
              Instagram
            </a>

          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
