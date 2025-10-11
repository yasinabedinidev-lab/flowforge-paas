import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";

const plans = [
  {
    name: "رایگان",
    price: "0",
    description: "برای شروع و آزمایش امکانات",
    icon: Sparkles,
    color: "from-muted to-muted",
    features: [
      "10 ورک‌فلوی فعال",
      "1,000 اجرا در ماه",
      "5 اتصال API",
      "2GB فضای ذخیره‌سازی",
      "پشتیبانی ایمیل",
      "دسترسی به ورک‌فلوهای رایگان",
    ],
    cta: "شروع رایگان",
    popular: false,
  },
  {
    name: "توسعه‌دهنده",
    price: "49",
    description: "برای توسعه‌دهندگان حرفه‌ای",
    icon: Zap,
    color: "from-primary to-accent",
    features: [
      "100 ورک‌فلوی فعال",
      "50,000 اجرا در ماه",
      "نامحدود اتصال API",
      "50GB فضای ذخیره‌سازی",
      "پشتیبانی اولویت‌دار",
      "دسترسی به تمام ورک‌فلوها",
      "API Token نامحدود",
      "Custom Domain",
      "آنالیتیکس پیشرفته",
    ],
    cta: "انتخاب پلن",
    popular: true,
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    description: "برای تیم‌ها و سازمان‌ها",
    icon: Crown,
    color: "from-accent to-accent-glow",
    features: [
      "ورک‌فلوهای نامحدود",
      "اجراهای نامحدود",
      "API نامحدود",
      "1TB+ فضای ذخیره‌سازی",
      "پشتیبانی اختصاصی 24/7",
      "SLA تضمین‌شده",
      "White Label",
      "On-Premise Deployment",
      "مشاوره فنی",
      "آموزش تیم",
    ],
    cta: "تماس با فروش",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-16 bg-background">
        <div className="container">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              تعرفه‌های شفاف و منصفانه
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              پلنی که متناسب با نیاز شماست را انتخاب کنید. همه پلن‌ها شامل به‌روزرسانی‌های رایگان هستند.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 animate-scale-in ${
                  plan.popular 
                    ? "border-2 border-primary shadow-glow-orange scale-105" 
                    : "border-border/50 hover:border-primary/50"
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-accent text-white text-center py-2 text-sm font-medium">
                    محبوب‌ترین انتخاب
                  </div>
                )}
                
                <CardHeader className={plan.popular ? "pt-12" : ""}>
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${plan.color} mb-4 w-fit`}>
                    <plan.icon className={`h-6 w-6 ${plan.name === "رایگان" ? "text-muted-foreground" : "text-white"}`} />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-4">
                    {typeof plan.price === 'string' && plan.price === 'تماس بگیرید' ? (
                      <div className="text-3xl font-bold text-foreground">
                        {plan.price}
                      </div>
                    ) : (
                      <div>
                        <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                        <span className="text-muted-foreground mr-2">/ماه</span>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${
                      plan.popular 
                        ? "bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange" 
                        : plan.name === "سازمانی"
                        ? "bg-gradient-to-r from-accent to-accent-glow hover:shadow-glow-purple"
                        : ""
                    }`}
                    variant={plan.name === "رایگان" ? "outline" : "default"}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-xl border border-border p-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
              مقایسه کامل امکانات
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">امکانات</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-foreground">رایگان</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-foreground">توسعه‌دهنده</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-foreground">سازمانی</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "ورک‌فلوهای فعال", free: "10", dev: "100", enterprise: "نامحدود" },
                    { feature: "اجرا در ماه", free: "1,000", dev: "50,000", enterprise: "نامحدود" },
                    { feature: "فضای ذخیره‌سازی", free: "2GB", dev: "50GB", enterprise: "1TB+" },
                    { feature: "پشتیبانی", free: "ایمیل", dev: "اولویت‌دار", enterprise: "24/7" },
                    { feature: "Custom Domain", free: "-", dev: "✓", enterprise: "✓" },
                    { feature: "White Label", free: "-", dev: "-", enterprise: "✓" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 px-4 text-sm text-foreground">{row.feature}</td>
                      <td className="py-3 px-4 text-sm text-center text-muted-foreground">{row.free}</td>
                      <td className="py-3 px-4 text-sm text-center text-muted-foreground">{row.dev}</td>
                      <td className="py-3 px-4 text-sm text-center text-muted-foreground">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              سوالی دارید؟
            </h2>
            <p className="text-muted-foreground mb-6">
              تیم ما آماده پاسخگویی به سوالات شماست
            </p>
            <Button variant="outline" className="hover:border-primary hover:text-primary">
              مشاهده سوالات متداول
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
