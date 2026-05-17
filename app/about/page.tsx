import { Metadata } from 'next';
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Globe,
  Quote
} from "lucide-react";
import { AFFILIATE_LINKS } from "@/config/affiliate";
import { getOrganizationSchema, getWebPageSchema, generateJsonLd } from '@/lib/json-ld';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'About Quotex – Leading Online Trading Platform',
  description: 'Learn about Quotex – a trusted trading platform serving 2M+ active traders in 120+ countries. Our mission is to make financial markets accessible to everyone worldwide.',
  keywords: ['about quotex', 'quotex platform', 'quotex trading company', 'quotex broker', 'binary options broker', 'trading platform history'],
  path: '/about',
});

const growthImg = "/about/our-mision.webp";
const innovationImg = "/about/our-vission.webp";
const chooseAssetImg = "/about/wee-choose.webp";
const installBetImg = "/about/intsall.webp";
const forecastImg = "/about/we-do.webp";
const resultImg = "/about/we-get.webp";

const jsonLd = generateJsonLd([
  getOrganizationSchema(),
  getWebPageSchema(
    'About Quotex - Leading Trading Platform',
    'Learn about Quotex - a trusted trading platform serving 2M+ active traders worldwide',
    'https://quotex.my/about'
  ),
]);

const stats = [
  { value: "2M+", label: "Active Traders" },
  { value: "120+", label: "Countries" },
  { value: "$1.6B+", label: "Trading Volume" },
  { value: "24/7", label: "Support" },
];

const platformSteps = [
  {
    title: "Choose an Asset",
    description: "Select from a wide range of trading instruments including currencies, commodities, stocks, and cryptocurrencies.",
    image: chooseAssetImg,
  },
  {
    title: "Set Your Bet",
    description: "Decide on your investment amount and choose the timeframe for your trade based on your strategy.",
    image: installBetImg,
  },
  {
    title: "Make a Forecast",
    description: "Predict whether the asset price will go up or down using our advanced charting tools and indicators.",
    image: forecastImg,
  },
  {
    title: "Get Results",
    description: "If your forecast is correct, earn up to 96% profit on your investment in seconds.",
    image: resultImg,
  },
];

export default function AboutUs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-[#1c1f2d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                    About Quotex
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Quotex is a leading online trading platform dedicated to providing accessible and innovative trading solutions to millions of traders worldwide.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/images/about.webp"
                    alt="About Quotex"
                    width={708}
                    height={748}
                    className="w-full h-auto max-w-md"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-testid="img-hero-about"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-12 md:py-16 bg-[#212634]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center"
                    data-testid={`stat-${index}`}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-[#0faf59] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-16 md:py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 gap-12">
                <Card className="border-card-border overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={growthImg}
                      alt="Trading Growth"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-mission"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#0faf59] flex items-center justify-center mb-6">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To empower traders worldwide with cutting-edge technology, transparent trading conditions, and exceptional support, making financial markets accessible to everyone.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-card-border overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={innovationImg}
                      alt="Innovation Technology"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-vision"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-[#0faf59] flex items-center justify-center mb-6">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      Our Vision
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      To become the world&apos;s most trusted and innovative trading platform, continuously evolving to meet the needs of modern traders through technology and excellence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How does the platform work */}
          <section className="py-16 md:py-24 bg-[#1c1f2d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  How Does the Platform Work?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Simple steps to start trading on Quotex
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {platformSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-[#212634] rounded-xl p-6 hover-elevate transition-all duration-300"
                    data-testid={`step-${index}`}
                  >
                    <div className="relative mb-6 h-32 bg-[#1a1d28] rounded-lg p-4">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-contain p-4"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        data-testid={`img-step-${index}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Quote Section with Trading Visual */}
          <section className="py-16 md:py-24 bg-[#212634]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="bg-[#1a1d28] rounded-2xl p-8 md:p-12 relative overflow-hidden">
                <div className="mb-6">
                  <Quote className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground/30" strokeWidth={1.5} />
                </div>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12">
                  Our commitment is to provide a secure, transparent, and innovative trading environment where every trader, regardless of experience level, can achieve their financial goals with confidence.
                </p>
                <div className="relative">
                  <Image
                    src="/images/about-1.webp"
                    alt="Trading Platform Visualization"
                    width={2448}
                    height={536}
                    className="w-full h-auto rounded-lg"
                    sizes="100vw"
                    data-testid="img-quote-trading"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-[#1c1f2d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Ready to Start Trading?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Join millions of traders worldwide and start your trading journey today
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={AFFILIATE_LINKS.createAccount}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    data-testid="button-create-account"
                  >
                    <Button size="lg" className="w-full bg-[#0faf59] hover:bg-[#0faf59]/90">
                      Create Account
                    </Button>
                  </a>
                  <a
                    href={AFFILIATE_LINKS.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    data-testid="button-try-demo"
                  >
                    <Button size="lg" variant="outline" className="w-full">
                      Try Demo Account
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
