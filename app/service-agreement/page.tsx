import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, BookOpen, Shield, Users, AlertTriangle, DollarSign } from "lucide-react";
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Service Agreement - Terms of Service',
  description: 'Read Quotex service agreement and terms of service. Understand your rights and obligations when using our trading platform. Legal terms and conditions for traders.',
  keywords: [
    'service agreement',
    'terms of service',
    'legal terms',
    'user agreement',
    'trading terms',
    'terms and conditions',
  ],
  path: '/service-agreement',
  noIndex: true,
});

export default function ServiceAgreement() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#1c1f2d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#0faf59]/10 flex items-center justify-center">
                <FileText className="w-8 h-8 text-[#0faf59]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
              Service Agreement
            </h1>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              ON SPOT LLC GROUP, registered at: Main Street, P.O. Box 625, Charlestown, St. Kitts and Nevis
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-12">
              {/* Introduction */}
              <div className="bg-[#212634] rounded-lg p-8">
                <p className="text-muted-foreground leading-relaxed">
                  ON SPOT LLC GROUP, hereinafter referred to as "Company", registered at: Main Street, P.O. Box 625, Charlestown, St. Kitts and Nevis, on the one hand, and an individual, hereinafter referred to as "Client", who completed the registration form on the Company's website and in the trading platform, as well as accepted all the conditions of this Service Agreement (hereinafter referred to as "Agreement") and its annexes at the time of registration, collectively referred to as the "Parties", have entered into Agreement as follows:
                </p>
              </div>

              {/* 1. Terms and Definitions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    1. Terms and Definitions
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div className="bg-[#212634] rounded-lg p-6 space-y-4">
                    <p><strong>1.1. Asset (Underlying Asset)</strong> - a financial instrument that is the basis of trading. An instrument can be a stock, derivative (option, futures, etc.), a currency pair, a stock exchange index, a commodity quoted on a stock exchange, etc.</p>
                    
                    <p><strong>1.2. Asset Rate</strong> - the price of an asset. Unilaterally determined by the Company on the basis of information posted by central banks, trading floors, liquidity providers, etc. The asset rate is reflected in the Client's Trading Terminal.</p>
                    
                    <p><strong>1.3. Digital Trading</strong> - a Contract (Binary option), which is used to profit from the price movement of the basic assets underlying such contracts over a certain period of time.</p>
                    
                    <p><strong>1.4. The Company's Website</strong> - an Internet resource located at: https://qxbroker.com/, as well as other Internet resources referred to its in this Agreement and its annexes, including subdomains of the Company, mobile applications, etc., but not limited by this.</p>
                    
                    <p><strong>1.5. Registration on the site</strong> is the Customer acceptance procedure enshrined in this Agreement.</p>
                    
                    <p><strong>1.6. Quote</strong> - the current price of a financial Asset. Information about Quotes is reflected in the Client's Trading Terminal.</p>
                    
                    <p><strong>1.7. Quotes Flow</strong> - a sequence of Quotes displayed in the Trading Terminal.</p>
                    
                    <p><strong>1.8. The Company's Server</strong> - a specialized complex of software and hardware that is used to store, process information about all Client requests for Operations, compliance monitoring with all conditions of such Operations, their limitations, fixation (determination) of the financial result, and providing information about quotes in real time.</p>
                    
                    <p><strong>1.9. Log Record</strong> - record in the database. A Log Record is created by the Company Server and, with an accuracy of a millisecond or an accuracy of a second, records each request and/or order of the Client, as well as the result of processing such requests (orders). The log-record records each appeal of the Client to the Trading terminal and Personal Account. In the event of a dispute between the parties to this Agreement, the data obtained from the Log entries shall prevail in comparison with any other available evidence when considering a conflict situation.</p>
                    
                    <p><strong>1.10. Cookie</strong> - a data set that includes an anonymous and unique identifier that is sent to the Client's mobile phone or to his computer's web browser from the Company's Site (Server). A Cookie is stored on the Client's Device.</p>
                    
                    <p><strong>1.11. Trading Signals</strong> - data on the current state of the market, collected by the Company using various analytical and informational materials. The Company reserves the right to provide such information to all or some Customers or not provide to. Such information is not advisory in nature and does not call on Clients to complete Trade (Operations).</p>
                    
                    <p><strong>1.12. Trading Terminal</strong> - a specialized software complex, with the help of which the Client receives information about the value of quotes on-line, performs Operations (trading and non-trading), and also receives various kinds of information from the Company.</p>
                    
                    <p><strong>1.13. Trading Platform</strong> - an electronic system, consisting of all programs and technologies that display the actions of Clients of the Company and the Company itself in real time.</p>
                    
                    <p><strong>1.14. Trade</strong> - an agreement between the Company and the Client on all material terms, under which the Client pays the Trade amount, and the Company, in turn, undertakes to pay a fixed Income if the agreed conditions of Digital Trading are met by the Parties.</p>
                    
                    <p><strong>1.15. Operation</strong> - Trading and/or Non-Trading Operation.</p>
                    
                    <p><strong>1.16. Trading Operation</strong> - a sequence of actions for the implementation of a transaction between the Company and the Client, including its conclusion and closure.</p>
                    
                    <p><strong>1.17. Non-Trading Operation</strong> - any Operation with a Customer Account (crediting or debiting funds).</p>
                    
                    <p><strong>1.18. Trading Time</strong> - the time the Asset was traded.</p>
                    
                    <p><strong>1.19. Essential Terms of the Operation (Trade)</strong> - the conditions that determine the payment of income to the Client.</p>
                    
                    <p><strong>1.20. The Direction of the Exchange Rate</strong> is an essential condition of the transaction, it can be "Higher" or "Lower".</p>
                  </div>
                  
                  <p className="text-sm italic">...and more definitions as specified in the complete agreement document</p>
                </div>
              </div>

              {/* 2. General Provisions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    2. General Provisions
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p><strong>2.1.</strong> The Agreement is considered as an invitation to an indefinite number of persons to make offers, which does not entail consequences of a contractual and legal nature, i.e. does not bind the Company with the proposal made by it.</p>
                  
                  <p><strong>2.2.</strong> The Agreement is not a public offer.</p>
                  
                  <p><strong>2.3.</strong> The Company has the right at its discretion and without giving any reason to refuse to conclude the Agreement. The company also reserves the right to unilaterally terminate contractual relations and block access to the trading terminal, including with a person who has registered without obligation to explain the reasons for such termination.</p>
                  
                  <p><strong>2.4.</strong> The Company is entitled at its discretion to unilaterally amend and (or) edit the terms of this Agreement, its annexes and (or) materials published on the website and subdomains of the Company's website, without prior notice and matching with the Client.</p>
                  
                  <div className="bg-[#212634] rounded-lg p-6">
                    <p className="mb-3"><strong>2.5.</strong> An integral part of this Agreement are its annexes:</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>2.5.1. Rules of Trading operations</li>
                      <li>2.5.2. Non-Trading Operations Regulations and compliance with KYC and AML</li>
                      <li>2.5.3. Risk Disclosure</li>
                      <li>2.5.4. Other documents posted in the "Legal Information" section of the Company's website</li>
                    </ul>
                  </div>
                  
                  <p><strong>2.6.</strong> It is implied by the Client has accepted all changes in accordance with clauses 2.4, 2.5. present agreement.</p>
                  
                  <p><strong>2.7.</strong> The acceptance of this Agreement is the registration of the Client on the website of the Company or in its Trading Terminal, in the manner and on the terms established by this Agreement and its Appendices.</p>
                </div>
              </div>

              {/* 3. Subject of the Agreement */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    3. Subject of the Agreement
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p><strong>3.1.</strong> The subject of this Agreement is the provision by the Company of Services to the Client through the Trading Platform in accordance with this Agreement and its Appendices.</p>
                  
                  <p><strong>3.2.</strong> This Agreement regulates the conditions for the Parties to complete Trade (Operations), their order and content.</p>
                  
                  <p><strong>3.3.</strong> The Company reserves the right to unilaterally change and (or) edit any conditions of Trades (Operations), establish restrictions on the number of Trades (Operations) performed simultaneously, as well as the number of Trades (Operations) that the Client can perform during the period of time established by the Company, and other restrictions regarding the execution of Trades, at its sole discretion.</p>
                  
                  <p><strong>3.4.</strong> The Company has the right to enlist third parties to cooperate in order to facilitate and (or) improve the quality of the trading platform and (or) the quality of the provision of the Services under this Agreement, while the Company is not responsible for their actions.</p>
                  
                  <p><strong>3.5.</strong> With regard to any other issues and (or) obligations that are not covered by this Agreement, the Company acts at its discretion, guided by business practices and customs in the field of services of this nature.</p>
                  
                  <p><strong>3.6.</strong> From the moment the Client replenishes the Account, each Trade (Operation) made using the Trading Terminal and/or Personal Account becomes the subject of this Agreement.</p>
                </div>
              </div>

              {/* 4. Rights and Obligations of the Parties */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    4. Rights and Obligations of the Parties
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p><strong>4.1.</strong> The Client fully and unconditionally accepts all the conditions of this Agreement and its Appendices, taking into account the provisions referred to in Section 2 of this Agreement, as well as all the conditions posted on the Company's website and its subdomains.</p>
                  
                  <p><strong>4.2.</strong> By accepting the Agreement, the Client confirms being of 18+ age and fully competent, being in his/her right mind, and also having the necessary legal personality to exercise the rights and fulfill obligations under this Agreement and in accordance with its terms.</p>
                  
                  <div className="bg-[#212634] rounded-lg p-6">
                    <p className="mb-3"><strong>4.2.1.</strong> The Client guarantees that he is not a state (municipal) employee or employee of a state (municipal) institution, organization with a state participation in the authorized capital of more than 50%.</p>
                  </div>
                  
                  <div className="bg-[#212634] rounded-lg p-6">
                    <p className="mb-3"><strong>4.2.2.</strong> The Client guarantees that he is not a resident of the United States/US territories and/or the following regions:</p>
                    <p className="text-sm">Afghanistan, Andorra, Australia, Austria, Belarus, Belgium, British Virgin Islands, Bulgaria, Canada, Caribbean Netherlands, China, Croatia, Cuba, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Guam, Guinea Bissau, Haiti, Honduras, Hong Kong SAR, Hungary, Iran, Iraq, Ireland, Israel, Italy, Japan, Latvia, Lebanon, Libya, Liechtenstein, Lithuania, Luxembourg, Mali, Malta, Myanmar, New Zealand, Nicaragua, North Korea, Northern Mariana Islands, Norway, Poland, Portugal, Puerto Rico, Romania, Russian Federation, San Marino, Sierra Leone, Singapore, Slovakia, Slovenia, Somalia, South Sudan, Spain, Sudan, Sweden, Switzerland, Syria, the Democratic Republic of Congo, the Netherlands, UK, US Outlying Islands, US Virgin Islands, Venezuela, Yemen.</p>
                  </div>
                  
                  <p><strong>4.3.</strong> The Client warrants that it is not subject to any law or any other regulatory act that prohibits him from executing this Agreement and/or transactions provided for by this Agreement.</p>
                  
                  <p><strong>4.4.</strong> The Client agrees to independently register on the Company's website, providing complete and accurate information about himself on the issues proposed in the registration form, as well as keep this information up to date.</p>
                  
                  <p><strong>4.5.</strong> The client undertakes to perform all operations in person, on his own behalf and at his own expense.</p>
                  
                  <p><strong>4.6.</strong> When exercising rights and fulfilling duties, the Client shall be guided by the principle of reasonableness and good faith.</p>
                  
                  <p><strong>4.7.</strong> The Client agrees not to take actions, including with other clients of the Company, aimed at causing harm and damage to the Company.</p>
                  
                  <p className="text-sm italic">...additional rights and obligations as specified in sections 4.8 through 4.20 and beyond in the complete agreement document</p>
                </div>
              </div>

              {/* Additional Sections Notice */}
              <div className="bg-[#1c1f2d] rounded-lg p-8 border border-[#0faf59]/20">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-[#0faf59] flex-shrink-0 mt-1" />
                  <div className="space-y-4 text-muted-foreground">
                    <h3 className="text-lg font-semibold text-foreground">Complete Agreement Document</h3>
                    <p>This Service Agreement contains additional sections including:</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Trading Operations and Procedures</li>
                      <li>Non-Trading Operations</li>
                      <li>Deposit and Withdrawal Procedures</li>
                      <li>Risk Disclosure and Warnings</li>
                      <li>Liability and Indemnification</li>
                      <li>Dispute Resolution</li>
                      <li>Termination of Agreement</li>
                      <li>And other important legal provisions</li>
                    </ul>
                    <p className="text-sm">For the complete and legally binding version of this Service Agreement, please contact our support team or refer to the full documentation provided upon registration.</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#212634] rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <DollarSign className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Company Information
                  </h2>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground min-w-24">Company:</span>
                    <span>ON SPOT LLC GROUP</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground min-w-24">Email:</span>
                    <a href="mailto:support@qxbroker.com" className="text-[#0faf59] hover-elevate">support@qxbroker.com</a>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground min-w-24">Address:</span>
                    <span>Main Street, P.O. Box 625, Charlestown, St. Kitts and Nevis</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="font-semibold text-foreground min-w-24">Website:</span>
                    <span>https://qxbroker.com/</span>
                  </p>
                </div>
              </div>

              {/* Legal Notice */}
              <div className="border-t border-border pt-8">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Legal Notice:</strong> By registering on the Company's website and using the Trading Platform, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Service Agreement and its Appendices. This is a legally binding agreement between you and ON SPOT LLC GROUP.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
