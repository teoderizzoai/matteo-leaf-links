import { ExternalLink, Download } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export const LinkCard = ({ title, description, href, icon }: LinkCardProps) => {
  // Check if this is a PDF link to handle it appropriately
  const isPdf = href.toLowerCase().includes('.pdf');
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Add download attribute for PDF files to encourage downloading
      {...(isPdf && { download: title.replace(/\s+/g, '-').toLowerCase() + '.pdf' })}
      className="link-card elegant-border group block p-6 rounded-lg bg-card hover:bg-accent/50 transition-all duration-300 shadow-card hover:shadow-glow-hover hover:border-accent-teal/40"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/5 group-hover:bg-accent-teal/20 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="font-display text-lg font-medium text-foreground">
            {title}
          </h3>
        </div>
        {isPdf ? (
          <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
        ) : (
          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
        )}
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </a>
  );
};