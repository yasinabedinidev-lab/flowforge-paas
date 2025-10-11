import { Button } from "@/components/ui/button";
import { ArrowLeft, Workflow, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero min-h-[600px] flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        {/* Flow Animation Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(16, 80%, 57%)" />
              <stop offset="100%" stopColor="hsl(263, 100%, 65%)" />
            </linearGradient>
          </defs>
          
          {/* Animated connecting lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} className="animate-flow" style={{ animationDelay: `${i * 0.5}s` }}>
              <circle cx={`${20 + i * 15}%`} cy="30%" r="4" fill="url(#flowGradient)" opacity="0.6" />
              <circle cx={`${25 + i * 15}%`} cy="50%" r="4" fill="url(#flowGradient)" opacity="0.6" />
              <line 
                x1={`${20 + i * 15}%`} 
                y1="30%" 
                x2={`${25 + i * 15}%`} 
                y2="50%" 
                stroke="url(#flowGradient)" 
                strokeWidth="2" 
                opacity="0.4"
              />
            </g>
          ))}
        </svg>
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-white">پلتفرم PaaS نسل جدید</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            ساخت و اجرای <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">Workflow‌ها</span> در لحظه
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            بر بستر PaaS ما، ورک‌فلوهای آماده را اجرا کنید، APIهای اختصاصی بسازید و با n8n خصوصی خودتان کار کنید.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link to="/workflows">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg shadow-glow-orange transition-smooth hover:scale-105 group"
              >
                مشاهده ورک‌فلوها
                <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link to="/apis">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm px-8 py-6 text-lg transition-smooth hover:scale-105"
              >
                مرور APIها
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-white/60 mt-1">ورک‌فلوی آماده</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60 mt-1">API اختصاصی</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">10k+</div>
              <div className="text-sm text-white/60 mt-1">کاربر فعال</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
