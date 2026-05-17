import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileText, Wallet } from "lucide-react";
import { getFAQPageSchema, getWebPageSchema, generateJsonLd } from '@/lib/json-ld';
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'FAQ – Quotex Trading Platform | Common Questions Answered',
  description: 'Find answers to frequently asked questions about Quotex trading platform. Learn about deposits, withdrawals, account verification, trading assets, and more.',
  keywords: ['quotex faq', 'quotex questions', 'trading platform help', 'quotex deposit', 'quotex withdrawal', 'binary options faq'],
  path: '/faq',
});

export default function FAQ() {
  const jsonLd = generateJsonLd([
    getFAQPageSchema(),
    getWebPageSchema(
      'Frequently Asked Questions - Quotex Trading',
      'Find answers to common questions about Quotex trading platform',
      'https://quotex.my/faq/'
    ),
  ]);
  const generalQuestions = [
    {
      question: "What is Quotex?",
      answer: "<p class='text-muted-foreground'>Quotex is a modern trading platform that offers a user-friendly interface for trading various assets including currencies, commodities, indices, and cryptocurrencies. We provide advanced tools and features to help traders make informed decisions.</p>"
    },
    {
      question: "How do I create an account?",
      answer: "<p class='text-muted-foreground'>Creating an account is simple and takes just a few minutes. Click on the 'Sign Up' button, enter your email address, create a secure password, and verify your email. You can then start trading with a demo account or make a deposit to trade with real money.</p>"
    },
    {
      question: "Is there a demo account available?",
      answer: "<p class='text-muted-foreground'>Yes! We offer a free demo account with $10,000 in virtual funds. This allows you to practice trading strategies, learn the platform features, and gain confidence before trading with real money. The demo account has all the features of a live account.</p>"
    },
    {
      question: "What assets can I trade?",
      answer: "<p class='text-muted-foreground'>You can trade a wide variety of assets including major currency pairs (forex), commodities like gold and oil, stock indices, and popular cryptocurrencies such as Bitcoin and Ethereum. We regularly update our asset list to provide more trading opportunities.</p>"
    },
    {
      question: "What are the trading hours?",
      answer: "<p class='text-muted-foreground'>Our platform is available 24/7, but trading hours vary by asset type. Forex markets are available 24/5 (Monday to Friday), while cryptocurrency markets are available 24/7. Commodity and index trading hours follow their respective market schedules.</p>"
    },
    {
      question: "How do I verify my account?",
      answer: "<p class='text-muted-foreground'>To verify your account, go to your profile settings and upload the required documents: a government-issued ID (passport, driver's license, or national ID card) and proof of address (utility bill or bank statement not older than 3 months). Verification typically takes 24-48 hours.</p>"
    }
  ];

  const financialQuestions = [
    {
      question: "What is the minimum deposit?",
      answer: "<p class='text-muted-foreground'>The minimum deposit amount is $10, making it accessible for traders of all levels. We support multiple payment methods including credit/debit cards, bank transfers, e-wallets, and cryptocurrencies for your convenience.</p>"
    },
    {
      question: "What payment methods do you accept?",
      answer: "<p class='text-muted-foreground'>We accept various payment methods including Visa and Mastercard credit/debit cards, bank wire transfers, popular e-wallets (Skrill, Neteller, Perfect Money), and cryptocurrencies (Bitcoin, Ethereum, USDT). Payment options may vary by region.</p>"
    },
    {
      question: "How long do withdrawals take?",
      answer: "<p class='text-muted-foreground'>Withdrawal processing times vary by payment method. E-wallet withdrawals are typically processed within 24 hours, credit/debit card withdrawals take 3-5 business days, and bank transfers may take 5-7 business days. All withdrawals are subject to account verification.</p>"
    },
    {
      question: "Are there any fees for deposits or withdrawals?",
      answer: "<p class='text-muted-foreground'>We do not charge fees for deposits. For withdrawals, the first withdrawal of each month is free, and subsequent withdrawals may incur a small processing fee depending on the payment method. Check our fee schedule for detailed information.</p>"
    },
    {
      question: "What is the maximum withdrawal amount?",
      answer: "<p class='text-muted-foreground'>There is no maximum limit on withdrawal amounts. However, large withdrawals may require additional verification for security purposes. You can withdraw your entire balance at any time, subject to our terms and conditions.</p>"
    },
    {
      question: "How is my money protected?",
      answer: "<p class='text-muted-foreground'>We take security seriously. All client funds are held in segregated accounts separate from company operating funds. We use advanced encryption technology to protect your financial information and comply with international financial regulations to ensure your money is safe.</p>"
    }
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
        <section className="py-16 md:py-24 bg-[#1c1f2d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quotex FAQ – Frequently Asked Questions
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Find answers to common questions about our platform and services.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {/* General Questions */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#0faf59]/10">
                  <FileText className="w-6 h-6 text-[#0faf59]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">General Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {generalQuestions.map((item, index) => (
                  <AccordionItem 
                    key={`general-${index}`} 
                    value={`general-${index}`}
                    className="bg-[#212634] border-none rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger 
                      className="px-6 py-4 hover:bg-[#2a2f3f] text-left font-semibold text-foreground"
                      data-testid={`accordion-general-${index}`}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div dangerouslySetInnerHTML={{__html: item.answer}} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Financial Questions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#0faf59]/10">
                  <Wallet className="w-6 h-6 text-[#0faf59]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">Financial Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {financialQuestions.map((item, index) => (
                  <AccordionItem 
                    key={`financial-${index}`} 
                    value={`financial-${index}`}
                    className="bg-[#212634] border-none rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger 
                      className="px-6 py-4 hover:bg-[#2a2f3f] text-left font-semibold text-foreground"
                      data-testid={`accordion-financial-${index}`}
                    >
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div dangerouslySetInnerHTML={{__html: item.answer}} />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      </div>
    </>
  );
}
