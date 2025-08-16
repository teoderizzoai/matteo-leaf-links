import { Github, Linkedin, User, FileText } from "lucide-react";
import { LinkCard } from "./LinkCard";

export const LinksSection = () => {
  const links = [
    {
      title: "GitHub",
      description: "Explore my repositories and open source contributions",
      href: "https://github.com/teoderizzoai",
      icon: <Github className="w-5 h-5 text-foreground" />
    },
    {
      title: "LinkedIn", 
      description: "Connect with me professionally and view my experience",
      href: "https://www.linkedin.com/in/matteo-de-rizzo",
      icon: <Linkedin className="w-5 h-5 text-foreground" />
    },
    {
      title: "Portfolio",
      description: "Discover my projects and technical achievements",
      href: "https://teo-ai-portfolio.lovable.app/",
      icon: <User className="w-5 h-5 text-foreground" />
    },
    {
      title: "Download CV",
      description: "Download my latest CV and professional background",
      href: "/Matteo De Rizzo CV.pdf",
      icon: <FileText className="w-5 h-5 text-foreground" />
    }
  ];

  return (
    <div className="w-full max-w-2xl space-y-4 animate-fade-in-up">
      {links.map((link, index) => (
        <div
          key={link.title}
          style={{ animationDelay: `${index * 0.1}s` }}
          className="animate-fade-in-up"
        >
          <LinkCard {...link} />
        </div>
      ))}
    </div>
  );
};