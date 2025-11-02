import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
