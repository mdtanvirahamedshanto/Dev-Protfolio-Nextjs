import GoToTheTop from "@/components/GoToTheTop";
import WhatsAppMsg from "@/components/WhatsAppMsg";
import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
export const metadata = {
  title: "Md Tanvir Ahamed Shanto | Personal Portfolio",
  description:
    "Md Tanvir Ahamed Shanto is a full-stack developer with 1 years of experience.",
};

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Header />
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <GoToTheTop />
      <Footer />
      <WhatsAppMsg />
    </main>
  );
}
