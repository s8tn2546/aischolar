import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { DashboardPage } from "./components/DashboardPage";
import { ExplorePage } from "./components/ExplorePage";
import { QuestionPage } from "./components/QuestionPage";
import { SettingsPage } from "./components/SettingsPage";
import { AskQuestionModal } from "./components/AskQuestionModal";

export default function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    if (page === "ask") {
      setIsModalOpen(true);
    } else {
      setCurrentPage(page);
    }
  };

  const handleQuestionClick = () => {
    setCurrentPage("question");
  };

  // Sample question detail data
  const questionDetail = {
    question: {
      title:
        "How do I implement a custom attention mechanism in PyTorch for sequence-to-sequence models?",
      author: "Sarah Chen",
      tags: [
        { label: "PyTorch", variant: "default" as const },
        { label: "Deep Learning", variant: "default" as const },
        { label: "NLP", variant: "default" as const },
        { label: "AI Generated", variant: "accent" as const },
      ],
    },
    aiAnswer:
      "To implement a custom attention mechanism in PyTorch, you'll need to create a class that inherits from nn.Module. The attention mechanism typically involves computing attention scores using a scoring function (like dot-product, additive, or multiplicative), applying softmax to get attention weights, and then computing a weighted sum of the values. Here's a basic structure: First, define your attention layer with query, key, and value projections. Then, compute attention scores by taking the dot product of queries and keys, scale by the square root of the dimension, apply softmax, and finally multiply with values. Remember to handle masking for padding tokens and consider using multiple attention heads for better performance.",
    communityAnswers: [
      {
        author: {
          name: "Dr. Michael Rodriguez",
          initials: "MR",
        },
        answer:
          "I've implemented several custom attention mechanisms. One key thing to remember is proper initialization of your weight matrices. Use Xavier or He initialization depending on your activation functions. Also, don't forget to add dropout to the attention weights to prevent overfitting. I typically use 0.1 dropout rate. For sequence-to-sequence models, you might want to implement both self-attention and cross-attention layers.",
        upvotes: 15,
      },
      {
        author: {
          name: "Emily Thompson",
          initials: "ET",
        },
        answer:
          "Adding to the previous answers, I'd recommend checking out the 'Attention is All You Need' paper for the original transformer architecture. For debugging, it helps to visualize the attention weights using matplotlib or seaborn. This way you can verify that your model is actually learning to attend to the right parts of the input sequence. Also, consider using torch.nn.functional.scaled_dot_product_attention if you're on PyTorch 2.0+ as it's optimized for performance.",
        upvotes: 23,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Top Navigation */}
        <TopNav />

        {/* Page Content */}
        <main className="p-8">
          {currentPage === "dashboard" && <DashboardPage />}
          {currentPage === "explore" && <ExplorePage onQuestionClick={handleQuestionClick} />}
          {currentPage === "question" && (
            <QuestionPage
              question={questionDetail.question}
              aiAnswer={questionDetail.aiAnswer}
              communityAnswers={questionDetail.communityAnswers}
            />
          )}
          {currentPage === "settings" && <SettingsPage />}
        </main>
      </div>

      {/* Ask Question Modal */}
      <AskQuestionModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </div>
  );
}
