import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone } from "lucide-react";
import { getOrganizationSchema, getWebPageSchema, generateJsonLd } from '@/lib/json-ld';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata = genMeta({
  title: 'Quotex Contact – Get in Touch with Our Support Team',
  description: 'Contact Quotex support team 24/7. Reach us by email, phone, or visit our office. We are always ready to help with your trading questions.',
  path: '/contact',
});

export default function Contact() {
  const jsonLd = generateJsonLd([
    getOrganizationSchema(),
    getWebPageSchema(
      'Contact Quotex Support - 24/7 Trading Help',
      'Contact Quotex support team for trading assistance',
      'https://quotex.my/contact/'
    ),
  ]);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email anytime",
      content: "support@quotex.io",
      link: "mailto:support@quotex.io",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Available 24/7 for you",
      content: "+1 (800) 123-4567",
      link: "tel:+18001234567",
    },
    {
      icon: MapPin,
      title: "Address",
      description: "Our registered office",
      content: "Main Street, P.O. Box 625, Charlestown, St. Kitts and Nevis",
      link: null,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <div className="min-h-screen flex flex-col bg-background">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 md:py-32 bg-[#1c1f2d] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0faf59]/5 to-transparent" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
              <div className="text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0faf59]/10 border border-[#0faf59]/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-[#0faf59] animate-pulse" />
                  <span className="text-sm font-medium text-[#0faf59]">24/7 Support</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Contact Quotex
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Have questions? Our support team is here around the clock — reach out anytime.
                </p>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="py-20 md:py-28 bg-background">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-[#212634] rounded-2xl p-8 border border-transparent hover:border-[#0faf59]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#0faf59]/5 flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#0faf59]/10 flex items-center justify-center mb-5 group-hover:bg-[#0faf59]/20 transition-colors duration-300">
                    <info.icon className="w-7 h-7 text-[#0faf59]" />
                  </div>

                  <p className="text-xs font-semibold text-[#0faf59] uppercase tracking-widest mb-1">
                    {info.title}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4">
                    {info.description}
                  </p>

                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-foreground font-semibold hover:text-[#0faf59] transition-colors duration-200 text-base break-all"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-foreground font-semibold text-base leading-relaxed">
                      {info.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
