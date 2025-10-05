import { Card } from "./ui/card";
import { Tag } from "./Tag";
import { 
  TrendingUp, 
  CheckCircle2, 
  Calendar,
  Users,
  Sparkles,
  ThumbsUp,
  MessageSquare
} from "lucide-react";
import { Progress } from "./ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function DashboardPage() {
  const recentQuestions = [
    {
      title: "How do transformers work in NLP?",
      upvotes: 24,
      aiAnswered: true,
      tags: ["NLP", "Transformers"],
    },
    {
      title: "Explain backpropagation in CNNs",
      upvotes: 18,
      aiAnswered: true,
      tags: ["CNN", "Deep Learning"],
    },
    {
      title: "Best practices for model optimization?",
      upvotes: 31,
      aiAnswered: false,
      tags: ["Optimization"],
    },
  ];

  const upcomingEvents = [
    { title: "ML Study Group", date: "Oct 6, 2025", time: "3:00 PM" },
    { title: "Research Paper Review", date: "Oct 8, 2025", time: "5:00 PM" },
    { title: "AI Project Deadline", date: "Oct 10, 2025", time: "11:59 PM" },
  ];

  const mentors = [
    { name: "Dr. Sarah Chen", role: "ML Expert", initials: "SC" },
    { name: "Prof. Michael Kim", role: "AI Researcher", initials: "MK" },
    { name: "Dr. Emily Watson", role: "NLP Specialist", initials: "EW" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="p-8 bg-gradient-to-br from-accent/20 to-primary/10 border-accent/30 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="relative">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-foreground mb-2">Hello, Alex! 👋</h1>
              <p className="text-secondary-foreground max-w-2xl">
                Welcome back to your learning dashboard. You've made great progress this week!
              </p>
            </div>
            <Sparkles className="h-12 w-12 text-accent animate-pulse" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Insights Panel */}
        <Card className="p-6 bg-card border-accent/50 rounded-2xl shadow-lg col-span-1 lg:col-span-2 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <h3 className="text-accent">AI Insights</h3>
            </div>
            <p className="text-foreground mb-4">
              Based on your recent activity, you're showing strong understanding in Deep Learning concepts. 
              Consider exploring Advanced Transformers next to build on your momentum!
            </p>
            <div className="flex gap-2">
              <Tag variant="accent">Recommended</Tag>
              <Tag>Deep Learning</Tag>
              <Tag>Transformers</Tag>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <Card className="p-6 bg-card border-border rounded-2xl shadow-lg">
          <h3 className="text-foreground mb-4">Your Progress</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary-foreground">Questions Asked</span>
                <span className="text-foreground font-medium">24</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary-foreground">AI Accuracy</span>
                <span className="text-foreground font-medium">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-secondary-foreground">Engagement</span>
                <span className="text-foreground font-medium">88%</span>
              </div>
              <Progress value={88} className="h-2" />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Questions */}
        <Card className="p-6 bg-card border-border rounded-2xl shadow-lg col-span-1 lg:col-span-2">
          <h2 className="text-foreground mb-6">Recent Questions</h2>
          <div className="space-y-4">
            {recentQuestions.map((question, index) => (
              <div
                key={index}
                className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-foreground flex-1">{question.title}</h3>
                  {question.aiAnswered && (
                    <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 ml-2" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {question.tags.map((tag, i) => (
                      <Tag key={i}>{tag}</Tag>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <ThumbsUp className="h-4 w-4" />
                      <small>{question.upvotes}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Events */}
        <Card className="p-6 bg-card border-border rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-6">
            <Calendar className="h-5 w-5 text-primary" />
            <h3 className="text-foreground">Upcoming</h3>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-3 bg-secondary/50 rounded-xl"
              >
                <div className="font-medium text-foreground mb-1">{event.title}</div>
                <div className="text-xs text-muted-foreground">{event.date}</div>
                <div className="text-xs text-muted-foreground">{event.time}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Mentors */}
      <Card className="p-6 bg-card border-border rounded-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5 text-primary" />
          <h2 className="text-foreground">Your Mentors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="" alt={mentor.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {mentor.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-foreground">{mentor.name}</div>
                  <div className="text-xs text-muted-foreground">{mentor.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
