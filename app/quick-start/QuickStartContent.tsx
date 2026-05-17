"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AFFILIATE_LINKS } from "@/config/affiliate";

const registrationImg = "/img/registration.webp";
const verificationImg = "/img/verification.webp";
const depositImg = "/img/deposit.webp";
const tradingImg = "/img/trading.webp";
const profitImg = "/img/profit.webp";
const withdrawalImg = "/img/withdrawal.webp";
const chatImg = "/img/chat.webp";

export default function QuickStartContent() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const toggleStep = (stepNumber: number) => {
    setExpandedStep(expandedStep === stepNumber ? null : stepNumber);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#1c1f2d] via-[#1c1f2d] to-[#0faf59]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Quotex Quick Start Guide
              </h1>
              <div className="flex justify-center">
                <a
                  href={AFFILIATE_LINKS.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-demo"
                >
                  <Button size="lg" className="bg-[#0faf59] hover:bg-[#0faf59]/90 text-white">
                    Try Demo Account
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              How to Get Started with Quotex
            </h2>
          </div>
        </section>

        {/* Steps Section */}
        <section className="pb-16 md:pb-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="space-y-8">

              {/* Step 1: Registration */}
              <div className="bg-[#212634] rounded-lg overflow-hidden hover-elevate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 p-8 md:p-12">
                    <Image
                      src={registrationImg}
                      alt="Registration illustration"
                      width={597}
                      height={418}
                      className="w-full h-auto rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-registration"
                    />
                  </div>
                  <div className="order-1 md:order-2 p-8 md:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0faf59] flex items-center justify-center text-white text-xl font-bold">1</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Registration</h3>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleStep(1)} data-testid="toggle-step-1">
                        {expandedStep === 1 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Create your Quotex account in just a few clicks using email or social media login.
                    </p>
                    {expandedStep === 1 && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4">
                        <p className="text-muted-foreground">Registration on Quotex is quick and simple. You can sign up using your email address or through social media accounts like Google or Facebook.</p>
                        <p className="text-muted-foreground">Please note that you must be at least 18 years old to create an account and start trading.</p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {["Visit the Quotex website and click on Sign Up", "Enter your email address and create a strong password", "Agree to the terms and conditions", "Verify your email address by clicking the link sent to your inbox"].map((step, i) => (
                            <div key={i} className="bg-[#1c1f2d] rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#0faf59]/20 flex items-center justify-center text-[#0faf59] font-bold">{i + 1}</div>
                                <p className="text-sm text-foreground">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-learn-more-1">Learn More</Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 2: Verification */}
              <div className="bg-[#212634] rounded-lg overflow-hidden hover-elevate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0faf59] flex items-center justify-center text-white text-xl font-bold">2</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Verification</h3>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleStep(2)} data-testid="toggle-step-2">
                        {expandedStep === 2 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Verify your account to ensure secure trading and enable all platform features.
                    </p>
                    {expandedStep === 2 && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4">
                        <p className="text-muted-foreground">Account verification is an important step to ensure the security of your funds and comply with international financial regulations.</p>
                        <p className="text-muted-foreground">The verification process typically takes 1-2 business days. You&apos;ll need to provide identity documents such as a passport or national ID card.</p>
                        <p className="text-muted-foreground">Once verified, you&apos;ll have access to all withdrawal options and higher trading limits.</p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {["Go to your account settings and select Verification", "Upload a clear photo of your ID document", "Provide proof of address (utility bill or bank statement)", "Wait for approval from our verification team"].map((step, i) => (
                            <div key={i} className="bg-[#1c1f2d] rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#0faf59]/20 flex items-center justify-center text-[#0faf59] font-bold">{i + 1}</div>
                                <p className="text-sm text-foreground">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-learn-more-2">Learn More</Button>
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-12">
                    <Image
                      src={verificationImg}
                      alt="Verification illustration"
                      width={597}
                      height={418}
                      className="w-full h-auto rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-verification"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Deposit */}
              <div className="bg-[#212634] rounded-lg overflow-hidden hover-elevate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 p-8 md:p-12">
                    <Image
                      src={depositImg}
                      alt="Deposit illustration"
                      width={597}
                      height={418}
                      className="w-full h-auto rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-deposit"
                    />
                  </div>
                  <div className="order-1 md:order-2 p-8 md:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0faf59] flex items-center justify-center text-white text-xl font-bold">3</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Deposit</h3>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleStep(3)} data-testid="toggle-step-3">
                        {expandedStep === 3 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Fund your account with as little as $10 using various payment methods.
                    </p>
                    {expandedStep === 3 && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4">
                        <p className="text-muted-foreground">Quotex supports multiple payment methods including credit/debit cards, e-wallets, bank transfers, and cryptocurrencies for your convenience.</p>
                        <p className="text-muted-foreground">The minimum deposit is just $10, making it accessible for traders of all levels. Deposits are usually processed instantly.</p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {["Click on the Deposit button in your account", "Choose your preferred payment method", "Enter the deposit amount (minimum $10)", "Complete the payment and start trading"].map((step, i) => (
                            <div key={i} className="bg-[#1c1f2d] rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#0faf59]/20 flex items-center justify-center text-[#0faf59] font-bold">{i + 1}</div>
                                <p className="text-sm text-foreground">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-learn-more-3">Learn More</Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 4: Trading */}
              <div className="bg-[#212634] rounded-lg overflow-hidden hover-elevate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0faf59] flex items-center justify-center text-white text-xl font-bold">4</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Trading</h3>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleStep(4)} data-testid="toggle-step-4">
                        {expandedStep === 4 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Start trading with our user-friendly platform featuring integrated signals and indicators.
                    </p>
                    {expandedStep === 4 && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4">
                        <p className="text-muted-foreground">Our platform offers a wide range of trading tools and features to help you make informed decisions including technical indicators, real-time charts, and trading signals.</p>
                        <p className="text-muted-foreground">You can trade various assets including currencies, stocks, commodities, and cryptocurrencies with payouts up to 96%.</p>
                        <p className="text-muted-foreground">Practice risk management and never invest more than you can afford to lose.</p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {["Choose an asset from the available list", "Analyze the market using our charts and indicators", "Set your investment amount and expiration time", "Predict price direction and place your trade"].map((step, i) => (
                            <div key={i} className="bg-[#1c1f2d] rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#0faf59]/20 flex items-center justify-center text-[#0faf59] font-bold">{i + 1}</div>
                                <p className="text-sm text-foreground">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-learn-more-4">Learn More</Button>
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-12">
                    <Image
                      src={tradingImg}
                      alt="Trading illustration"
                      width={597}
                      height={418}
                      className="w-full h-auto rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-trading"
                    />
                  </div>
                </div>
              </div>

              {/* Step 5: Profit */}
              <div className="bg-[#212634] rounded-lg overflow-hidden hover-elevate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1 p-8 md:p-12">
                    <Image
                      src={profitImg}
                      alt="Profit illustration"
                      width={632}
                      height={395}
                      className="w-full h-auto rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-profit"
                    />
                  </div>
                  <div className="order-1 md:order-2 p-8 md:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0faf59] flex items-center justify-center text-white text-xl font-bold">5</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Profit</h3>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleStep(5)} data-testid="toggle-step-5">
                        {expandedStep === 5 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Earn up to 96% profit on successful trades, credited instantly to your account.
                    </p>
                    {expandedStep === 5 && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4">
                        <p className="text-muted-foreground">When your prediction is correct, you earn a profit based on the payout percentage of the asset you traded. Profits are calculated instantly and added to your account balance.</p>
                        <p className="text-muted-foreground">For example, if you invest $100 with a 92% payout and your prediction is correct, you&apos;ll receive $192 - your initial investment plus $92 profit.</p>
                        <p className="text-muted-foreground">Track all your trades, profits, and losses in your trading history for better analysis and improvement.</p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {["Wait for your trade to expire", "Check if your prediction was correct", "Receive instant profit if prediction is correct", "View profit in your account balance immediately"].map((step, i) => (
                            <div key={i} className="bg-[#1c1f2d] rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#0faf59]/20 flex items-center justify-center text-[#0faf59] font-bold">{i + 1}</div>
                                <p className="text-sm text-foreground">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-learn-more-5">Learn More</Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Step 6: Withdrawal */}
              <div className="bg-[#212634] rounded-lg overflow-hidden hover-elevate">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="p-8 md:p-12">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#0faf59] flex items-center justify-center text-white text-xl font-bold">6</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Withdrawal</h3>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => toggleStep(6)} data-testid="toggle-step-6">
                        {expandedStep === 6 ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                      </Button>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      Withdraw your profits anytime using various payment methods with fast processing.
                    </p>
                    {expandedStep === 6 && (
                      <div className="mt-6 pt-6 border-t border-border space-y-4">
                        <p className="text-muted-foreground">Quotex offers fast and secure withdrawals through multiple payment methods. Most withdrawals are processed within 1-5 business days depending on your chosen method.</p>
                        <p className="text-muted-foreground">There are no hidden fees for withdrawals. You can withdraw your profits at any time, and verified accounts enjoy faster processing times.</p>
                        <div className="grid grid-cols-1 gap-4 mt-6">
                          {["Click on Withdrawal in your account", "Select your preferred withdrawal method", "Enter withdrawal amount and confirm", "Receive your funds within 1-5 business days"].map((step, i) => (
                            <div key={i} className="bg-[#1c1f2d] rounded-lg p-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-[#0faf59]/20 flex items-center justify-center text-[#0faf59] font-bold">{i + 1}</div>
                                <p className="text-sm text-foreground">{step}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                        <Button className="mt-6 bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-learn-more-6">Learn More</Button>
                      </div>
                    )}
                  </div>
                  <div className="p-8 md:p-12">
                    <Image
                      src={withdrawalImg}
                      alt="Withdrawal illustration"
                      width={597}
                      height={418}
                      className="w-full h-auto rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      data-testid="img-withdrawal"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Chat Section */}
        <section className="py-16 md:py-24 bg-[#1c1f2d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#212634] rounded-lg p-8 md:p-12 hover-elevate">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0faf59]/10 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-[#0faf59]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">24/7 Support</h2>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Our dedicated support team is available around the clock to assist you with any questions or issues. Get instant help through our live chat.
                  </p>
                  <Button size="lg" className="bg-[#0faf59] hover:bg-[#0faf59]/90 text-white" data-testid="button-open-chat">
                    Open Live Chat
                  </Button>
                </div>
                <div className="flex justify-center p-8">
                  <Image
                    src={chatImg}
                    alt="Chat illustration"
                    width={1280}
                    height={896}
                    className="w-full h-auto max-w-md rounded-lg"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    data-testid="img-chat"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Warning */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-[#212634] rounded-lg p-6 border-l-4 border-[#0faf59]">
              <h3 className="text-lg font-semibold text-foreground mb-3">Risk Warning</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Trading involves risk and may result in the loss of your invested capital. You should only trade with money you can afford to lose. Past performance is not indicative of future results. Please ensure you fully understand the risks involved and seek independent advice if necessary.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
