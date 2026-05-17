"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
              <Image
                src="/qxlogo.svg"
                alt="QUOTEX"
                width={0}
                height={0}
                style={{ height: "2rem", width: "auto" }}
                unoptimized
              />
              <span className="hidden md:inline text-xl font-bold text-foreground">
                QUOTEX
              </span>
            </Link>
          </div>
            
          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link 
              href="/quick-start"
              className={`text-sm font-medium transition-colors hover:text-[#0faf59] ${
                isActive('/quick-start') ? 'text-[#0faf59]' : 'text-muted-foreground'
              }`}
              data-testid="link-quick-start"
            >
              Quick Start
            </Link>
            <Link 
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-[#0faf59] ${
                isActive('/about') ? 'text-[#0faf59]' : 'text-muted-foreground'
              }`}
              data-testid="link-about"
            >
              About
            </Link>
            <Link 
              href="/faq"
              className={`text-sm font-medium transition-colors hover:text-[#0faf59] ${
                isActive('/faq') ? 'text-[#0faf59]' : 'text-muted-foreground'
              }`}
              data-testid="link-faq"
            >
              FAQ
            </Link>
            <Link 
              href="/assets"
              className={`text-sm font-medium transition-colors hover:text-[#0faf59] ${
                isActive('/assets') ? 'text-[#0faf59]' : 'text-muted-foreground'
              }`}
              data-testid="link-assets"
            >
              Assets
            </Link>
          </nav>

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="ghost"
              className="bg-[#2b3040] text-white hover:bg-[#2b3040]/90"
              data-testid="button-login"
              onClick={() => window.open(AFFILIATE_LINKS.login, '_blank')}
            >
              Log in
            </Button>
            <Button
              data-testid="button-signup"
              onClick={() => window.open(AFFILIATE_LINKS.signup, '_blank')}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button and actions */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="bg-[#2b3040] text-white hover:bg-[#2b3040]/90"
              data-testid="button-mobile-header-login"
              onClick={() => window.open(AFFILIATE_LINKS.login, '_blank')}
            >
              Log in
            </Button>
            <Button
              size="sm"
              className="bg-[#0faf59] hover:bg-[#0faf59]/90 text-white font-semibold"
              data-testid="button-mobile-header-signup"
              onClick={() => window.open(AFFILIATE_LINKS.signup, '_blank')}
            >
              Sign Up
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link href="/quick-start" className="block" data-testid="link-mobile-quick-start">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Quick Start
              </Button>
            </Link>
            <Link href="/about" className="block" data-testid="link-mobile-about">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Button>
            </Link>
            <Link href="/faq" className="block" data-testid="link-mobile-faq">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Button>
            </Link>
            <Link href="/assets" className="block" data-testid="link-mobile-assets">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setMobileMenuOpen(false)}
              >
                Assets
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
