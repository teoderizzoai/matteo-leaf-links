import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export const LinkCard = ({ title, description, href, icon }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card elegant-border group block p-6 rounded-lg bg-secondary hover:bg-accent transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
            {icon}
          </div>
          <h3 className="font-display text-lg font-medium text-foreground">
            {title}
          </h3>
        </div>
        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </a>
  );
};