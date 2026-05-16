import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <TechStack />
      <Contact />
    </>
  );
}
