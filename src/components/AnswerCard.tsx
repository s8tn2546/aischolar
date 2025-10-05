import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

interface AnswerCardProps {
  author: {
    name: string;
    avatar?: string;
    initials: string;
  };
  answer: string;
  initialUpvotes: number;
}

export function AnswerCard({ author, answer, initialUpvotes }: AnswerCardProps) {
  const [votes, setVotes] = useState(initialUpvotes);
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null);

  const handleUpvote = () => {
    if (userVote === "up") {
      setVotes(votes - 1);
      setUserVote(null);
    } else if (userVote === "down") {
      setVotes(votes + 2);
      setUserVote("up");
    } else {
      setVotes(votes + 1);
      setUserVote("up");
    }
  };

  const handleDownvote = () => {
    if (userVote === "down") {
      setVotes(votes + 1);
      setUserVote(null);
    } else if (userVote === "up") {
      setVotes(votes - 2);
      setUserVote("down");
    } else {
      setVotes(votes - 1);
      setUserVote("down");
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-lg">
      <div className="flex gap-6">
        {/* Left: Voting */}
        <div className="flex flex-col items-center gap-2">
          <button
            onClick={handleUpvote}
            className={`p-1 hover:bg-secondary rounded-xl transition-all ${
              userVote === "up" ? "text-primary bg-primary/10" : "text-muted-foreground"
            }`}
          >
            <ChevronUp className="h-6 w-6" />
          </button>
          <span className="font-medium text-foreground">{votes}</span>
          <button
            onClick={handleDownvote}
            className={`p-1 hover:bg-secondary rounded-xl transition-all ${
              userVote === "down" ? "text-destructive bg-destructive/10" : "text-muted-foreground"
            }`}
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>

        {/* Right: Author and Answer */}
        <div className="flex-1 space-y-4">
          {/* Author */}
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback className="bg-secondary text-foreground text-xs">
                {author.initials}
              </AvatarFallback>
            </Avatar>
            <small className="text-muted-foreground">{author.name}</small>
          </div>

          {/* Answer Text */}
          <div className="prose prose-sm max-w-none">
            <p className="text-foreground leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
