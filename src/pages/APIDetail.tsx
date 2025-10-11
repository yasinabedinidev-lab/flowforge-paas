import Navbar from "@/components/Navbar";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Copy, ArrowRight, Key, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const allAPIs = [
  {
    id: 1,
    name: "Authentication API",
    description: "سیستم احراز هویت کامل با JWT و OAuth2",
    longDescription: "این API یک سیستم احراز هویت کامل و امن با پشتیبانی از JWT و OAuth2 را فراهم می‌کند. شامل قابلیت‌های ثبت‌نام، ورود، خروج، بازیابی رمز عبور و مدیریت توکن‌ها می‌باشد.",
    endpoint: "/api/v1/auth",
    method: "POST",
    tier: "رایگان",
    requests: "10k/ماه",
    color: "from-primary to-primary-glow",
    baseUrl: "https://api.dockercity.ir",
    authentication: "API Key",
    responseTime: "< 100ms",
    rateLimit: "100 requests/minute",
  },
  {
    id: 2,
    name: "Payment Processing",
    description: "پردازش پرداخت با درگاه‌های مختلف",
    longDescription: "API پردازش پرداخت با پشتیبانی از درگاه‌های مختلف ایرانی و بین‌المللی. قابلیت پرداخت، تأیید پرداخت، استرداد وجه و گزارش‌گیری کامل را دارد.",
    endpoint: "/api/v1/payment",
    method: "POST",
    tier: "Premium",
    requests: "50k/ماه",
    color: "from-accent to-accent-glow",
    baseUrl: "https://api.dockercity.ir",
    authentication: "API Key + Secret",
    responseTime: "< 200ms",
    rateLimit: "50 requests/minute",
  },
  {
    id: 3,
    name: "SMS Gateway",
    description: "ارسال پیامک با قابلیت الگو",
    longDescription: "سرویس ارسال پیامک با قابلیت استفاده از الگوهای از پیش تعریف شده، ارسال انبوه و پیگیری وضعیت ارسال. پشتیبانی از چندین اپراتور ایرانی.",
    endpoint: "/api/v1/sms",
    method: "POST",
    tier: "Premium",
    requests: "5k/ماه",
    color: "from-primary to-accent",
    baseUrl: "https://api.dockercity.ir",
    authentication: "API Key",
    responseTime: "< 150ms",
    rateLimit: "30 requests/minute",
  },
  {
    id: 4,
    name: "Email Service",
    description: "ارسال ایمیل با قالب‌های سفارشی",
    longDescription: "سرویس ارسال ایمیل با قابلیت استفاده از قالب‌های HTML سفارشی، ارسال فایل پیوست، تنظیم اولویت و پیگیری وضعیت ارسال ایمیل‌ها.",
    endpoint: "/api/v1/email",
    method: "POST",
    tier: "رایگان",
    requests: "2k/ماه",
    color: "from-accent to-primary",
    baseUrl: "https://api.dockercity.ir",
    authentication: "API Key",
    responseTime: "< 300ms",
    rateLimit: "20 requests/minute",
  },
  {
    id: 5,
    name: "File Storage",
    description: "آپلود و ذخیره‌سازی فایل در ابر",
    longDescription: "سرویس ذخیره‌سازی فایل در ابر با امکان آپلود، دانلود، حذف و مدیریت فایل‌ها. پشتیبانی از انواع فرمت‌های فایل و تنظیمات دسترسی.",
    endpoint: "/api/v1/storage",
    method: "POST",
    tier: "Premium",
    requests: "100GB/ماه",
    color: "from-primary to-primary-glow",
    baseUrl: "https://api.dockercity.ir",
    authentication: "API Key",
    responseTime: "< 500ms",
    rateLimit: "10 uploads/minute",
  },
  {
    id: 6,
    name: "AI Image Analysis",
    description: "تحلیل تصاویر با هوش مصنوعی",
    longDescription: "API تحلیل تصویر با استفاده از هوش مصنوعی. قابلیت تشخیص اشیاء، تشخیص چهره، استخراج متن از تصویر و دسته‌بندی خودکار تصاویر.",
    endpoint: "/api/v1/ai/image",
    method: "POST",
    tier: "Premium",
    requests: "1k/ماه",
    color: "from-accent to-accent-glow",
    baseUrl: "https://api.dockercity.ir",
    authentication: "API Key",
    responseTime: "< 2s",
    rateLimit: "5 requests/minute",
  },
];

