import { ProfileSection } from "@/components/ProfileSection";
import { LinksSection } from "@/components/LinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Black leaves background image at the top with enhanced overlay */}
      <div className="absolute top-0 left-0 w-full h-64 bg-cover bg-center bg-no-repeat overflow-hidden" 
           style={{ 
             backgroundImage: 'url(/black%20leaves.jpeg)',
             backgroundPosition: 'center top',
             filter: 'blur(2px) brightness(0.7) contrast(1.3)'
           }}>
        {/* Enhanced gradient overlay using new color palette */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/95 via-background/80 via-background/60 to-transparent"></div>
      </div>
      
      {/* Watermark leaf pattern overlay */}
      <div className="bg-leaf-watermark"></div>
      
      {/* Subtle leaf pattern background */}
      <div className="absolute inset-0 bg-leaf-pattern pointer-events-none"></div>
      
      {/* Main content with subtle accent glow */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12 pt-32">
        {/* Subtle accent glow behind content */}
        <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="w-full max-w-4xl mx-auto space-y-16">
          {/* Profile Section */}
          <ProfileSection />
          
          {/* Links Section */}
          <div className="flex justify-center">
            <LinksSection />
          </div>
          
          {/* Footer with enhanced styling */}
          <footer className="text-center pt-8">
            <div className="w-24 h-px bg-accent/30 mx-auto mb-4"></div>
            <p className="text-xs text-muted-foreground font-inter tracking-wide">
              © 2024 Matteo De Rizzo
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
