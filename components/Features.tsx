import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Gauge, 
  TrendingUp, 
  BarChart3, 
  HeadphonesIcon, 
  Gift, 
  Wallet 
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Gauge,
      title: "Intuitive Interface",
      description: "Trade with ease using our modern, user-friendly platform designed for both beginners and professionals.",
    },
    {
      icon: TrendingUp,
      title: "Trading Signals",
      description: "Get real-time trading signals and market insights to make informed decisions and maximize your profits.",
    },
    {
      icon: BarChart3,
      title: "Advanced Indicators",
      description: "Access professional trading tools and technical indicators to analyze markets and identify opportunities.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Our dedicated support team is always available to help you with any questions or issues.",
    },
    {
      icon: Gift,
      title: "Welcome Bonus",
      description: "Get started with our generous welcome bonus and boost your trading capital today.",
    },
    {
      icon: Wallet,
      title: "Fast Deposits",
      description: "Instant deposits and quick withdrawals with multiple payment methods for your convenience.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover powerful tools and features designed to enhance your trading experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300 border-card-border"
              data-testid={`card-feature-${index}`}
            >
              <CardHeader className="space-y-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#0faf59]">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
