import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'About Quotex – Leading Online Trading Platform',
  description: 'Learn about Quotex - a trusted trading platform serving 2M+ active traders in 120+ countries. Our mission is to provide accessible, transparent, and innovative trading solutions with 24/7 support.',
  keywords: [
    'about quotex',
    'trading platform',
    'company information',
    'quotex broker',
    'online trading company',
    'trusted broker',
    'trading history',
  ],
  path: '/about',
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
