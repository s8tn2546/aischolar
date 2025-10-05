import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Search, ArrowLeft } from "lucide-react";

interface NavbarProps {
  onAskQuestion: () => void;
  onLogoClick?: () => void;
  showBackButton?: boolean;
}

export function Navbar({ onAskQuestion, onLogoClick, showBackButton = false }: NavbarProps) {
  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Left: Logo with optional back button */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {showBackButton && (
              <button
                onClick={onLogoClick}
                className="p-2 hover:bg-secondary rounded-lg transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-foreground" />
              </button>
            )}
            <button onClick={onLogoClick} className="hover:opacity-80 transition-opacity">
              <h3 className="text-primary font-bold">AI Scholar</h3>
            </button>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-2xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search questions..."
                className="pl-10 bg-secondary/50 border-secondary"
              />
            </div>
          </div>

          {/* Right: Ask Question Button + Avatar */}
          <div className="flex items-center gap-3">
            <Button onClick={onAskQuestion} className="hidden sm:inline-flex">
              Ask Question
            </Button>
            <Button onClick={onAskQuestion} className="sm:hidden">
              Ask
            </Button>
            <Avatar>
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                AS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="pb-4 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search questions..."
              className="pl-10 bg-secondary/50 border-secondary"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
