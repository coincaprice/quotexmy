import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';
import QuickStartContent from './QuickStartContent';

export const metadata: Metadata = genMeta({
  title: 'Quick Start Guide – How to Trade on Quotex | Step-by-Step',
  description: 'Learn how to start trading on Quotex in 6 easy steps: registration, account verification, deposit, trading, earning profit, and withdrawal. Complete beginner guide.',
  keywords: ['quotex quick start', 'how to trade quotex', 'quotex tutorial', 'quotex registration', 'quotex deposit', 'quotex withdrawal guide', 'trading for beginners'],
  path: '/quick-start',
});

export default function QuickStart() {
  return <QuickStartContent />;
}
