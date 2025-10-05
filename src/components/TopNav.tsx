import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Search, Bell, Moon, Sun } from "lucide-react";
import { useState } from "react";

export function TopNav() {
  const [notifications] = useState(3);

  return (
    <header className="h-16 bg-card border-b border-border flex items-center px-6 gap-4">
      {/* Search Bar */}
      <div className="flex-1 max-w-2xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search questions, topics, or users..."
            className="pl-10 bg-secondary/50 border-border rounded-2xl"
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-2xl hover:bg-secondary"
        >
          <Bell className="h-5 w-5 text-foreground" />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 h-2 w-2 bg-accent rounded-full"></span>
          )}
        </Button>

        <Avatar className="h-9 w-9 cursor-pointer hover:ring-2 hover:ring-accent transition-all">
          <AvatarImage src="" alt="User" />
          <AvatarFallback className="bg-accent text-accent-foreground text-sm">
            AS
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
