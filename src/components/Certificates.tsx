import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=600&q=80",
    verifyUrl: "https://aws.amazon.com/verification/",
  },
  {
    title: "React Advanced Certification",
    issuer: "Meta",
    date: "2023",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    verifyUrl: "https://www.coursera.org/verify/",
  },
  {
    title: "Full Stack Web Development",
    issuer: "freeCodeCamp",
    date: "2022",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
    verifyUrl: "https://www.freecodecamp.org/certification/",
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2022",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    verifyUrl: "https://www.ibm.com/training/",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="glass border-primary/30 hover:border-primary/50 overflow-hidden group animate-fade-in-up hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => window.open(cert.verifyUrl, "_blank")}
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent" />
                <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-md rounded-full p-2 border border-primary/30">
                  <ExternalLink className="h-5 w-5 text-primary" />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{cert.title}</CardTitle>
                <CardDescription className="flex justify-between items-center">
                  <span className="text-muted-foreground">{cert.issuer}</span>
                  <span className="text-secondary font-medium">{cert.date}</span>
                </CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-muted-foreground/80">
                  Click to verify this certification
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
