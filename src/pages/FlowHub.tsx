import { Card, CardContent } from "@/components/ui/card";
import { Workflow, Code, Server, Zap, Shield, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "ورک‌فلوهای آماده",
    description: "دسترسی به صدها ورک‌فلوی آماده و تست‌شده برای انواع کاربردها",
    color: "from-primary to-primary-glow",
  },
  {
    icon: Code,
    title: "APIهای اختصاصی",
    description: "مجموعه کاملی از APIهای آماده برای اتصال به سرویس‌های مختلف",
    color: "from-accent to-accent-glow",
  },
  {
    icon: Server,
    title: "هاست n8n خصوصی",
    description: "اجرای n8n روی سرورهای اختصاصی با امنیت و سرعت بالا",
    color: "from-primary to-accent",
  },
  {
    icon: Zap,
    title: "اجرای لحظه‌ای",
    description: "نصب و راه‌اندازی فوری بدون نیاز به پیکربندی پیچیده",
    color: "from-accent to-primary",
  },
  {
    icon: Shield,
    title: "امنیت تضمین‌شده",
    description: "رعایت استانداردهای امنیتی و رمزنگاری داده‌ها",
    color: "from-primary to-primary-glow",
  },
  {
    icon: TrendingUp,
    title: "مقیاس‌پذیری",
    description: "افزایش منابع بر اساس نیاز، بدون محدودیت",
    color: "from-accent to-accent-glow",
  },
];

const FlowHub = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              چرا n8n از DockerCity؟
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              پلتفرمی کامل برای مدیریت و اجرای Workflow‌های شما با بهترین امکانات
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${feature.color} mb-4 shadow-glow-orange group-hover:shadow-glow-purple transition-all`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlowHub;
