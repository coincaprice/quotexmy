"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search, TrendingUp, MousePointerClick, FileText } from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export default function TradingSteps() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Choose Your Asset",
      description: "Select from hundreds of trading instruments including forex, stocks, commodities, and cryptocurrencies.",
    },
    {
      icon: TrendingUp,
      number: "02",
      title: "Analyze the Market",
      description: "Use our advanced charting tools and technical indicators to identify profitable trading opportunities.",
    },
    {
      icon: MousePointerClick,
      number: "03",
      title: "Place Your Trade",
      description: "Execute trades instantly with just one click. Set your investment amount and choose your direction.",
    },
    {
      icon: FileText,
      number: "04",
      title: "Track & Profit",
      description: "Monitor your trades in real-time and watch your profits grow. Withdraw your earnings anytime.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Start Trading in 4 Simple Steps
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Get started with Quotex today and join thousands of successful traders worldwide
            </p>

            <div>
              <Button
                size="lg"
                className="h-11"
                data-testid="button-try-free"
                onClick={() => window.open(AFFILIATE_LINKS.demo, '_blank')}
              >
                Try Free Demo
              </Button>
            </div>

            {/* Chart Illustration */}
            <div className="pt-8">
              <svg viewBox="0 0 300 120" className="w-full max-w-md" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 100 L40 85 L70 95 L100 70 L130 75 L160 55 L190 60 L220 45 L250 50 L280 35" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="opacity-80"
                />
                {/* Grid lines */}
                <line x1="0" y1="30" x2="300" y2="30" stroke="currentColor" strokeWidth="1" className="opacity-10" />
                <line x1="0" y1="60" x2="300" y2="60" stroke="currentColor" strokeWidth="1" className="opacity-10" />
                <line x1="0" y1="90" x2="300" y2="90" stroke="currentColor" strokeWidth="1" className="opacity-10" />
              </svg>
            </div>
          </div>

          {/* Right: Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="group hover-elevate transition-all duration-300 border-border/50"
                data-testid={`step-${index + 1}`}
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex gap-3 md:gap-4">
                    {/* Left: Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                      </div>
                    </div>
                    
                    {/* Right: Content */}
                    <div className="flex-1 space-y-2">
                      <h3 className="text-lg font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money Stack Illustration - Bottom Right */}
        <div className="absolute bottom-8 right-8 hidden lg:block opacity-20">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Stack of money */}
            <rect x="20" y="60" width="60" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.8"/>
            <rect x="30" y="50" width="60" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.9"/>
            <rect x="40" y="40" width="60" height="40" rx="4" fill="hsl(var(--primary))"/>
            {/* Dollar sign */}
            <text x="70" y="70" fontSize="24" fontWeight="bold" fill="white">$</text>
            {/* Coins */}
            <circle cx="90" cy="30" r="15" fill="hsl(var(--primary))" opacity="0.9"/>
            <circle cx="105" cy="35" r="12" fill="hsl(var(--primary))" opacity="0.7"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
