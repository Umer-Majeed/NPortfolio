import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GithubActivity from "./components/GithubActivity";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Hero />
      <About />
      <Gallery />
      <Projects />
      <Skills />
      <GithubActivity />
      <Contact />
    </main>
  );
}