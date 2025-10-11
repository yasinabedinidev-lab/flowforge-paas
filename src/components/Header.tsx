import { Link } from "react-router-dom";
import { Menu, Workflow, Code, DollarSign, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const navLinks = [
    { to: "/", label: "خانه", icon: null },
    { to: "/workflows", label: "ورک‌فلوها", icon: Workflow },
    { to: "/apis", label: "APIها", icon: Code },
    { to: "/pricing", label: "تعرفه‌ها", icon: DollarSign },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <Workflow className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">FlowHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth relative after:absolute after:bottom-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            ورود
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow-orange">
            شروع رایگان
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-primary transition-smooth py-2"
                >
                  {link.icon && <link.icon className="h-5 w-5" />}
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                <Button variant="ghost" className="w-full justify-start">
                  ورود
                </Button>
                <Button className="w-full bg-gradient-to-r from-primary to-accent">
                  شروع رایگان
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
