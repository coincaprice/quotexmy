"use client";

import { Button } from "@/components/ui/button";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#1c1f2d] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Content */}
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Trade the Global Markets with{" "}
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground">
              Quotex lets you trade forex, commodities, stocks, and cryptocurrencies with speed, accuracy, and full transparency.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="h-11"
              data-testid="button-create-account"
              onClick={() => window.open(AFFILIATE_LINKS.createAccount, '_blank')}
            >
              Create Account
            </Button>
            <Button
              size="lg"
              className="h-11"
              variant="outline"
              data-testid="button-demo-info"
              onClick={() => window.open(AFFILIATE_LINKS.demo, '_blank')}
            >
              Try Demo
            </Button>
          </div>

          {/* Platform Video */}
          <div className="relative w-full max-w-6xl mt-8">
            <div className="relative rounded-xl overflow-hidden shadow-2xl hover-elevate transition-all duration-300">
              <video
                src="/images/platform-qx.webm"
                className="w-full h-auto"
                autoPlay
                loop
                muted
                playsInline
                data-testid="video-platform"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
