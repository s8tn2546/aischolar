import { useState } from "react";
import { Card } from "./ui/card";
import { Tag } from "./Tag";
import { QuestionCard } from "./QuestionCard";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Trophy, TrendingUp, Flame } from "lucide-react";

interface ExplorePageProps {
  onQuestionClick: () => void;
}

export function ExplorePage({ onQuestionClick }: ExplorePageProps) {
  const [selectedSort, setSelectedSort] = useState("newest");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    "Physics",
    "Mathematics",
    "Computer Science",
    "Biology",
    "Chemistry",
    "Literature",
    "Machine Learning",
    "AI",
  ];

  const questions = [
    {
      id: 1,
      title: "How do quantum computers differ from classical computers in computation?",
      tags: [
        { label: "Physics", variant: "default" as const },
        { label: "Quantum Computing", variant: "default" as const },
        { label: "AI Answered", variant: "accent" as const },
      ],
      upvotes: 124,
      answers: 15,
      excerpt: "I'm trying to understand the fundamental differences in how quantum computers process information compared to traditional binary systems...",
    },
    {
      id: 2,
      title: "Explain the significance of Gödel's incompleteness theorems",
      tags: [
        { label: "Mathematics", variant: "default" as const },
        { label: "Logic", variant: "default" as const },
        { label: "Top Answer", variant: "accent" as const },
      ],
      upvotes: 89,
      answers: 12,
      excerpt: "What are the practical implications of Gödel's theorems in modern mathematics and computer science?",
    },
    {
      id: 3,
      title: "What causes CRISPR off-target effects and how can they be minimized?",
      tags: [
        { label: "Biology", variant: "default" as const },
        { label: "Genetics", variant: "default" as const },
        { label: "AI Answered", variant: "accent" as const },
      ],
      upvotes: 67,
      answers: 8,
      excerpt: "Looking for detailed explanation on the mechanisms behind off-target effects in CRISPR gene editing...",
    },
    {
      id: 4,
      title: "How do neural networks learn hierarchical representations?",
      tags: [
        { label: "Machine Learning", variant: "default" as const },
        { label: "Deep Learning", variant: "default" as const },
        { label: "AI", variant: "default" as const },
      ],
      upvotes: 156,
      answers: 22,
      excerpt: "I want to understand how different layers in deep neural networks learn increasingly abstract features...",
    },
  ];

  const topContributors = [
    { name: "Dr. Sarah Chen", answers: 234, initials: "SC" },
    { name: "Prof. Michael Kim", answers: 189, initials: "MK" },
    { name: "Dr. Emily Watson", answers: 156, initials: "EW" },
  ];

  const hotTopics = [
    { topic: "Quantum Computing", count: 45 },
    { topic: "Machine Learning", count: 123 },
    { topic: "CRISPR", count: 34 },
    { topic: "Climate Science", count: 67 },
  ];

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-foreground mb-2">Explore Knowledge</h1>
        <p className="text-muted-foreground">
          Discover questions and insights from the community
        </p>
      </div>

      {/* Filter Bar */}
      <Card className="p-4 bg-card border-border rounded-2xl shadow-lg">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <label className="text-sm text-secondary-foreground font-medium">Sort by:</label>
            <Select value={selectedSort} onValueChange={setSelectedSort}>
              <SelectTrigger className="w-40 bg-secondary border-border rounded-xl">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="ai-answered">AI Answered</SelectItem>
                <SelectItem value="most-upvoted">Most Upvoted</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm text-secondary-foreground font-medium mb-2 block">
              Filter by tags:
            </label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`
                    px-3 py-1 rounded-full text-sm transition-all
                    ${selectedTags.includes(tag)
                      ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }
                  `}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Questions Grid */}
        <div className="lg:col-span-2 space-y-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="group"
            >
              <Card className="p-6 bg-card border-border rounded-2xl shadow-lg hover:shadow-xl hover:border-accent/50 transition-all cursor-pointer">
                <div onClick={onQuestionClick}>
                  <h2 className="text-foreground mb-3 group-hover:text-accent transition-colors">
                    {question.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {question.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {question.tags.map((tag, index) => (
                      <Tag key={index} variant={tag.variant}>
                        {tag.label}
                      </Tag>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      <span>{question.upvotes} upvotes</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <span>{question.answers} answers</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <Card className="p-6 bg-card border-border rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="h-5 w-5 text-primary" />
              <h3 className="text-foreground">Top Contributors</h3>
            </div>
            <div className="space-y-3">
              {topContributors.map((contributor, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt={contributor.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                      {contributor.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-foreground">
                      {contributor.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {contributor.answers} answers
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Hot Topics */}
          <Card className="p-6 bg-card border-border rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="h-5 w-5 text-accent" />
              <h3 className="text-foreground">Hot Topics</h3>
            </div>
            <div className="space-y-3">
              {hotTopics.map((topic, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium text-foreground">
                    {topic.topic}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {topic.count} questions
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
