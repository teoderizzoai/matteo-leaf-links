// LinksSection component - displays Matteo's social and professional links
// Each link is styled as a card with hover effects and proper accessibility
const LinksSection = () => {
  // Array of links with their metadata for easy management and updates
  const links = [
    {
      title: "GitHub",
      description: "View my projects and contributions",
      url: "https://github.com/teoderizzoai",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      category: "development"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      url: "https://linkedin.com/in/matteo-de-rizzo",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      category: "professional"
    },
    {
      title: "Portfolio",
      description: "Explore my work and projects",
      url: "matteoderizzo.site", // Now links to the portfolio page
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      ),
      category: "portfolio"
    },
    {
      title: "Resume",
      description: "Download my CV",
      url: "/Matteo De Rizzo CV.pdf", // Direct link to CV file in public folder
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      ),
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
                {/* Modern minimalist icon with white color */}
                <div className="text-white group-hover:text-primary transition-colors duration-300">
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