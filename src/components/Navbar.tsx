import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Workflow, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { to: "/workflows", label: "ورک‌فلوها" },
    { to: "/apis", label: "APIها" },
    { to: "/custom-order", label: "سفارش اختصاصی" },
    { to: "/flowhub", label: "ویژگی‌ها" },
  ];

  const canGoBack = window.history.length > 1 && location.pathname !== "/";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Right Side: Logo + Back Button */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Workflow className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground hidden sm:inline">n8n@DockerCity</span>
          </Link>

          {canGoBack && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate(-1)}
              className="gap-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowRight className="h-4 w-4" />
              <span className="hidden sm:inline">بازگشت</span>
            </Button>
          )}
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button
                variant="ghost"
                size="sm"
                className={
                  location.pathname === link.to
                    ? "text-primary font-medium bg-primary/10"
                    : "text-muted-foreground hover:text-foreground"
                }
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Left Side: Theme Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden border-t border-border/40 px-4 py-2">
        <div className="flex gap-2 overflow-x-auto">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to}>
              <Button
                variant="ghost"
                size="sm"
                className={
                  location.pathname === link.to
                    ? "text-primary font-medium bg-primary/10 whitespace-nowrap"
                    : "text-muted-foreground hover:text-foreground whitespace-nowrap"
                }
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
