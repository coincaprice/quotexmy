import Image from "next/image";
import { Signal, Video, TrendingUp } from "lucide-react";

const freeSignalsImg = "/features/free-signals.webp";
const webinarsImg = "/features/webinars.webp";
const tradeAnalysisImg = "/features/trade-analysis.webp";

export default function TradingFeatures() {
  const bottomFeatures = [
    {
      icon: Signal,
      title: "Free Trading Signals",
      description: "Get access to professional trading signals delivered in real-time to help you make better trading decisions.",
      imageSrc: freeSignalsImg,
    },
    {
      icon: Video,
      title: "Educational Webinars",
      description: "Join our live webinars and learn from expert traders. Improve your skills and trading strategies.",
      imageSrc: webinarsImg,
    },
    {
      icon: TrendingUp,
      title: "Trade Analysis",
      description: "Analyze your trading performance with detailed statistics and insights to optimize your strategy.",
      imageSrc: tradeAnalysisImg,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1c1f2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Feature - Indicators */}
        <div className="mb-8 md:mb-12">
          <div className="bg-[#212634] rounded-2xl p-6 md:p-8 lg:p-12" data-testid="hero-indicators">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Content */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Advanced Technical Indicators
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Enhance your trading with professional indicators and analytical tools. Make informed decisions with real-time market analysis.
                </p>
              </div>

              {/* Right: Indicators Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[280px] mx-auto">
                  <Image
                    src="/images/indicators.webp"
                    alt="Technical Indicators"
                    width={2000}
                    height={2000}
                    className="w-full h-auto rounded-lg shadow-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-testid="img-indicators"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bottomFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#212634] rounded-xl p-6 hover-elevate transition-all duration-300"
                data-testid={`feature-${index}`}
              >
                {/* Image/Illustration */}
                <div className="relative mb-6 h-40">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.title}
                    fill
                    className="object-contain rounded-md shadow-md"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    data-testid={`img-feature-${index}`}
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
