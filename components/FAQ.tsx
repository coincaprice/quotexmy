"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is Quotex?",
      answer: "Quotex is an online trading platform that allows you to trade various financial instruments including forex, commodities, stocks, and cryptocurrencies. Our platform offers advanced trading tools, real-time market data, and a user-friendly interface designed for both beginners and experienced traders.",
    },
    {
      question: "How do I start trading?",
      answer: "To start trading on Quotex, first create an account by clicking the 'Sign Up' button. Then verify your email, make a deposit using one of our supported payment methods, and you're ready to trade. We recommend starting with a demo account to familiarize yourself with the platform before trading with real money.",
    },
    {
      question: "What is the minimum deposit?",
      answer: "The minimum deposit amount on Quotex is $10. This low entry threshold makes it accessible for traders of all levels. You can deposit funds using various payment methods including credit/debit cards, e-wallets, and bank transfers.",
    },
    {
      question: "Is there a demo account available?",
      answer: "Yes, Quotex offers a free demo account with $10,000 in virtual funds. The demo account allows you to practice trading strategies, test the platform features, and learn how the markets work without risking real money. You can switch between demo and live accounts at any time.",
    },
    {
      question: "How long does it take to withdraw funds?",
      answer: "Withdrawal processing times vary depending on the payment method. E-wallet withdrawals are typically processed within 1-3 business days, while bank transfers may take 3-5 business days. We strive to process all withdrawal requests as quickly as possible.",
    },
    {
      question: "What support is available?",
      answer: "Quotex offers 24/7 customer support through live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues you may encounter. We also provide extensive educational resources, video tutorials, and market analysis to help you succeed.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 hover-elevate transition-all"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
