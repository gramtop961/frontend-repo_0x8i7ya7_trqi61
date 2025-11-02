import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-neutral-900/50 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-xl">
          <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">Naitik Kapadia</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          <a
            href="mailto:naitik@example.com"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            <Mail size={16} /> Email
          </a>
        </nav>
        <div className="flex md:hidden items-center gap-2">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><Github size={18} /></a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5"><Linkedin size={18} /></a>
        </div>
      </div>
    </header>
  );
}
