// NotFound page - 404 error page for invalid routes
// Provides a user-friendly error message and navigation back to the home page
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      {/* 404 Error Display */}
      <div className="space-y-6 max-w-md">
        {/* Large 404 number */}
        <h1 className="text-8xl font-playfair font-bold text-foreground/20">
          404
        </h1>
        
        {/* Error message */}
        <h2 className="text-2xl font-playfair font-medium text-foreground">
          Page Not Found
        </h2>
        
        {/* Helpful description */}
        <p className="text-muted-foreground font-inter leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        
        {/* Navigation back to home */}
        <Link 
          to="/"
          className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-inter font-medium hover:bg-primary/90 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
