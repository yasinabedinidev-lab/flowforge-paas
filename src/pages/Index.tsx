import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, ArrowLeft, Code, Key, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const topWorkflows = [
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
    description: "ارسال ایمیل خوش‌آمدگویی به کاربران جدید",
    tags: ["Marketing", "Email"],
    price: "Premium",
    category: "Marketing",
  },
  {
    id: 3,
    title: "نظارت بر API و هشدار",
    description: "مانیتورینگ سلامت API و ارسال هشدار",
    tags: ["DevOps", "Monitoring"],
    price: "رایگان",
    category: "DevOps",
  },
];

const topAPIs = [
  {
    id: 1,
    name: "Authentication API",
    description: "سیستم احراز هویت کامل با JWT و OAuth2",
    endpoint: "/api/v1/auth",
    tier: "رایگان",
  },
  {
    id: 2,
    name: "Payment Processing",
    description: "پردازش پرداخت با درگاه‌های مختلف",
    endpoint: "/api/v1/payment",
    tier: "Premium",
  },
  {
    id: 3,
    name: "SMS Gateway",
    description: "ارسال پیامک با قابلیت الگو",
    endpoint: "/api/v1/sms",
    tier: "Premium",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero min-h-[500px] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container relative z-10 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">بخش n8n از DockerCity</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              اتوماسیون حرفه‌ای با <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">n8n</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              ورک‌فلوهای آماده و APIهای اختصاصی برای اتوماسیون کسب‌وکار شما
            </p>

            {/* Quick Links Box */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md mx-auto mt-8">
              <h3 className="text-white font-semibold mb-4">دسترسی سریع</h3>
              <div className="flex gap-3">
                <Link to="/workflows" className="flex-1">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange transition-smooth"
                  >
                    ورک‌فلوها
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/apis" className="flex-1">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                  >
                    APIها
                    <ArrowLeft className="mr-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Workflows */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                ورک‌فلوهای برتر
              </h2>
              <p className="text-muted-foreground">آماده برای استفاده فوری</p>
            </div>
            <Link to="/workflows">
              <Button variant="outline" className="hidden md:flex items-center gap-2 hover:border-primary hover:text-primary transition-smooth">
                مشاهده همه
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topWorkflows.map((workflow, index) => (
              <Link key={workflow.id} to={`/workflows/${workflow.id}`}>
                <Card className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card h-full">
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
                        <Play className="h-4 w-4 ml-2" />
                        اجرا
                      </Button>
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top APIs */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                APIهای برتر
              </h2>
              <p className="text-muted-foreground">دسترسی آسان به سرویس‌های مختلف</p>
            </div>
            <Link to="/apis">
              <Button variant="outline" className="hidden md:flex items-center gap-2 hover:border-primary hover:text-primary transition-smooth">
                مشاهده همه
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {topAPIs.map((api, index) => (
              <Card
                key={api.id}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow shadow-glow-purple">
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={api.tier === "Premium" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}
                    >
                      {api.tier}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                    {api.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {api.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <code className="px-2 py-1 bg-muted rounded text-xs font-inter block">
                      {api.endpoint}
                    </code>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-accent to-accent-glow hover:shadow-glow-purple transition-smooth"
                  >
                    <Key className="h-4 w-4 ml-2" />
                    دریافت Token
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
