export const ProfileSection = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
      {/* Profile Image */}
      <div className="relative">
        <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-secondary shadow-lg animate-float">
          <img
            src="/profile-photo.png"
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