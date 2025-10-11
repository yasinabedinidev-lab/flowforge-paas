import { Link } from "react-router-dom";
import { Workflow, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { label: "ورک‌فلوها", to: "/workflows" },
      { label: "APIها", to: "/apis" },
      { label: "تعرفه‌ها", to: "/pricing" },
      { label: "مستندات", to: "/docs" },
    ],
    company: [
      { label: "درباره ما", to: "/about" },
      { label: "بلاگ", to: "/blog" },
      { label: "تماس با ما", to: "/contact" },
      { label: "شرایط استفاده", to: "/terms" },
    ],
    developers: [
      { label: "مستندات API", to: "/api-docs" },
      { label: "راهنمای توسعه‌دهندگان", to: "/developer-guide" },
      { label: "نمونه کدها", to: "/examples" },
      { label: "وضعیت سرویس", to: "/status" },
    ],
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <Workflow className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">FlowHub</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-4">
              پلتفرم حرفه‌ای PaaS برای ساخت، اجرا و مدیریت Workflow‌ها و APIهای اختصاصی
            </p>
            <div className="flex gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:info@flowhub.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-smooth"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">محصولات</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">شرکت</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">توسعه‌دهندگان</h3>
            <ul className="space-y-2">
              {footerLinks.developers.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 FlowHub. تمامی حقوق محفوظ است.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth">
              حریم خصوصی
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth">
              شرایط استفاده
            </Link>
            <Link to="/cookies" className="text-muted-foreground hover:text-primary transition-smooth">
              کوکی‌ها
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
