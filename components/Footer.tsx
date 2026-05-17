import { Facebook, Instagram, Send } from "lucide-react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { AFFILIATE_LINKS } from "@/config/affiliate";

const socialMedia = [
  { icon: Facebook, label: "Facebook", followers: "10k+", href: "https://www.facebook.com/quotexio/" },
  { icon: Instagram, label: "Instagram", followers: "76k+", href: "https://www.instagram.com/quotex_io/" },
  { icon: Send, label: "Telegram", followers: "90k+", href: "https://t.me/quotex_official" },
];

export default function Footer() {
  return (
    <footer className="bg-[#151825] text-muted-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Column 1: Logo */}
          <div>
            <div className="text-2xl font-bold text-foreground">
              QUOTEX
            </div>
          </div>

          {/* Column 2: FAQ */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-1">
              FAQ <span className="text-xs">›</span>
            </h3>
            <a
              href="/faq#general-questions"
              className="block text-sm hover-elevate"
              data-testid="link-general-questions"
            >
              General Questions
            </a>
            <a
              href="/faq#financial-questions"
              className="block text-sm hover-elevate"
              data-testid="link-financial-questions"
            >
              Financial Questions
            </a>
          </div>

          {/* Column 3: About us */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold mb-4 flex items-center gap-1">
              About <span className="text-xs">›</span>
            </h3>
            <Link
              href="/about"
              className="block text-sm hover-elevate"
              data-testid="link-about-us"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-sm hover-elevate"
              data-testid="link-contacts"
            >
              Contacts
            </Link>
          </div>

          {/* Column 4: More */}
          <div className="space-y-3">
            <h3 className="text-foreground font-semibold mb-4">More</h3>
            <a
              href={AFFILIATE_LINKS.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover-elevate flex items-center gap-1"
              data-testid="link-demo-account"
            >
              Demo Account
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={AFFILIATE_LINKS.signup}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm hover-elevate flex items-center gap-1"
              data-testid="link-affiliate-program"
            >
              Affiliate Program
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Column 5: Social Media */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Social</h3>
            <div className="flex flex-col gap-2">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-between gap-3 bg-white/5 hover:bg-white/10 px-4 py-3 rounded-md transition-all duration-300"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5 text-[#0faf59]" />
                  <span className="text-sm font-medium text-[#0faf59]">{social.followers}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Legal Text */}
      <div className="bg-[#151825]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="space-y-4 text-xs opacity-70">
            <p>
              <strong className="opacity-90">Awesomo Limited</strong>. Address: Suite 305, Griffith Corporate Centre, Kingstown, Saint Vincent and the Grenadines.
            </p>
            <p>
              The use of the platform and services offered by Awesomo Limited is not allowed in certain countries such as the USA, Canada, Hong Kong, or for persons under 18 years of age.
            </p>
            <p>
              <strong className="opacity-90">Risk Warning:</strong> Trading involves a high level of risk and may not be suitable for all investors. Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. You should be aware of all the risks associated with trading and seek advice from an independent financial advisor if you have any doubts.
            </p>
            <p>
              The domain quotex.com is owned by Awesomo Limited and has been in use since March 13, 2020.
            </p>
            <p className="opacity-90">
              © 2020-{new Date().getFullYear()} <a href="#" className="hover-elevate">QUOTEX</a>. All rights reserved | <Link href="/privacy-policy" className="hover-elevate" data-testid="link-privacy-policy">Privacy Policy</Link> | <Link href="/service-agreement" className="hover-elevate" data-testid="link-service-agreement">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
