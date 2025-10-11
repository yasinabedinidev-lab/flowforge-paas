import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Eye, Search, Filter } from "lucide-react";

const categories = ["همه", "DevOps", "Marketing", "DataOps", "امنیت", "AI", "Productivity"];

const allWorkflows = [
  {
    id: 1,
    title: "سینک داده Notion به Google Sheets",
    description: "همگام‌سازی خودکار داده‌های Notion با Google Sheets در زمان واقعی",
    tags: ["Productivity", "Automation", "Data"],
    price: "رایگان",
    category: "DataOps",
    nodes: 5,
  },
  {
    id: 2,
    title: "ارسال خودکار ایمیل خوش‌آمدگویی",
    description: "ارسال ایمیل خوش‌آمدگویی به کاربران جدید با قالب سفارشی و زیبا",
    tags: ["Marketing", "Email", "Automation"],
    price: "Premium",
    category: "Marketing",
    nodes: 4,
  },
  {
    id: 3,
    title: "نظارت بر API و هشدار",
    description: "مانیتورینگ سلامت API و ارسال هشدار در صورت خطا به تلگرام/ایمیل",
    tags: ["DevOps", "Monitoring", "Alert"],
    price: "رایگان",
    category: "DevOps",
    nodes: 6,
  },
  {
    id: 4,
    title: "پردازش تصاویر با AI",
    description: "تحلیل و برچسب‌گذاری خودکار تصاویر با استفاده از هوش مصنوعی",
    tags: ["AI", "Image Processing", "ML"],
    price: "Premium",
    category: "AI",
    nodes: 7,
  },
  {
    id: 5,
    title: "بکاپ خودکار دیتابیس",
    description: "پشتیبان‌گیری روزانه از دیتابیس و ذخیره در Google Drive",
    tags: ["DevOps", "Database", "Backup"],
    price: "رایگان",
    category: "DevOps",
    nodes: 4,
  },
  {
    id: 6,
    title: "اسکن امنیتی وب‌سایت",
    description: "بررسی روزانه آسیب‌پذیری‌های امنیتی و ارسال گزارش",
    tags: ["امنیت", "Security Scan", "Alert"],
    price: "Premium",
    category: "امنیت",
    nodes: 8,
  },
  {
    id: 7,
    title: "جمع‌آوری داده‌های اجتماعی",
    description: "دریافت اطلاعات از شبکه‌های اجتماعی و ذخیره در دیتابیس",
    tags: ["Marketing", "Social Media", "Data"],
    price: "Premium",
    category: "Marketing",
    nodes: 6,
  },
  {
    id: 8,
    title: "تبدیل فایل‌های PDF",
    description: "تبدیل خودکار PDF به فرمت‌های مختلف و ارسال به کاربر",
    tags: ["Productivity", "File Processing"],
    price: "رایگان",
    category: "Productivity",
    nodes: 3,
  },
];

const Workflows = () => {
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkflows = allWorkflows.filter((workflow) => {
    const matchesCategory = selectedCategory === "همه" || workflow.category === selectedCategory;
    const matchesSearch = workflow.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         workflow.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <main className="py-12 bg-background">
        <div className="container">
          {/* Page Header */}
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ورک‌فلوهای آماده
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              از میان صدها ورک‌فلوی آماده و تست‌شده انتخاب کنید و بلافاصله استفاده کنید
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="جستجوی ورک‌فلو..."
                className="pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              <Filter className="h-5 w-5 text-muted-foreground self-center ml-2" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gradient-to-r from-primary to-accent shadow-glow-orange" : "hover:border-primary"}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Workflows Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkflows.map((workflow, index) => (
              <Link key={workflow.id} to={`/workflows/${workflow.id}`}>
                <Card
                key={workflow.id}
                className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/50 hover:border-primary/50 bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={workflow.price === "Premium" ? "bg-accent/10 text-accent border-accent/20" : "bg-primary/10 text-primary border-primary/20"}
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
                  <CardDescription className="text-sm leading-relaxed">
                    {workflow.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {workflow.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs bg-muted/50">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-muted-foreground">
                      {workflow.nodes} Nodes
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange transition-smooth group"
                    >
                      <Play className="h-4 w-4 ml-2 group-hover:scale-110 transition-transform" />
                      اجرا در Sandbox
                    </Button>
                    <Button size="sm" variant="outline" className="hover:border-accent hover:text-accent transition-smooth">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>

          {filteredWorkflows.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                هیچ ورک‌فلویی پیدا نشد. لطفاً جستجو یا فیلتر دیگری امتحان کنید.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Workflows;
