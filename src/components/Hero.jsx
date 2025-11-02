import Spline from "@splinetool/react-spline";
import { Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur">
            <Rocket size={14} /> Open to exciting opportunities
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]">
            Building playful, modern experiences for the web.
          </h1>
          <p className="mt-4 text-white/90 text-lg leading-relaxed max-w-2xl">
            I’m Naitik Kapadia — a full‑stack developer crafting interactive products with delightful UX and solid engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium shadow-lg shadow-black/20 hover:shadow-xl hover:translate-y-[-1px] transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/30 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-neutral-900/90" />
    </section>
  );
}
