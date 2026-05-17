import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import { Providers } from './providers';
import { defaultMetadata } from '@/lib/seo';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Favicon dan Fonts */}
        <link rel="icon" type="image/png" href="/fav-qx.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/fav-qx.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/fav-qx.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav-qx.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/fav-qx.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/fav-qx.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />

        {/* Statcounter Code for quotex.my */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var sc_project=13230583; var sc_invisible=1; var sc_security="f1b93a5a";`,
          }}
        />
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        />
        <noscript>
          <div className="statcounter">
            <a title="hit counter" href="https://statcounter.com/" target="_blank" rel="noreferrer">
              <img
                className="statcounter"
                src="https://c.statcounter.com/13230583/0/f1b93a5a/1/"
                alt="hit counter"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </noscript>
        {/* End of Statcounter Code */}
      </body>
    </html>
  );
}
