import Navigation from "./_components/Navigation";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Projects from "./_components/Projects";
import Resume from "./_components/Resume";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";

function SectionDivider() {
  return (
    <div
      style={{
        height: 0.5,
        background: "var(--color-border-tertiary)",
        margin: "0 52px",
      }}
    />
  );
}

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Resume />
      <SectionDivider />
      <Contact />
      <Footer />
    </>
  );
}
