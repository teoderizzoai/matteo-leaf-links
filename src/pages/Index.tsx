// Index page - Main landing page for Matteo's personal site
// Features a beautiful design with background images, profile section, and social links
import ProfileSection from "@/components/ProfileSection";
import LinksSection from "@/components/LinksSection";

const Index = () => {
  // Get the base URL from Vite environment for proper asset loading
  // This ensures background images work correctly in both development and production builds
  const baseUrl = import.meta.env.BASE_URL;
  
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Black leaves background image at the top */}
      <div className="absolute top-0 left-0 w-full h-64 bg-cover bg-center bg-no-repeat overflow-hidden" 
           style={{ 
             // Using BASE_URL to construct correct path for production builds
             backgroundImage: `url("${baseUrl}black-leaves.jpeg")`,
             backgroundPosition: 'center top',
             filter: 'blur(2px)'
           }}>
        {/* Natural fade overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-background via-background/90 via-background/80 to-transparent"></div>
      </div>

      {/* Leaf pattern overlay for texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
           style={{
             backgroundImage: `url("${baseUrl}leaf-pattern.svg")`,
             backgroundSize: '400px',
             backgroundRepeat: 'repeat'
           }}>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="w-full max-w-4xl mx-auto space-y-16">
          {/* Profile Section */}
          <ProfileSection />
          
          {/* Subtle divider with elegant styling */}
          <div className="w-24 h-px bg-border/30 mx-auto"></div>
          
          {/* Links Section */}
          <LinksSection />
        </div>
      </div>

      {/* Footer with subtle branding */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-xs text-muted-foreground/60 font-inter">
          Built with ❤️ and modern web technologies
        </p>
      </div>
    </div>
  );
};

export default Index;
