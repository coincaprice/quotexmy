import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Trading Assets – Quotex | Forex, Crypto, Commodities & Stocks',
  description: 'Explore 100+ trading assets on Quotex including forex currency pairs, cryptocurrencies (Bitcoin, Ethereum), commodities (gold, oil), and stock indices. Payouts up to 92%.',
  keywords: ['quotex assets', 'forex trading pairs', 'crypto trading', 'gold trading', 'trading instruments', 'binary options assets', 'quotex payout'],
  path: '/assets',
});

export default function Assets() {
  const currencyAssets = [
    { name: "EUR/USD OTC", payout: 92 },
    { name: "AUD/NZD OTC", payout: 92 },
    { name: "AUD/USD OTC", payout: 92 },
    { name: "CHF/JPY OTC", payout: 92 },
    { name: "EUR/GBP OTC", payout: 92 },
    { name: "GBP/JPY OTC", payout: 92 },
    { name: "GBP/USD OTC", payout: 92 },
    { name: "USD/CAD OTC", payout: 92 },
    { name: "USD/CHF OTC", payout: 92 },
    { name: "USD/JPY OTC", payout: 92 },
    { name: "USD/VND OTC", payout: 92 },
    { name: "USD/MXN OTC", payout: 92 },
    { name: "USD/BRL OTC", payout: 92 },
    { name: "YER/USD OTC", payout: 92 },
    { name: "QAR/CNY OTC", payout: 92 },
    { name: "NGN/USD OTC", payout: 92 },
    { name: "ZAR/USD OTC", payout: 92 },
    { name: "EUR/CHF OTC", payout: 91 },
    { name: "USD/RUB OTC", payout: 91 },
    { name: "USD/COP OTC", payout: 91 },
    { name: "USD/CNH OTC", payout: 90 },
    { name: "AUD/CAD OTC", payout: 88 },
    { name: "CAD/CHF OTC", payout: 88 },
    { name: "EUR/JPY OTC", payout: 86 },
    { name: "AED/CNY OTC", payout: 84 },
    { name: "NZD/JPY OTC", payout: 83 },
    { name: "BHD/CNY OTC", payout: 83 },
    { name: "USD/ARS OTC", payout: 82 },
    { name: "USD/MYR OTC", payout: 81 },
    { name: "CHF/NOK OTC", payout: 79 },
    { name: "USD/CLP OTC", payout: 79 },
  ];

  const commoditiesAssets = [
    { name: "Gold OTC", payout: 80 },
    { name: "Brent Oil OTC", payout: 80 },
    { name: "WTI Crude Oil OTC", payout: 80 },
    { name: "Silver OTC", payout: 80 },
    { name: "Natural Gas OTC", payout: 45 },
    { name: "Platinum spot OTC", payout: 45 },
    { name: "Palladium spot OTC", payout: 45 },
  ];

  const stocksAssets = [
    { name: "NVIDIA OTC", payout: 96 },
    { name: "Apple OTC", payout: 92 },
    { name: "Pfizer Inc OTC", payout: 92 },
    { name: "Johnson & Johnson OTC", payout: 92 },
    { name: "Amazon OTC", payout: 92 },
    { name: "Citigroup Inc OTC", payout: 92 },
    { name: "VIX OTC", payout: 92 },
    { name: "ExxonMobil OTC", payout: 88 },
    { name: "Tesla OTC", payout: 84 },
    { name: "American Express OTC", payout: 81 },
    { name: "FedEx OTC", payout: 81 },
    { name: "Alibaba OTC", payout: 76 },
    { name: "Palantir Technologies OTC", payout: 74 },
    { name: "McDonald's OTC", payout: 73 },
    { name: "VISA OTC", payout: 73 },
    { name: "Microsoft OTC", payout: 72 },
    { name: "GameStop Corp OTC", payout: 72 },
    { name: "Advanced Micro Devices OTC", payout: 72 },
    { name: "Coinbase Global OTC", payout: 71 },
    { name: "Cisco OTC", payout: 70 },
    { name: "Marathon Digital Holdings OTC", payout: 69 },
    { name: "Netflix OTC", payout: 64 },
    { name: "FACEBOOK INC OTC", payout: 58 },
    { name: "Intel OTC", payout: 38 },
    { name: "Boeing Company OTC", payout: 20 },
  ];

  const cryptoAssets = [
    { name: "BNB OTC", payout: 92 },
    { name: "Cardano OTC", payout: 92 },
    { name: "TRON OTC", payout: 92 },
    { name: "Bitcoin OTC", payout: 92 },
    { name: "Bitcoin ETF OTC", payout: 92 },
    { name: "Chainlink OTC", payout: 86 },
    { name: "Solana OTC", payout: 85 },
    { name: "Avalanche OTC", payout: 71 },
    { name: "Toncoin OTC", payout: 69 },
    { name: "Dogecoin OTC", payout: 67 },
    { name: "Litecoin OTC", payout: 66 },
    { name: "Polkadot OTC", payout: 49 },
    { name: "Ethereum OTC", payout: 35 },
    { name: "Polygon OTC", payout: 24 },
    { name: "Bitcoin", payout: 15 },
  ];

  const indicesAssets = [
    { name: "AUS 200 OTC", payout: 67 },
    { name: "E35EUR OTC", payout: 45 },
    { name: "100GBP OTC", payout: 45 },
    { name: "F40EUR OTC", payout: 45 },
    { name: "JPN225 OTC", payout: 45 },
    { name: "D30EUR OTC", payout: 45 },
    { name: "E50EUR OTC", payout: 45 },
    { name: "SP500 OTC", payout: 45 },
    { name: "DJI30 OTC", payout: 45 },
    { name: "US100 OTC", payout: 45 },
  ];

  const renderAssetGrid = (assets: { name: string; payout: number }[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {assets.map((asset, index) => (
        <div
          key={index}
          className="bg-[#212634] rounded-lg p-4 hover-elevate active-elevate-2 transition-all"
          data-testid={`asset-${asset.name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#0faf59] animate-pulse" />
              <span className="text-xs text-muted-foreground">Available</span>
            </div>
            <Badge
              variant="outline"
              className="bg-[#0faf59]/10 text-[#0faf59] border-[#0faf59]/20"
            >
              {asset.payout}%
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-foreground">{asset.name}</h3>
            <TrendingUp className="w-4 h-4 text-[#0faf59]" />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#1c1f2d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quotex Trading Assets
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Explore our comprehensive range of trading assets including currencies, commodities, stocks, cryptocurrencies, and indices with competitive payouts.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0faf59]/10 border border-[#0faf59]/20">
                <div className="w-2 h-2 rounded-full bg-[#0faf59] animate-pulse" />
                <span className="text-sm text-[#0faf59] font-medium">
                  Live Market Data
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Assets Tabs */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Tabs defaultValue="currency" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-[#212634] p-1 h-auto">
                <TabsTrigger
                  value="currency"
                  className="data-[state=active]:bg-[#0faf59] data-[state=active]:text-white py-3"
                  data-testid="tab-currency"
                >
                  Currency
                </TabsTrigger>
                <TabsTrigger
                  value="commodities"
                  className="data-[state=active]:bg-[#0faf59] data-[state=active]:text-white py-3"
                  data-testid="tab-commodities"
                >
                  Commodities
                </TabsTrigger>
                <TabsTrigger
                  value="stocks"
                  className="data-[state=active]:bg-[#0faf59] data-[state=active]:text-white py-3"
                  data-testid="tab-stocks"
                >
                  Stocks
                </TabsTrigger>
                <TabsTrigger
                  value="crypto"
                  className="data-[state=active]:bg-[#0faf59] data-[state=active]:text-white py-3"
                  data-testid="tab-crypto"
                >
                  Crypto
                </TabsTrigger>
                <TabsTrigger
                  value="indices"
                  className="data-[state=active]:bg-[#0faf59] data-[state=active]:text-white py-3"
                  data-testid="tab-indices"
                >
                  Indices
                </TabsTrigger>
              </TabsList>

              <TabsContent value="currency" className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Currency Pairs
                  </h2>
                  <p className="text-muted-foreground">
                    Trade major, minor and exotic currency pairs with up to 92% payout
                  </p>
                </div>
                {renderAssetGrid(currencyAssets)}
              </TabsContent>

              <TabsContent value="commodities" className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Commodities
                  </h2>
                  <p className="text-muted-foreground">
                    Invest in precious metals, energy and agricultural commodities
                  </p>
                </div>
                {renderAssetGrid(commoditiesAssets)}
              </TabsContent>

              <TabsContent value="stocks" className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Stocks
                  </h2>
                  <p className="text-muted-foreground">
                    Trade stocks from leading global companies with competitive payouts
                  </p>
                </div>
                {renderAssetGrid(stocksAssets)}
              </TabsContent>

              <TabsContent value="crypto" className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Cryptocurrencies
                  </h2>
                  <p className="text-muted-foreground">
                    Access popular cryptocurrencies including Bitcoin, Ethereum and more
                  </p>
                </div>
                {renderAssetGrid(cryptoAssets)}
              </TabsContent>

              <TabsContent value="indices" className="mt-0">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Indices
                  </h2>
                  <p className="text-muted-foreground">
                    Trade global stock market indices with competitive payouts
                  </p>
                </div>
                {renderAssetGrid(indicesAssets)}
              </TabsContent>
            </Tabs>

            {/* Disclaimer */}
            <div className="mt-16 p-6 bg-[#212634] rounded-lg border border-border">
              <p className="text-sm text-muted-foreground">
                The data presented is relevant at the time of publication and may change. Please check the current conditions on the platform.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Asset availability and trading schedules may vary. Some assets may only be available during specific market hours.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
