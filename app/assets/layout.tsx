import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Quotex Trading Assets – Currencies, Commodities, Stocks & Crypto',
  description: 'Trade 100+ assets on Quotex including forex currency pairs, commodities like gold and oil, stock indices, and cryptocurrencies. High payouts up to 92%. View all available trading instruments.',
  keywords: [
    'quotex',
    'quotex assets',
    'quotex trading',
    'trading assets',
    'forex pairs',
    'currency trading',
    'commodity trading',
    'cryptocurrency trading',
    'stock indices',
    'gold trading',
    'oil trading',
    'bitcoin trading',
  ],
  path: '/assets',
});

export default function AssetsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
