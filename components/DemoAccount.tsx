"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AFFILIATE_LINKS } from "@/config/affiliate";

const chartVisualization = "/images/about.webp";

export default function DemoAccount() {
  return (
    <section className="py-16 md:py-24 bg-[#1c1f2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Chart Visualization */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-2xl hover-elevate transition-all duration-300">
              <Image
                src={chartVisualization}
                alt="Demo Trading Chart"
                width={708}
                height={748}
                className="w-full h-auto"
                data-testid="img-demo-chart"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Trade on demo – no registration is required!
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Or register a personal account to access additional features.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="h-11"
                variant="outline"
                data-testid="button-try-demo"
                onClick={() => window.open(AFFILIATE_LINKS.demo, '_blank')}
              >
                Try demo
              </Button>
              <Button
                size="lg"
                className="h-11"
                data-testid="button-register-account"
                onClick={() => window.open(AFFILIATE_LINKS.signup, '_blank')}
              >
                Register an account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
