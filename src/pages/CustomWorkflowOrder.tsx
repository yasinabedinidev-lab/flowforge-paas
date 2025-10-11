import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Sparkles, Zap, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";

const orderSchema = z.object({
  name: z.string().trim().min(2, { message: "نام باید حداقل ۲ کاراکتر باشد" }).max(100),
  email: z.string().trim().email({ message: "ایمیل معتبر نیست" }).max(255),
  phone: z.string().trim().min(10, { message: "شماره تماس معتبر نیست" }).max(20),
  description: z.string().trim().min(20, { message: "توضیحات باید حداقل ۲۰ کاراکتر باشد" }).max(2000),
});

const features = [
  { icon: Zap, text: "طراحی اختصاصی بر اساس نیاز شما" },
  { icon: CheckCircle2, text: "تست و پشتیبانی رایگان" },
  { icon: Sparkles, text: "تحویل سریع و مستندات کامل" },
];

const CustomWorkflowOrder = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = orderSchema.parse(formData);
      
      // اینجا می‌تونید درخواست رو به بک‌اند بفرستید
      console.log("Order submitted:", validated);
      
      toast({
        title: "درخواست شما ثبت شد",
        description: "تیم ما در اسرع وقت با شما تماس خواهند گرفت.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "خطا در اطلاعات فرم",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="gradient-hero py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-white">سفارش ورک‌فلوی اختصاصی</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              ورک‌فلوی اختصاصی خودتان را سفارش دهید
            </h1>

            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              تیم متخصص ما آماده است تا دقیقاً همان ورک‌فلویی را که نیاز دارید برایتان طراحی و پیاده‌سازی کند
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-glow-orange">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-foreground font-medium">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Form */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-border/50 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">فرم سفارش</CardTitle>
                <CardDescription>
                  اطلاعات خود و نیازمندی‌های ورک‌فلوی خود را برای ما بنویسید
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">نام و نام خانوادگی *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="علی احمدی"
                      required
                      maxLength={100}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">ایمیل *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                        maxLength={255}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">شماره تماس *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="09123456789"
                        required
                        maxLength={20}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">توضیحات ورک‌فلوی مورد نیاز *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="لطفاً به طور دقیق توضیح دهید که چه نوع ورک‌فلویی نیاز دارید، چه ابزارها و سرویس‌هایی باید به هم متصل شوند و چه عملیاتی باید انجام شود..."
                      rows={6}
                      required
                      maxLength={2000}
                      className="resize-none"
                    />
                    <p className="text-xs text-muted-foreground">
                      {formData.description.length}/2000 کاراکتر
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange transition-smooth"
                  >
                    {isSubmitting ? "در حال ارسال..." : "ثبت درخواست"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomWorkflowOrder;
