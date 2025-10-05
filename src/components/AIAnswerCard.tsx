import { Sparkles } from "lucide-react";

interface AIAnswerCardProps {
  answer: string;
}

export function AIAnswerCard({ answer }: AIAnswerCardProps) {
  return (
    <div className="bg-card border-2 border-accent/50 rounded-2xl p-6 shadow-xl shadow-accent/20 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 relative">
        <Sparkles className="h-5 w-5 text-accent" />
        <h3 className="text-accent">AI Generated Answer</h3>
      </div>

      {/* Answer Text */}
      <div className="prose prose-sm max-w-none relative">
        <p className="text-foreground leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
