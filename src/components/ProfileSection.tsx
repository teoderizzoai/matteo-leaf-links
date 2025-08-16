// Using the profile photo from the public directory
const profileImage = "/profile-photo.png";

export const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
      {/* Profile Image */}
      <div className="relative">
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
        <h1 className="font-display text-4xl md:text-5xl font-medium text-foreground tracking-tight">
          Matteo De Rizzo
        </h1>
        <p className="font-inter text-lg md:text-xl text-muted-foreground font-light tracking-wide">
          AI & Data Science Enthusiast
        </p>
      </div>

      {/* Subtle divider */}
      <div className="w-16 h-px bg-border/30 mt-8"></div>
    </div>
  );
};