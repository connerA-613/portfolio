import Image from "next/image";
import Navbar from './components/navbar';
import Hero from './sections/hero';
import AboutMe from './sections/about-me';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutMe />
    </main>
  );
}
