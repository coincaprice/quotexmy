import Image from "next/image";
import { AFFILIATE_LINKS } from "@/config/affiliate";

export default function MobileApp() {
  return (
    <section className="py-16 md:py-24 bg-[#1c1f2d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              Trade Anywhere, Anytime with Our Mobile App
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Download our mobile trading app and trade on the go. Access all platform features, manage your portfolio, and never miss a trading opportunity.
            </p>

            <div className="flex flex-row flex-wrap gap-4 pt-4">
              {/* Google Play Badge */}
              <a 
                href={AFFILIATE_LINKS.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate transition-all duration-300"
                data-testid="link-google-play"
              >
                <Image
                  src="/badgee/googleplay.svg"
                  alt="Get it on Google Play"
                  width={160}
                  height={56}
                  style={{ height: "3.5rem", width: "auto", maxWidth: "100%" }}
                />
              </a>

              {/* App Store Badge */}
              <a 
                href={AFFILIATE_LINKS.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-elevate transition-all duration-300"
                data-testid="link-app-store"
              >
                <Image
                  src="/badgee/appstore.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={56}
                  style={{ height: "3.5rem", width: "auto", maxWidth: "100%" }}
                />
              </a>
            </div>
          </div>

          {/* Right: Mobile App Mockup */}
          <div className="relative flex justify-center">
            <div className="relative max-w-sm hover-elevate transition-all duration-300">
              <Image
                src="/img/mobile.webp"
                alt="Mobile Trading App"
                width={924}
                height={1032}
                className="w-full h-auto drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-testid="img-mobile-app"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
