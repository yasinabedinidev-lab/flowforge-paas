import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Eye, ArrowLeft, Code, Key, Sparkles, Workflow, ExternalLink } from "lucide-react";
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
        {/* Return to DockerCity - Top Left */}
        <div className="absolute top-6 left-6 z-20">
          <a 
            href="https://dockercity.ir" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm"
          >
            <ArrowLeft className="h-4 w-4 text-white/80 group-hover:text-white transition-smooth group-hover:-translate-x-1" />
            <span className="text-white/80 group-hover:text-white transition-smooth">بازگشت به DockerCity</span>
            <ExternalLink className="h-3 w-3 text-white/50" />
          </a>
        </div>

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
          </div>
        </div>
      </section>

      {/* Quick Access Box */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/workflows" className="group">
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-orange bg-gradient-card">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow mb-4 shadow-glow-orange group-hover:scale-110 transition-transform">
                      <Workflow className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      ورک‌فلوهای آماده
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      صدها ورک‌فلوی آماده و تست‌شده
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="gap-2 text-primary hover:bg-primary/10"
                    >
                      مشاهده همه
                      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/apis" className="group">
                <Card className="h-full border-border/50 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-purple bg-gradient-card">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-accent to-accent-glow mb-4 shadow-glow-purple group-hover:scale-110 transition-transform">
                      <Code className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-smooth">
                      APIهای اختصاصی
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      دسترسی به سرویس‌های مختلف
                    </p>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="gap-2 text-accent hover:bg-accent/10"
                    >
                      مشاهده همه
                      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>

              <Link to="/custom-order" className="group">
                <Card className="h-full border-2 border-primary/50 hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-glow-orange bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-primary to-accent text-white text-xs font-medium rounded-bl-lg">
                      جدید
                    </div>
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary mb-4 shadow-glow-orange group-hover:scale-110 transition-transform animate-pulse-glow">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                      سفارش اختصاصی
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      ورک‌فلوی مخصوص خودتان را سفارش دهید
                    </p>
                    <Button 
                      variant="default"
                      size="sm"
                      className="gap-2 bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange"
                    >
                      ثبت سفارش
                      <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
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
                      <Button size="sm" variant="outline" className="w-full hover:border-accent hover:text-accent transition-smooth">
                        <Eye className="h-4 w-4 ml-2" />
                        مشاهده جزئیات
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
