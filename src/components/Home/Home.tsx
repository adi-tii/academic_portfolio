import AboutMe from "@app/components/Home/AboutMe/AboutMe";
import Contact from "@app/components/Home/Contact/Contact";
import Hero from "@app/components/Home/Hero/Hero";
import Projects from "@app/components/Home/Projects/Projects";
import Skills from "@app/components/Home/Skills/Skills";
import Research from "@app/components/Home/Research/Research";
import Publications from "@app/components/Home/Publications/Publications";
import UpButton from "@app/components/UI/UpButton";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Skills />
      <AboutMe />
      <Projects />
      <Research />
      <Publications />
      <Contact />
      <UpButton />
    </main>
  );
}
