import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <main>
      <Loader />
      <Cursor />

      <Navbar />
      <Hero />
      <Intro />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
