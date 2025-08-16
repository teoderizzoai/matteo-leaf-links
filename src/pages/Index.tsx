import { ProfileSection } from "@/components/ProfileSection";
import { LinksSection } from "@/components/LinksSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle leaf pattern background */}
      <div className="absolute inset-0 bg-leaf-pattern pointer-events-none"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
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
