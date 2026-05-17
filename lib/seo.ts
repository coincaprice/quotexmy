import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const SITE_NAME = 'Quotex';
const SITE_URL = 'https://quotex.my';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og/og-qtx.png`;

export function generateMetadata({
  title,
  description,
  keywords = [],
  path = '',
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: SEOConfig): Metadata {
  // Avoid duplicate site name if already present in title
  const fullTitle = 
    title === SITE_NAME || title.includes(SITE_NAME) 
      ? title 
      : `${title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${path}`;

  const defaultKeywords = [
    'quotex',
    'trading platform',
    'binary options',
    'digital trading',
    'forex trading',
    'cryptocurrency trading',
    'online trading',
    'trading signals',
  ];

  const allKeywords = [...new Set([...keywords, ...defaultKeywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords.join(', '),
    authors: [{ name: 'Quotex' }],
    creator: 'Quotex',
    publisher: 'Quotex',
    applicationName: 'Quotex Trading Platform',
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title: fullTitle,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@quotex',
      site: '@quotex',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: '4DTgi6F8RoykESVa8FVs47LMuPJ7wvaawym77QEWQp8',
      yandex: 'your-yandex-verification-code',
      other: {
        'msvalidate.01': '4F37DBE036B13EABA7F7C7625B77C3A7',
      },
    },
  };
}

export const defaultMetadata: Metadata = generateMetadata({
  title: SITE_NAME,
  description:
    'Quotex - Advanced trading platform for binary options, forex, and cryptocurrency. Start trading with a free demo account. Fast withdrawals, 24/7 support, and professional trading tools.',
  keywords: [
    'quotex platform',
    'binary options trading',
    'forex broker',
    'crypto trading',
    'demo account',
    'online investment',
  ],
});
