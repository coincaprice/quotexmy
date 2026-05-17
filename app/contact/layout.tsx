import { Metadata } from 'next';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Contact Quotex – Get 24/7 Support',
  description: 'Contact Quotex support team 24/7. Get help with your trading account, technical issues, deposits, and withdrawals. Email, phone, and live chat support available.',
  keywords: [
    'quotex support',
    'trading support',
    'customer service',
    'contact quotex',
    '24/7 support',
    'trading help',
    'account assistance',
  ],
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
