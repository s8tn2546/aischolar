import { Tag } from "./Tag";
import { ThumbsUp, MessageSquare } from "lucide-react";

interface QuestionCardProps {
  title: string;
  tags: Array<{ label: string; variant?: "default" | "accent" }>;
  upvotes: number;
  answers: number;
  onClick?: () => void;
}

export function QuestionCard({
  title,
  tags,
  upvotes,
  answers,
  onClick,
}: QuestionCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      {/* Title */}
      <h2 className="text-foreground mb-4">{title}</h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Tag key={index} variant={tag.variant}>
            {tag.label}
          </Tag>
        ))}
      </div>

      {/* Footer Stats */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <ThumbsUp className="h-4 w-4" />
          <small>{upvotes}</small>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          <small>{answers} answers</small>
        </div>
      </div>
    </div>
  );
}
