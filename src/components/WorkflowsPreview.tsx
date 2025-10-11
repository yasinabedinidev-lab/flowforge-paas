import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const workflows = [
  {
    id: 1,
    title: "سینک داده Notion به Google Sheets",
    description: "همگام‌سازی خودکار داده‌های Notion با Google Sheets",
    tags: ["Productivity", "Automation"],
    price: "رایگان",
    category: "DataOps",
  },
  {
    id: 2,
    title: "ارسال خودکار ایمیل خوش‌آمدگویی",
    description: "ارسال ایمیل خوش‌آمدگویی به کاربران جدید با قالب سفارشی",
    tags: ["Marketing", "Email"],
    price: "Premium",
    category: "Marketing",
  },
  {
    id: 3,
    title: "نظارت بر API و هشدار",
    description: "مانیتورینگ سلامت API و ارسال هشدار در صورت خطا",
    tags: ["DevOps", "Monitoring"],
    price: "رایگان",
    category: "DevOps",
  },
  {
    id: 4,
    title: "پردازش تصاویر با AI",
    description: "تحلیل و برچسب‌گذاری خودکار تصاویر با هوش مصنوعی",
    tags: ["AI", "Image Processing"],
    price: "Premium",
    category: "AI",
  },
];

const WorkflowsPreview = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              ورک‌فلوهای محبوب
            </h2>
            <p className="text-muted-foreground">
              آماده برای استفاده فوری
            </p>
          </div>
          <Link to="/workflows">
            <Button variant="outline" className="hidden md:flex items-center gap-2 hover:border-primary hover:text-primary transition-smooth">
              مشاهده همه
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((workflow, index) => (
            <Card
              key={workflow.id}
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    variant="secondary" 
                    className={workflow.price === "Premium" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}
                  >
                    {workflow.price}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {workflow.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                  {workflow.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-4">
                  {workflow.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs bg-muted">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange transition-smooth group"
                  >
                    <Play className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                    اجرا
                  </Button>
                  <Button size="sm" variant="outline" className="hover:border-accent hover:text-accent transition-smooth">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:hidden">
          <Link to="/workflows">
            <Button variant="outline" className="w-full sm:w-auto">
              مشاهده همه ورک‌فلوها
              <ArrowLeft className="mr-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsPreview;
