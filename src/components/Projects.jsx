import { ExternalLink, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "CodeCanvas",
    description: "A collaborative whiteboard for developers with live code snippets and diagramming.",
    tags: ["React", "WebRTC", "Tailwind"],
    url: "#",
  },
  {
    title: "PulseDash",
    description: "Analytics dashboard template with real-time charts and headless UI components.",
    tags: ["Next.js", "Charts", "SSR"],
    url: "#",
  },
  {
    title: "MotionCraft",
    description: "Micro-interactions library powered by framer-motion for snappy product UIs.",
    tags: ["Framer Motion", "Design Systems"],
    url: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-neutral-950 via-neutral-950 to-neutral-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-9 w-9 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
            <FolderGit2 size={18} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Selected Projects</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition shadow-lg shadow-black/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-semibold group-hover:text-indigo-300 transition">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{p.description}</p>
                </div>
                <ExternalLink className="text-white/50 group-hover:text-white transition" size={18} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
