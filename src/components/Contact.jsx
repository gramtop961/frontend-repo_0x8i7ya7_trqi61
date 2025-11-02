import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">Let’s build something great</h2>
          <p className="mt-2 text-white/70">
            I’m currently exploring new opportunities and collaborations. Drop a line and I’ll get back soon.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-3 max-w-3xl">
          <a
            href="mailto:naitik@example.com"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-300">
              <Mail size={18} />
            </span>
            <div>
              <div className="text-white font-medium">Email</div>
              <div className="text-white/70 text-sm">naitik@example.com</div>
            </div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-300">
              <Github size={18} />
            </span>
            <div>
              <div className="text-white font-medium">GitHub</div>
              <div className="text-white/70 text-sm">github.com/naitik</div>
            </div>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-300">
              <Linkedin size={18} />
            </span>
            <div>
              <div className="text-white font-medium">LinkedIn</div>
              <div className="text-white/70 text-sm">in/naitik</div>
            </div>
          </a>
        </div>

        <p className="mt-10 text-xs text-white/50">© {new Date().getFullYear()} Naitik Kapadia. All rights reserved.</p>
      </div>
    </section>
  );
}
