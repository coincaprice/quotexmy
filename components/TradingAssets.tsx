"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SiApple, SiGoogle, SiTesla } from "react-icons/si";
import { Box } from "lucide-react";

interface Asset {
  name: string;
  symbol: string;
  price?: string;
  change: string;
  positive: boolean;
}

// Static trading assets data
const TRADING_ASSETS: Asset[] = [
  { name: "Apple Inc", symbol: "AAPL", change: "11.10%", positive: true },
  { name: "Google", symbol: "GOOGL", change: "54.11%", positive: true },
  { name: "Microsoft", symbol: "MSFT", change: "21.13%", positive: true },
  { name: "Tesla", symbol: "TSLA", change: "106.15%", positive: true },
  { name: "Amazon", symbol: "AMZN", change: "16.67%", positive: true },
  { name: "EUR/USD", symbol: "EURUSD", change: "7.50%", positive: true },
  { name: "GBP/USD", symbol: "GBPUSD", change: "2.53%", positive: true },
  { name: "USD/JPY", symbol: "USDJPY", change: "1.11%", positive: true },
];

// Simple seeded random number generator
const seededRandom = (seed: string) => {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(31, h) + seed.charCodeAt(i) | 0;
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 0x85ebca6b);
    h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
};

// Generate chart path for each asset
const generateChartPath = (symbol: string, positive: boolean) => {
  const random = seededRandom(symbol);
  const points = 12;
  const width = 200;
  const height = 60;
  const stepX = width / (points - 1);
  
  // Generate y values with trend bias
  const yValues: number[] = [];
  let currentY = 40 + (random() - 0.5) * 10; // Start middle-ish
  
  for (let i = 0; i < points; i++) {
    // Add trend bias based on positive/negative
    const trendBias = positive ? -0.5 : 0.5; // Negative y is up in SVG
    const volatility = (random() - 0.5) * 8;
    const trend = trendBias * (i / points) * 15;
    
    currentY = currentY + volatility + trend;
    // Clamp to reasonable bounds
    currentY = Math.max(10, Math.min(50, currentY));
    yValues.push(currentY);
  }
  
  // Build path string
  const pathData = yValues
    .map((y, i) => `${i === 0 ? 'M' : 'L'}${i * stepX},${y}`)
    .join(' ');
  
  // Fill path (close to bottom)
  const fillPath = `${pathData} L${width},${height} L0,${height} Z`;
  
  return { linePath: pathData, fillPath };
};

const getAssetLogo = (symbol: string) => {
  const logos: Record<string, JSX.Element> = {
    AAPL: <SiApple className="w-8 h-8" />,
    GOOGL: <SiGoogle className="w-8 h-8" />,
    MSFT: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" />
      </svg>
    ),
    TSLA: <SiTesla className="w-8 h-8" />,
    AMZN: <span className="w-8 h-8 flex items-center justify-center font-bold text-sm">AMZN</span>,
    EURUSD: (
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span className="font-bold text-lg">€</span>
        <span className="absolute -bottom-1 -right-1 text-xs font-bold">$</span>
      </div>
    ),
    GBPUSD: (
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span className="font-bold text-lg">£</span>
        <span className="absolute -bottom-1 -right-1 text-xs font-bold">$</span>
      </div>
    ),
    USDJPY: (
      <div className="relative w-8 h-8 flex items-center justify-center">
        <span className="font-bold text-lg">$</span>
        <span className="absolute -bottom-1 -right-1 text-xs font-bold">¥</span>
      </div>
    ),
  };
  return logos[symbol] || <Box className="w-8 h-8" />;
};

export default function TradingAssets() {
  const assets = TRADING_ASSETS;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 640px)": { slidesToScroll: 2 },
      "(min-width: 1024px)": { slidesToScroll: 4 },
    },
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Trading Assets
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Access over 400+ trading instruments across multiple asset classes
              </p>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex gap-2 flex-shrink-0">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="rounded-full"
                data-testid="button-prev-asset"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="rounded-full"
                data-testid="button-next-asset"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Asset Slider */}
        <div className="mb-6">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {assets.map((asset, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_calc(50%-8px)] lg:flex-[0_0_calc(25%-12px)]">
                    <Card
                      className="hover-elevate transition-all duration-300 h-full"
                      data-testid={`asset-card-${index}`}
                    >
              <CardContent className="p-6 space-y-4">
                {/* Asset Info with Logo */}
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center text-foreground flex-shrink-0">
                    {getAssetLogo(asset.symbol)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-bold text-foreground mb-1 truncate">
                      {asset.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                  </div>
                </div>

                {/* Mini Chart */}
                <div className="h-20 flex items-end">
                  {(() => {
                    const { linePath, fillPath } = generateChartPath(asset.symbol, asset.positive);
                    return (
                      <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
                        <path
                          d={linePath}
                          fill="none"
                          stroke="hsl(var(--muted-foreground))"
                          strokeWidth="2"
                          opacity="0.5"
                        />
                        <path
                          d={fillPath}
                          fill="hsl(var(--muted-foreground))"
                          opacity="0.1"
                        />
                      </svg>
                    );
                  })()}
                </div>

                {/* Performance at Bottom */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="text-lg font-bold text-primary">
                      {asset.change}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">24h change</p>
                </div>
              </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
