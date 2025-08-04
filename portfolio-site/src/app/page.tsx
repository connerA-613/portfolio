import Image from "next/image";
import Navbar from './components/navbar';
import Hero from './sections/hero';
import AboutMe from './sections/about-me';
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from './sections/footer';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
