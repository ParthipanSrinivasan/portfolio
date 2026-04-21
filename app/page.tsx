import Image from "next/image";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";


export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Skills />
    <Project/>
    <Contact />
    </>
  );
}
