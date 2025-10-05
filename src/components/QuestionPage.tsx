import { Tag } from "./Tag";
import { AIAnswerCard } from "./AIAnswerCard";
import { AnswerCard } from "./AnswerCard";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";

interface QuestionPageProps {
  question: {
    title: string;
    author: string;
    tags: Array<{ label: string; variant?: "default" | "accent" }>;
  };
  aiAnswer: string;
  communityAnswers: Array<{
    author: {
      name: string;
      avatar?: string;
      initials: string;
    };
    answer: string;
    upvotes: number;
  }>;
}

export function QuestionPage({
  question,
  aiAnswer,
  communityAnswers,
}: QuestionPageProps) {
  return (
    <div className="space-y-8">
      {/* Section 1: Question */}
      <Card className="p-8 bg-card border-border rounded-2xl shadow-lg">
        <div className="space-y-4">
          <h1 className="text-foreground">{question.title}</h1>
          <div className="flex items-center gap-3">
            <small className="text-muted-foreground">
              Asked by {question.author}
            </small>
          </div>
          <div className="flex flex-wrap gap-2">
            {question.tags.map((tag, index) => (
              <Tag key={index} variant={tag.variant}>
                {tag.label}
              </Tag>
            ))}
          </div>
        </div>
      </Card>

      {/* Section 2: AI Answer */}
      <AIAnswerCard answer={aiAnswer} />

      {/* Section 3: Community Answers */}
      <div className="space-y-6">
        <Separator className="bg-border" />
        <h2 className="text-foreground">Community Answers</h2>
        <div className="space-y-4">
          {communityAnswers.map((answer, index) => (
            <AnswerCard
              key={index}
              author={answer.author}
              answer={answer.answer}
              initialUpvotes={answer.upvotes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
