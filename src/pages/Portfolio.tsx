// Portfolio page component - displays Matteo's portfolio of work
// This page will be accessible at /portfolio route
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Black leaves background image at the top */}
      <div className="absolute top-0 left-0 w-full h-64 bg-cover bg-center bg-no-repeat overflow-hidden" 
           style={{ 
             backgroundImage: 'url("./black-leaves.jpeg")',
             backgroundPosition: 'center top',
             filter: 'blur(2px)'
           }}>
        {/* Natural fade overlay */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/90 via-background/70 via-background/50 to-transparent"></div>
      </div>
      
      {/* Watermark leaf pattern overlay */}
      <div className="bg-leaf-watermark"></div>
      
      {/* Subtle leaf pattern background */}
      <div className="absolute inset-0 bg-leaf-pattern pointer-events-none"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 pt-32">
        <div className="w-full max-w-4xl mx-auto space-y-16">
          {/* Portfolio Header */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-foreground tracking-tight">
              Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-inter font-medium">
              My Work & Projects
            </p>
          </div>
          
          {/* Portfolio Content - Placeholder for now */}
          <div className="text-center space-y-8">
            <div className="p-8 bg-card border border-border/20 rounded-lg">
              <h2 className="text-2xl font-playfair font-medium text-foreground mb-4">
                Coming Soon
              </h2>
              <p className="text-muted-foreground font-inter">
                My portfolio projects are being prepared. Check back soon for updates!
              </p>
            </div>
          </div>
          
          {/* Back to Home Link */}
          <div className="text-center">
            <a 
              href="/" 
              className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 font-inter"
            >
              <span>← Back to Home</span>
            </a>
          </div>
          
          {/* Footer */}
          <footer className="text-center pt-8">
            <p className="text-xs text-muted-foreground font-inter tracking-wide">
              © 2024 Matteo De Rizzo
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;


