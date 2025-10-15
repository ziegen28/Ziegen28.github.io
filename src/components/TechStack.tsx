const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "SQL", icon: "🗄️" },
  { name: "Neo4j", icon: "🔗" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "PyTorch", icon: "🔥" },
  { name: "LangChain", icon: "⛓️" },
  { name: "Power BI", icon: "📊" },
  { name: "Tableau", icon: "📈" },
  { name: "FastAPI", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
  { name: "Git", icon: "📦" },
  { name: "Scikit-learn", icon: "🤖" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
  { name: "OpenCV", icon: "👁️" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Tech Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="glass p-6 rounded-lg text-center hover:scale-110 hover:rotate-3 hover:glow-primary transition-all duration-300 animate-scale-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-3 group-hover:animate-bounce">
                {tech.icon}
              </div>
              <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
