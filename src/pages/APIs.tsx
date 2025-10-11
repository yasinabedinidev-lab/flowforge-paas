import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Key, TrendingUp, Zap } from "lucide-react";

const apis = [
  {
    id: 1,
    name: "Authentication API",
    description: "سیستم احراز هویت کامل با JWT و OAuth2",
    endpoint: "/api/v1/auth",
    method: "POST",
    tier: "رایگان",
    requests: "10k/ماه",
    color: "from-primary to-primary-glow",
  },
  {
    id: 2,
    name: "Payment Processing",
    description: "پردازش پرداخت با درگاه‌های مختلف",
    endpoint: "/api/v1/payment",
    method: "POST",
    tier: "Premium",
    requests: "50k/ماه",
    color: "from-accent to-accent-glow",
  },
  {
    id: 3,
    name: "SMS Gateway",
    description: "ارسال پیامک با قابلیت الگو",
    endpoint: "/api/v1/sms",
    method: "POST",
    tier: "Premium",
    requests: "5k/ماه",
    color: "from-primary to-accent",
  },
  {
    id: 4,
    name: "Email Service",
    description: "ارسال ایمیل با قالب‌های سفارشی",
    endpoint: "/api/v1/email",
    method: "POST",
    tier: "رایگان",
    requests: "2k/ماه",
    color: "from-accent to-primary",
  },
  {
    id: 5,
    name: "File Storage",
    description: "آپلود و ذخیره‌سازی فایل در ابر",
    endpoint: "/api/v1/storage",
    method: "POST",
    tier: "Premium",
    requests: "100GB/ماه",
    color: "from-primary to-primary-glow",
  },
  {
    id: 6,
    name: "AI Image Analysis",
    description: "تحلیل تصاویر با هوش مصنوعی",
    endpoint: "/api/v1/ai/image",
    method: "POST",
    tier: "Premium",
    requests: "1k/ماه",
    color: "from-accent to-accent-glow",
  },
];

const APIs = () => {
  return (
    <div className="min-h-screen">
      <main className="py-12 gradient-hero">
        <div className="container">
          {/* Page Header */}
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              APIهای اختصاصی
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              دسترسی به مجموعه کاملی از APIهای آماده برای اتصال به سرویس‌های مختلف
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <Code className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">50+</div>
                    <div className="text-sm text-white/60">API Endpoints</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-white/60">Uptime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">1M+</div>
                    <div className="text-sm text-white/60">Requests/Day</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/20">
                    <Key className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold">Secure</div>
                    <div className="text-sm text-white/60">Encryption</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* APIs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apis.map((api, index) => (
              <Card
                key={api.id}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${api.color} shadow-glow-orange group-hover:shadow-glow-purple transition-all`}>
                      <Code className="h-5 w-5 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className={api.tier === "Premium" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"}
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
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Endpoint:</span>
                      <code className="px-2 py-1 bg-muted rounded text-xs font-inter">
                        {api.endpoint}
                      </code>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Method:</span>
                      <Badge variant="outline" className="text-xs">
                        {api.method}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Requests:</span>
                      <span className="text-foreground font-medium">{api.requests}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-accent to-accent-glow hover:shadow-glow-purple transition-smooth"
                    >
                      <Key className="h-4 w-4 ml-2" />
                      دریافت Token
                    </Button>
                    <Button size="sm" variant="outline" className="hover:border-primary hover:text-primary transition-smooth">
                      مستندات
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* API Testing Section */}
          <div className="mt-16 p-8 bg-card rounded-xl border border-border/50 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              تست API در Sandbox
            </h2>
            <p className="text-muted-foreground mb-6">
              همه APIها را به صورت زنده در محیط sandbox تست کنید
            </p>
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange">
              ورود به Sandbox
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default APIs;
