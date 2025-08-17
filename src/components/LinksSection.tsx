// LinksSection component - displays Matteo's social and professional links
// Each link is styled as a card with hover effects and proper accessibility
const LinksSection = () => {
  // Array of links with their metadata for easy management and updates
  const links = [
    {
      title: "GitHub",
      description: "View my projects and contributions",
      url: "https://github.com/teoderizzoai",
      icon: "🐙",
      category: "development"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/matteo-de-rizzo",
      icon: "💼",
      category: "professional"
    },
    {
      title: "Portfolio",
      description: "Explore my work and projects",
      url: "#", // Placeholder - can be updated later
      icon: "🎨",
      category: "portfolio"
    },
    {
      title: "Resume",
      description: "Download my CV",
      url: "#", // Placeholder - can be updated later
      icon: "📄",
      category: "resume"
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4 animate-fade-in">
      {/* Section heading */}
      <h2 className="text-2xl font-playfair font-medium text-foreground text-center mb-8">
        Connect & Explore
      </h2>
      
      {/* Links grid */}
      <div className="space-y-3">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
            aria-label={`Visit ${link.title} - ${link.description}`}
          >
            {/* Individual link card with hover effects */}
            <div className="p-4 bg-card border border-border/20 rounded-lg hover:border-border/40 hover:bg-card/80 transition-all duration-300 hover:shadow-card group-hover:shadow-glow">
              <div className="flex items-center space-x-4">
                {/* Link icon with emoji */}
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                
                {/* Link content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-inter font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    {link.description}
                  </p>
                </div>
                
                {/* External link indicator */}
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  ↗
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinksSection;