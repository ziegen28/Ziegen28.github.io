import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const coursesData = [
  {
    name: "Google Data Analytics",
    provider: "Coursera",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming", "Data Visualization"],
    proof: "#", // Add actual link
  },
  {
    name: "Python Certification",
    provider: "Imarticus",
    skills: ["Python", "Data Structures", "Algorithms", "OOP"],
    proof: "#",
  },
  {
    name: "Generative AI Fundamentals",
    provider: "Databricks",
    skills: ["LLMs", "Prompt Engineering", "AI Ethics", "RAG"],
    proof: "#",
  },
  {
    name: "Deep Learning",
    provider: "Udemy",
    skills: ["Neural Networks", "TensorFlow", "PyTorch", "CNNs", "RNNs"],
    proof: "#",
  },
  {
    name: "Tableau Certification",
    provider: "Simplilearn",
    skills: ["Data Visualization", "Dashboards", "Analytics", "Business Intelligence"],
    proof: "#",
  },
  {
    name: "Data Analytics",
    provider: "Greens Technologies",
    skills: ["Excel", "SQL", "Power BI", "Statistical Analysis"],
    proof: "#",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Courses & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg hover:scale-105 transition-transform duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-primary animate-spin-slow" />
                <h3 className="text-lg font-semibold">{course.name}</h3>
              </div>
              
              <p className="text-sm text-secondary mb-4 font-medium">
                {course.provider}
              </p>

              <div className="mb-4">
                <p className="text-xs text-muted-foreground mb-2 font-semibold">Skills Gained:</p>
                <div className="flex flex-wrap gap-2">
                  {course.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                size="sm"
                className="w-full border-primary/30 hover:border-primary/50"
                asChild
              >
                <a href={course.proof} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Certificate
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
