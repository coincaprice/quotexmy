import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Quotex Quick Start – Begin Trading in Simple Steps',
  description: 'Get started with Quotex trading in minutes. Step-by-step guide to create your account, make your first deposit, and start trading. Perfect for beginners with free demo account available.',
  keywords: [
    'trading guide',
    'how to start trading',
    'trading tutorial',
    'beginner guide',
    'trading for beginners',
    'get started trading',
    'trading steps',
    'quotex tutorial',
  ],
  path: '/quick-start',
});

export default function QuickStartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
