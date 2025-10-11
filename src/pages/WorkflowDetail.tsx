import Navbar from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Download, ArrowRight, Share2, Star, GitFork } from "lucide-react";

const allWorkflows = [
  {
    id: 1,
    title: "سینک داده Notion به Google Sheets",
    description: "همگام‌سازی خودکار داده‌های Notion با Google Sheets در زمان واقعی",
    longDescription: "این ورک‌فلو به صورت خودکار تمام تغییرات در دیتابیس Notion شما را شناسایی کرده و آن‌ها را در Google Sheets همگام‌سازی می‌کند. می‌توانید بازه زمانی دلخواه خود را تنظیم کرده و فیلترهای سفارشی اعمال کنید.",
    tags: ["Productivity", "Automation", "Data"],
    price: "رایگان",
    category: "DataOps",
    nodes: 5,
    rating: 4.8,
    downloads: 1250,
    author: "DockerCity Team",
  },
  {
    id: 2,
    title: "ارسال خودکار ایمیل خوش‌آمدگویی",
    description: "ارسال ایمیل خوش‌آمدگویی به کاربران جدید با قالب سفارشی و زیبا",
    longDescription: "با استفاده از این ورک‌فلو، به محض ثبت‌نام کاربر جدید، یک ایمیل خوش‌آمدگویی کاملاً سفارشی‌شده با اطلاعات کاربر ارسال می‌شود. قابلیت اتصال به سرویس‌های مختلف ایمیل مارکتینگ را دارد.",
    tags: ["Marketing", "Email", "Automation"],
    price: "Premium",
    category: "Marketing",
    nodes: 4,
    rating: 4.9,
    downloads: 2100,
    author: "Marketing Pro",
  },
  {
    id: 3,
    title: "نظارت بر API و هشدار",
    description: "مانیتورینگ سلامت API و ارسال هشدار در صورت خطا به تلگرام/ایمیل",
    longDescription: "این ورک‌فلو به صورت دوره‌ای APIهای شما را چک کرده و در صورت مشاهده خطا یا کاهش سرعت، از طریق تلگرام یا ایمیل به شما اطلاع می‌دهد. گزارش‌های جامع از وضعیت APIها ارائه می‌کند.",
    tags: ["DevOps", "Monitoring", "Alert"],
    price: "رایگان",
    category: "DevOps",
    nodes: 6,
    rating: 4.7,
    downloads: 890,
    author: "DevOps Team",
  },
];

const WorkflowDetail = () => {
  const { id } = useParams();
  const workflow = allWorkflows.find((w) => w.id === Number(id));

  if (!workflow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">ورک‌فلو پیدا نشد</h1>
          <Link to="/workflows">
            <Button>بازگشت به لیست ورک‌فلوها</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Header */}
      <section className="gradient-hero py-12 border-b border-border/50">
        <div className="container">
          <Link to="/workflows" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-smooth">
            <ArrowRight className="h-4 w-4" />
            بازگشت به لیست ورک‌فلوها
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge 
                  variant="secondary" 
                  className={workflow.price === "Premium" ? "bg-accent/20 text-white border-white/20" : "bg-primary/20 text-white border-white/20"}
                >
                  {workflow.price}
                </Badge>
                <Badge variant="outline" className="text-white border-white/30">
                  {workflow.category}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {workflow.title}
              </h1>
              
              <p className="text-lg text-white/80 mb-6">
                {workflow.description}
              </p>

              <div className="flex items-center gap-6 text-white/60 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  <span className="text-white">{workflow.rating}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>{workflow.downloads} استفاده</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitFork className="h-4 w-4" />
                  <span>{workflow.nodes} Nodes</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-glow-orange">
                  <Play className="h-5 w-5 ml-2" />
                  اجرا در Sandbox
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white">
                  <Download className="h-5 w-5 ml-2" />
                  دانلود JSON
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 hover:bg-white/20 text-white">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Workflow Preview */}
            <div className="w-full md:w-96">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">نمای ورک‌فلو</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center border border-white/10">
                    <span className="text-white/60 text-sm">پیش‌نمایش گرافیکی</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>درباره این ورک‌فلو</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {workflow.longDescription}
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>نحوه استفاده</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">1</span>
                      <span>روی دکمه "اجرا در Sandbox" کلیک کنید</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">2</span>
                      <span>تنظیمات مورد نیاز را پیکربندی کنید</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">3</span>
                      <span>ورک‌فلو را تست کرده و فعال کنید</span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>تگ‌ها</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {workflow.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-muted/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>اطلاعات</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">سازنده:</span>
                    <span className="font-medium">{workflow.author}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">تعداد Nodes:</span>
                    <span className="font-medium">{workflow.nodes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">دسته‌بندی:</span>
                    <span className="font-medium">{workflow.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">نوع:</span>
                    <span className="font-medium">{workflow.price}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>ورک‌فلوهای مرتبط</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {allWorkflows
                    .filter((w) => w.id !== workflow.id && w.category === workflow.category)
                    .slice(0, 2)
                    .map((related) => (
                      <Link key={related.id} to={`/workflows/${related.id}`}>
                        <Card className="hover:border-primary/50 transition-smooth cursor-pointer">
                          <CardHeader className="p-4">
                            <CardDescription className="text-xs mb-1">{related.category}</CardDescription>
                            <CardTitle className="text-sm">{related.title}</CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkflowDetail;
