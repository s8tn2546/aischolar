import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Tag } from "./Tag";
import { X, Sparkles, Lightbulb } from "lucide-react";
import { useState } from "react";

interface AskQuestionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AskQuestionModal({ open, onOpenChange }: AskQuestionModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    // Handle question submission
    console.log({ title, description, tags });
    // Reset form
    setTitle("");
    setDescription("");
    setTags([]);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-foreground">Ask a Question</DialogTitle>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* AI Suggestion Strip */}
          {title.length > 10 && (
            <div className="p-4 bg-accent/10 border border-accent/30 rounded-2xl">
              <div className="flex gap-3">
                <Lightbulb className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium text-accent mb-1">AI Suggestion</div>
                  <p className="text-sm text-muted-foreground">
                    Try adding more specific details about the context or framework you're using to get better answers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Title Input */}
          <div className="space-y-2">
            <Label htmlFor="question-title" className="text-foreground">Question Title</Label>
            <Input
              id="question-title"
              placeholder="What would you like to know?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-input-background border-input rounded-xl"
            />
          </div>

          {/* Description Textarea */}
          <div className="space-y-2">
            <Label htmlFor="question-description" className="text-foreground">Description</Label>
            <Textarea
              id="question-description"
              placeholder="Provide more details about your question..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[150px] w-full bg-input-background border-input rounded-xl"
            />
          </div>

          {/* Tags Input */}
          <div className="space-y-2">
            <Label htmlFor="question-tags" className="text-foreground">Subject Tags</Label>
            <Input
              id="question-tags"
              placeholder="Type a tag and press Enter..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              className="w-full bg-input-background border-input rounded-xl"
            />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag, index) => (
                  <div key={index} className="relative group">
                    <Tag>
                      {tag}
                      <button
                        onClick={() => handleRemoveTag(tag)}
                        className="ml-2 hover:text-destructive"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Tag>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer with Submit Button */}
        <div className="flex justify-end gap-3 pt-4 border-t border-border">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="rounded-xl">
            Cancel
          </Button>
          <Button 
            onClick={handleSubmit} 
            disabled={!title.trim()}
            className="bg-gradient-to-r from-accent to-primary rounded-xl shadow-lg shadow-accent/20"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Post Question
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
