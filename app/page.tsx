import { Metadata } from 'next';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TradingAssets from "@/components/TradingAssets";
import TradingFeatures from "@/components/TradingFeatures";
import TradingSteps from "@/components/TradingSteps";
import Testimonials from "@/components/Testimonials";
import MobileApp from "@/components/MobileApp";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { generateMetadata as genMeta } from '@/lib/seo';
import { 
  getOrganizationSchema, 
  getWebSiteSchema, 
  getTradingServiceSchema, 
  getWebPageSchema,
  generateJsonLd 
} from '@/lib/json-ld';

export const metadata: Metadata = genMeta({
  title: 'Quotex – Online Trading Platform | Free $10,000 Demo Account',
  description: 'Quotex is a professional trading platform for binary options, forex & crypto. Get a free $10,000 demo account, real-time charts, fast withdrawals & 24/7 support.',
  keywords: [
    'quotex trading',
    'binary options platform',
    'forex trading platform',
    'cryptocurrency trading',
    'demo account',
    'online trading',
    'trading signals',
    'digital options',
    'quotex broker',
    'investment platform',
  ],
  path: '/',
});

export default function Home() {
  const jsonLd = generateJsonLd([
    getOrganizationSchema(),
    getWebSiteSchema(),
    getTradingServiceSchema(),
    getWebPageSchema(
      'Quotex - Professional Trading Platform',
      'Leading platform for binary options, forex, and cryptocurrency trading',
      'https://quotex.my/'
    ),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <Hero />
        <Features />
        <TradingAssets />
        <TradingFeatures />
        <TradingSteps />
        <Testimonials />
        <MobileApp />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
