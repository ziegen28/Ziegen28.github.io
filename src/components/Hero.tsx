import { Github, Linkedin, Download, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 animate-glow mx-auto">
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-secondary/20 animate-float pointer-events-none" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient">
          Hi, I'm Benjamin J Ziegen Balg
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          AI/ML Engineer & Data Science Specialist
        </p>
        
        <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
          B.Tech graduate in Artificial Intelligence and Data Science with expertise in AI/ML, data analytics, 
          and visualization. Skilled in Python, SQL, and Power BI for deriving actionable insights. 
          Hands-on experience in machine learning, deep learning, and generative AI tools.
        </p>

        <div className="flex gap-4 justify-center items-center flex-wrap mb-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            <a href="mailto:ziegenbalgbenjamin2004@gmail.com" className="hover:text-primary transition-colors">
              ziegenbalgbenjamin2004@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary" />
            <a href="tel:+918925494954" className="hover:text-primary transition-colors">
              +91 89254 94954
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Chennai, Tamil Nadu</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center items-center flex-wrap">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            asChild
          >
            <a href="/resume-aiml.pdf" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass border-primary/30 hover:border-primary/50"
            asChild
          >
            <a
              href="https://linkedin.com/in/ziegen"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass border-secondary/30 hover:border-secondary/50"
            asChild
          >
            <a
              href="https://github.com/ziegen28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
