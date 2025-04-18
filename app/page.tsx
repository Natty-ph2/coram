import Image from "next/image";
import Section from "./components/Section";
import Companies from "./components/Companies";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Section />
      <Companies />
      <Projects />
      <Footer />
    </div>
    );
}
