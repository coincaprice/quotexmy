import { Organization, WebPage, FAQPage, BreadcrumbList, Question } from 'schema-dts';

const SITE_URL = 'https://quotex.my';
const SITE_NAME = 'Quotex';

// Organization Schema - Company Information
export function getOrganizationSchema(): Organization {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/qxlogo.svg`,
    },
    description: 'Leading trading platform for binary options, forex, and cryptocurrency trading with 2M+ active traders worldwide.',
    sameAs: [
      'https://twitter.com/quotex',
      'https://facebook.com/quotex',
      'https://instagram.com/quotex',
      'https://youtube.com/quotex',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      availableLanguage: ['English'],
      areaServed: 'Worldwide',
    },
  };
}

// WebSite Schema with Search Action
export function getWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: 'Professional trading platform for binary options, forex, and cryptocurrency',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}

// WebPage Schema - Generic Page
export function getWebPageSchema(
  title: string,
  description: string,
  url: string,
  breadcrumbs?: BreadcrumbList
): WebPage {
  return {
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url,
    name: title,
    description,
    isPartOf: {
      '@id': `${SITE_URL}/#website`,
    },
    about: {
      '@id': `${SITE_URL}/#organization`,
    },
    ...(breadcrumbs && { breadcrumb: breadcrumbs }),
  };
}

// FAQPage Schema - For FAQ Page
export function getFAQPageSchema(): FAQPage {
  const faqItems: Question[] = [
    {
      '@type': 'Question',
      name: 'What is Quotex?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quotex is a professional trading platform for binary options, forex, and cryptocurrency trading. We offer a free $10,000 demo account, 24/7 support, fast withdrawals, and professional trading tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I create an account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Creating an account is simple: 1) Click "Sign Up" button, 2) Enter your email and create a password, 3) Verify your email address, 4) Start trading with a free demo account or make your first deposit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the minimum deposit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The minimum deposit on Quotex is $10. We accept various payment methods including credit cards, e-wallets, and cryptocurrency.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast are withdrawals?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Withdrawals are processed within 1-5 business days depending on your payment method. Most e-wallet withdrawals are processed within 24 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a demo account?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! We offer a free $10,000 demo account where you can practice trading without risking real money. The demo account has all the features of a live account.',
      },
    },
    {
      '@type': 'Question',
      name: 'What assets can I trade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quotex offers 100+ trading assets including forex currency pairs, commodities (gold, oil, silver), stocks (Apple, Google, Tesla, Amazon), cryptocurrency (Bitcoin, Ethereum), and indices.',
      },
    },
  ];

  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/faq/#faqpage`,
    mainEntity: faqItems,
  };
}

// Breadcrumb Schema
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbList {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Service/Product Schema for Trading Platform
export function getTradingServiceSchema() {
  return {
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: 'Quotex Trading Platform',
    description: 'Professional trading platform for binary options, forex, and cryptocurrency trading',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    serviceType: 'Trading Platform',
    areaServed: 'Worldwide',
    availableChannel: {
      '@type': 'ServiceChannel',
      availableLanguage: 'English',
      serviceUrl: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      price: '10',
      priceCurrency: 'USD',
      description: 'Minimum deposit to start trading',
      availability: 'https://schema.org/InStock',
    },
  };
}

// Helper to generate JSON-LD script tag content
export function generateJsonLd(schema: object | object[]): string {
  const schemas = Array.isArray(schema) ? schema : [schema];
  
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': schemas,
  });
}