const APIDetail = () => {
  const { id } = useParams();
  const api = allAPIs.find((a) => a.id === Number(id));
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(type);
    toast({
      title: "کپی شد",
      description: "کد با موفقیت کپی شد",
    });
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (!api) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">API پیدا نشد</h1>
          <Link to="/apis">
            <Button>بازگشت به لیست APIها</Button>
          </Link>
        </div>
      </div>
    );
  }

  const curlExample = `curl -X ${api.method} "${api.baseUrl}${api.endpoint}" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "param1": "value1",
    "param2": "value2"
  }'`;

  const jsExample = `const response = await fetch("${api.baseUrl}${api.endpoint}", {
  method: "${api.method}",
  headers: {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    param1: "value1",
    param2: "value2"
  })
});

const data = await response.json();
console.log(data);`;

  const responseExample = `{
  "status": "success",
  "message": "Request processed successfully",
  "data": {
    "id": "unique_id_here",
    "timestamp": "2025-10-11T12:00:00Z",
    "result": {}
  }
}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Header */}
      <section className="gradient-hero py-12 border-b border-border/50">
        <div className="container">
          <Link to="/apis" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-smooth">
            <ArrowRight className="h-4 w-4" />
            بازگشت به لیست APIها
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge 
                  variant="secondary" 
                  className={api.tier === "Premium" ? "bg-accent/20 text-white border-white/20" : "bg-primary/20 text-white border-white/20"}
                >
                  {api.tier}
                </Badge>
                <Badge variant="outline" className="text-white border-white/30">
                  {api.method}
                </Badge>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {api.name}
              </h1>
              
              <p className="text-lg text-white/80 mb-6">
                {api.description}
              </p>

              <div className="flex items-center gap-6 text-white/60 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="text-white">{api.responseTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>{api.rateLimit}</span>
                </div>
              </div>

              <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <code className="text-white/90 text-sm font-mono">
                  {api.baseUrl}{api.endpoint}
                </code>
              </div>
            </div>

            {/* API Info Card */}
            <div className="w-full md:w-96">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="text-white">اطلاعات سریع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between text-white/80">
                    <span>Authentication:</span>
                    <span className="font-medium text-white">{api.authentication}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Response Time:</span>
                    <span className="font-medium text-white">{api.responseTime}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Rate Limit:</span>
                    <span className="font-medium text-white">{api.rateLimit}</span>
                  </div>
                  <div className="flex justify-between text-white/80">
                    <span>Requests:</span>
                    <span className="font-medium text-white">{api.requests}</span>
                  </div>
                  <Button className="w-full mt-4 bg-gradient-to-r from-accent to-accent-glow hover:shadow-glow-purple">
                    <Key className="h-4 w-4 ml-2" />
                    دریافت API Key
                  </Button>
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
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>درباره این API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {api.longDescription}
                  </p>
                </CardContent>
              </Card>

              {/* cURL Example */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>مثال cURL</CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopyCode(curlExample, "curl")}
                    >
                      {copiedCode === "curl" ? (
                        <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 ml-2" />
                      )}
                      کپی
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-foreground">
                      <code>{curlExample}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* JavaScript Example */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>مثال JavaScript</CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopyCode(jsExample, "js")}
                    >
                      {copiedCode === "js" ? (
                        <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 ml-2" />
                      )}
                      کپی
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-foreground">
                      <code>{jsExample}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Response Example */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>نمونه پاسخ</CardTitle>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopyCode(responseExample, "response")}
                    >
                      {copiedCode === "response" ? (
                        <CheckCircle2 className="h-4 w-4 ml-2 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 ml-2" />
                      )}
                      کپی
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-muted rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-foreground">
                      <code>{responseExample}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Parameters */}
              <Card>
                <CardHeader>
                  <CardTitle>پارامترها</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b border-border pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono text-primary">param1</code>
                        <Badge variant="outline" className="text-xs">string</Badge>
                        <Badge variant="secondary" className="text-xs">required</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">توضیحات پارامتر اول</p>
                    </div>
                    <div className="border-b border-border pb-3">
                      <div className="flex items-center gap-2 mb-1">
                        <code className="text-sm font-mono text-primary">param2</code>
                        <Badge variant="outline" className="text-xs">string</Badge>
                        <Badge variant="outline" className="text-xs">optional</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">توضیحات پارامتر دوم</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Error Codes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="text-xs">200</code>
                    <span className="text-muted-foreground">موفقیت</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-xs">400</code>
                    <span className="text-muted-foreground">درخواست نامعتبر</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-xs">401</code>
                    <span className="text-muted-foreground">احراز هویت نشده</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-xs">429</code>
                    <span className="text-muted-foreground">محدودیت درخواست</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="text-xs">500</code>
                    <span className="text-muted-foreground">خطای سرور</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>APIهای مرتبط</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {allAPIs
                    .filter((a) => a.id !== api.id)
                    .slice(0, 3)
                    .map((related) => (
                      <Link key={related.id} to={`/apis/${related.id}`}>
                        <Card className="hover:border-primary/50 transition-smooth cursor-pointer">
                          <CardHeader className="p-4">
                            <div className="flex items-center gap-2 mb-1">
                              <Code className="h-4 w-4 text-primary" />
                              <Badge variant="outline" className="text-xs">{related.method}</Badge>
                            </div>
                            <CardTitle className="text-sm">{related.name}</CardTitle>
                          </CardHeader>
                        </Card>
                      </Link>
                    ))}
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">نیاز به کمک؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    برای دریافت راهنمایی بیشتر با تیم پشتیبانی تماس بگیرید
                  </p>
                  <Button variant="outline" className="w-full">
                    تماس با پشتیبانی
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIDetail;
