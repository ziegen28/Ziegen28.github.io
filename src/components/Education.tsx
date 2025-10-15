import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Technology in Artificial Intelligence & Data Science",
    institution: "Jeppiaar Engineering College",
    period: "2021 - 2025",
    score: "CGPA: 8.5/10",
  },
  {
    degree: "Higher Secondary Education",
    institution: "St. Joseph Academy Matric Higher Secondary School, Kallakurichi",
    period: "2020 - 2021",
    score: "Percentage: 89%",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          {educationData.map((item, index) => (
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
                      <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
                      <h3 className="text-xl font-semibold">{item.degree}</h3>
                    </div>
                    <p className="text-muted-foreground font-medium mb-2">
                      {item.institution}
                    </p>
                    <p className="text-sm text-secondary mb-2">{item.period}</p>
                    <p className="text-sm font-semibold text-primary">
                      {item.score}
                    </p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background glow-primary animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
