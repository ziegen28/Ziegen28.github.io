import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const projects = [
  {
    title: "Real-Time Crime Prediction",
    description: "Developed a deep learning model for criminal face recognition, integrating OpenCV for real-time detection.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    technologies: ["ResNet", "TensorFlow", "OpenCV", "Python"],
    githubUrl: "#",
  },
  {
    title: "Knowledge Graph Analytics",
    description: "Engineered a pipeline converting relational data into a Neo4j knowledge graph with semantic query support via natural language.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    technologies: ["Neo4j", "LangGraph", "Python", "OpenAI"],
    githubUrl: "#",
  },
  {
    title: "Unified AI Agent Platform",
    description: "Integrated RAG and Graph QA workflows with Langfuse monitoring, reducing query latency by 40%.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    technologies: ["RAG", "FastAPI", "LangChain", "Langfuse"],
    githubUrl: "#",
  },
  {
    title: "SQL Agent for RDBMS Querying",
    description: "Built schema-aware LangChain agents to translate NL queries into SQL with LangSmith for debugging and latency monitoring.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80",
    technologies: ["LangChain", "LangSmith", "SQL", "Python"],
    githubUrl: "#",
  },
  {
    title: "Disease Prediction Model",
    description: "Built a machine learning model to predict diseases from patient health data, enabling early diagnosis and better clinical decision-making.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    githubUrl: "#",
  },
  {
    title: "Churn Analysis Dashboard",
    description: "Built interactive churn dashboard analyzing demographics, service usage, contract types, and payment methods to drive retention insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Power BI", "Python", "SQL"],
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass border-primary/30 hover:border-primary/50 overflow-hidden group animate-fade-in-up hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>

              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground/80">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full glass border-primary/30 hover:border-primary/50"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
