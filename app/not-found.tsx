"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Home, Search, FileQuestion, Mail, BookOpen, TrendingUp } from 'lucide-react';

export default function NotFound() {
  const pathname = usePathname();

  const helpfulLinks = [
    { href: '/', icon: Home, label: 'Home', testId: 'link-home' },
    { href: '/about', icon: FileQuestion, label: 'About', testId: 'link-about' },
    { href: '/assets', icon: TrendingUp, label: 'Assets', testId: 'link-assets' },
    { href: '/faq', icon: Search, label: 'FAQ', testId: 'link-faq' },
    { href: '/contact', icon: Mail, label: 'Contact', testId: 'link-contact' },
    { href: '/quick-start', icon: BookOpen, label: 'Quick Start', testId: 'link-quickstart' },
  ];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4" data-testid="text-404-code">
            404
          </h1>
          <h2 className="text-3xl font-bold text-foreground mb-4" data-testid="text-404-title">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto" data-testid="text-404-description">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="min-w-[200px]" asChild data-testid="button-go-home">
            <Link href="/">
              <Home className="mr-2 h-5 w-5" />
              Go to Home
            </Link>
          </Button>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6" data-testid="text-helpful-links">
            Helpful Links
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {helpfulLinks.map((link) => (
              <Button
                key={link.href}
                variant="outline"
                className="w-full hover-elevate"
                asChild
                data-testid={link.testId}
              >
                <Link href={link.href}>
                  <link.icon className="h-5 w-5 mr-2" />
                  <span>{link.label}</span>
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 text-sm text-muted-foreground">
          <p>Current path: <code className="bg-muted px-2 py-1 rounded">{pathname}</code></p>
        </div>
      </div>
    </div>
  );
}
