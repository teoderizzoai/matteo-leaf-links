// ProfileSection component - displays Matteo's profile information
// Using the profile photo from the public directory with dynamic base URL for production compatibility
const ProfileSection = () => {
  // Get the base URL from Vite environment for proper asset loading
  // This ensures images work correctly in both development and production builds
  const baseUrl = import.meta.env.BASE_URL;
  const profileImage = `${baseUrl}profile-photo.png`;
  
  return (
    <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
      {/* Profile Image */}
      <div className="relative">
        {/* Circular profile image container with hover effects and animations */}
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-border/20 shadow-card hover:shadow-glow transition-all duration-300 animate-float-slow">
          <img
            src={profileImage}
            alt="Matteo De Rizzo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-3">
        {/* Main heading with elegant typography */}
        <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-red-500 tracking-tight">
          Matteo De Rizzo
        </h1>
        
        {/* Professional title with subtle styling */}
        <p className="text-lg md:text-xl text-muted-foreground font-inter font-medium">
          AI & Data Science Enthusiast
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;