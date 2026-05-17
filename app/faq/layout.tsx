import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Quotex FAQ – Frequently Asked Questions & Trading Guide',
  description: 'Find answers to common questions about Quotex trading platform. Learn about account creation, deposits, withdrawals, trading strategies, demo accounts, and platform features.',
  keywords: [
    'quotex',
    'quotex faq',
    'quotex questions',
    'trading questions',
    'how to trade',
    'account questions',
    'deposit faq',
    'withdrawal faq',
    'trading guide',
    'platform help',
  ],
  path: '/faq',
});

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
