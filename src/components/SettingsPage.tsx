import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { 
  User, 
  Bell, 
  Shield, 
  Sparkles,
  Moon,
  Sun
} from "lucide-react";
import { useState } from "react";

export function SettingsPage() {
  const [selectedCategory, setSelectedCategory] = useState("profile");
  const [aiLevel, setAiLevel] = useState([50]);
  const [darkMode, setDarkMode] = useState(true);

  const categories = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "ai", label: "AI Preferences", icon: Sparkles },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left: Categories */}
        <Card className="p-4 bg-card border-border rounded-2xl shadow-lg h-fit">
          <nav className="space-y-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                    ${isActive 
                      ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20' 
                      : 'text-foreground hover:bg-secondary'
                    }
                  `}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium text-sm">{category.label}</span>
                </button>
              );
            })}
          </nav>
        </Card>

        {/* Right: Settings Content */}
        <Card className="lg:col-span-3 p-8 bg-card border-border rounded-2xl shadow-lg">
          {selectedCategory === "profile" && (
            <div className="space-y-6">
              <h2 className="text-foreground">Profile Settings</h2>
              
              <div className="flex items-center gap-6">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" alt="User" />
                  <AvatarFallback className="bg-accent text-accent-foreground text-2xl">
                    AS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" className="rounded-xl mb-2">
                    Change Avatar
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Recommended: Square image, at least 400x400px
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input
                    id="name"
                    defaultValue="Alex Scholar"
                    className="bg-input-background border-input rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alex@scholar.ai"
                    className="bg-input-background border-input rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="university" className="text-foreground">University</Label>
                  <Input
                    id="university"
                    defaultValue="MIT"
                    className="bg-input-background border-input rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="field" className="text-foreground">Field of Study</Label>
                  <Input
                    id="field"
                    defaultValue="Computer Science"
                    className="bg-input-background border-input rounded-xl"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-primary rounded-xl">Save Changes</Button>
              </div>
            </div>
          )}

          {selectedCategory === "notifications" && (
            <div className="space-y-6">
              <h2 className="text-foreground">Notification Preferences</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Email Notifications</div>
                    <p className="text-sm text-muted-foreground">
                      Receive email updates about your questions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">AI Answer Alerts</div>
                    <p className="text-sm text-muted-foreground">
                      Get notified when AI generates an answer
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Community Answers</div>
                    <p className="text-sm text-muted-foreground">
                      Notifications for new community responses
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Weekly Digest</div>
                    <p className="text-sm text-muted-foreground">
                      Summary of top questions and insights
                    </p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>
          )}

          {selectedCategory === "privacy" && (
            <div className="space-y-6">
              <h2 className="text-foreground">Privacy & Security</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Public Profile</div>
                    <p className="text-sm text-muted-foreground">
                      Allow others to view your profile
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Show Activity</div>
                    <p className="text-sm text-muted-foreground">
                      Display your questions and answers publicly
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Analytics</div>
                    <p className="text-sm text-muted-foreground">
                      Help improve AI Scholar with usage data
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-foreground mb-4">Connected Apps</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">G</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Google</div>
                        <p className="text-sm text-muted-foreground">Connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Disconnect
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-accent rounded-lg flex items-center justify-center">
                        <span className="text-accent-foreground font-bold">M</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Microsoft</div>
                        <p className="text-sm text-muted-foreground">Not connected</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {selectedCategory === "ai" && (
            <div className="space-y-6">
              <h2 className="text-foreground">AI Preferences</h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-accent/10 border border-accent/30 rounded-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <h3 className="text-accent">AI Personalization Level</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Adjust how much AI personalizes your experience
                  </p>
                  <div className="space-y-4">
                    <Slider
                      value={aiLevel}
                      onValueChange={setAiLevel}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Basic</span>
                      <span className="text-accent font-medium">{aiLevel}%</span>
                      <span className="text-muted-foreground">Advanced</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Auto-generate AI Answers</div>
                    <p className="text-sm text-muted-foreground">
                      Automatically generate AI responses for your questions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">AI Study Recommendations</div>
                    <p className="text-sm text-muted-foreground">
                      Receive personalized study suggestions
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl">
                  <div>
                    <div className="font-medium text-foreground">Smart Question Enhancement</div>
                    <p className="text-sm text-muted-foreground">
                      AI helps improve your question clarity
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
