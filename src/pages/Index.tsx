import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Courses from "@/components/Courses";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Education />
      <Experience />
      <TechStack />
      <Projects />
      <Courses />
      <Certificates />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border/50">
        <p>© 2025 Benjamin J Ziegen Balg. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
