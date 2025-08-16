import { ProfileSection } from "@/components/ProfileSection";
import { LinksSection } from "@/components/LinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Black leaves background image at the top */}
      <div className="absolute top-0 left-0 w-full h-64 bg-cover bg-center bg-no-repeat overflow-hidden" 
           style={{ 
             backgroundImage: 'url("/black-leaves.jpeg")',
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
          {/* Profile Section */}
          <ProfileSection />
          
          {/* Links Section */}
          <div className="flex justify-center">
            <LinksSection />
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

export default Index;
