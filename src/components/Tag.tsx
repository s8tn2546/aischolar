import { cn } from "./ui/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
  className?: string;
}

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center px-3 py-1 rounded-full text-sm transition-all",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "accent" && "bg-accent/20 text-accent border border-accent/30 shadow-lg shadow-accent/10",
        className
      )}
    >
      {children}
    </span>
  );
}
