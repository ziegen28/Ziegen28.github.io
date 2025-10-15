import { Briefcase, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const experienceData = [
  {
    title: "Data and AI Intern",
    company: "HTC Global Services",
    period: "April 2025 - July 2025",
    description: [
      "Developed complete RAG pipelines using LangChain & OpenAI with LangSmith for monitoring",
      "Built Neo4j knowledge graphs from relational data using Runway + OpenAI Discovery",
      "Designed 3 Fast API endpoints: document upload, LLM querying, metric retrieval (cost, token, latency)",
      "Integrated Langfuse for full observability in QA workflows",
      "Created Graph-based Q&A pipelines using LangGraph with Text to cypher, validation, and correction nodes",
      "Contributed to MCP server with tool-chaining capabilities for LLM operation",
    ],
    proof: "#", // Add actual proof link
  },
  {
    title: "Data Analyst Intern",
    company: "TCS (Forage) — Virtual",
    period: "Jan 2025 - Feb 2025",
    description: [
      "Built executive dashboards in Tableau for KPI visualization",
      "Performed exploratory data analysis, preprocessing, and produced interactive reports",
      "Practiced stakeholder communication and data storytelling",
    ],
    proof: "#", // Add actual proof link
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-secondary/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary" />

          {experienceData.map((item, index) => (
            <div
              key={index}
              className="relative mb-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`flex items-center mb-4 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}>
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="h-6 w-6 text-secondary animate-bounce" />
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {item.company}
                    </p>
                    <p className="text-sm text-secondary mb-3">{item.period}</p>
                    <ul className="text-sm text-muted-foreground/80 space-y-2 mb-4">
                      {item.description.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary/30 hover:border-primary/50"
                      asChild
                    >
                      <a href={item.proof} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Proof
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-secondary border-4 border-background glow-primary animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
