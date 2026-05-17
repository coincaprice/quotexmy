import { Metadata } from 'next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Users, FileText, Cookie, Megaphone, Building } from "lucide-react";
import { generateMetadata as genMeta } from '@/lib/seo';

export const metadata: Metadata = genMeta({
  title: 'Privacy Policy - Data Protection & Security',
  description: 'Read Quotex privacy policy. Learn how we collect, use, and protect your personal data. GDPR compliant. Your privacy and security are our top priorities.',
  keywords: [
    'privacy policy',
    'data protection',
    'gdpr compliance',
    'user privacy',
    'data security',
    'personal information',
  ],
  path: '/privacy-policy',
  noIndex: true,
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-[#1c1f2d]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#0faf59]/10 flex items-center justify-center">
                <Shield className="w-8 h-8 text-[#0faf59]" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground text-center">
              ON SPOT LLC GROUP
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="space-y-12">
              {/* 1. General Provisions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    1. General Provisions
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>1.1.</strong> The international commercial company ON SPOT LLC GROUP understands that the Client (hereinafter - you, the Client) wishes to keep his personal data, as well as all information provided to the Company (hereinafter - to us, the Company) confidential.
                  </p>
                  <p>
                    <strong>1.2.</strong> The company creates all conditions so that the processing of your information is as safe as possible.
                  </p>
                  <p>
                    <strong>1.3.</strong> The company makes every effort to ensure the privacy of its customers.
                  </p>
                  <p>
                    <strong>1.4.</strong> This Privacy Policy (hereinafter - the Policy) reflects the procedure for the collection, processing, use and storage of confidential information of the Client in the process of using the Company's website, applications, and other platforms on the Internet to receive the Company's Services.
                  </p>
                  <p>
                    <strong>1.5.</strong> It is hereby determined that the Client's consent to the terms of the Service Agreement is at the same time an agreement with all the provisions of the Policy.
                  </p>
                  <p>
                    <strong>1.6.</strong> It is believed that the Client has read the Policy, agrees with its points, and all further decisions (actions) of the Client express full agreement with this Policy and its possible updates.
                  </p>
                </div>
              </div>

              {/* 2. Types of information */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Eye className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    2. Types of Information
                  </h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <div>
                    <p className="mb-3">
                      <strong>2.1.</strong> Customer's Personal Information - information that allows you to identify the Customer (his Personal Data), including:
                    </p>
                    <div className="bg-[#212634] rounded-lg p-6 space-y-4 ml-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.1.1. Registration data</h4>
                        <p>When registering on the Company's platform, you will need to provide the information requested by the Company by entering it in the appropriate fields (name, phone, contact details, address of residence and registration, password, account currency, etc.).</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.1.2. Supporting documents</h4>
                        <p>The Company reserves the right to verify the Client, i.e. request from him documents necessary in the opinion of the Company confirming the identity of the client, his solvency, legal justification of his ownership of funds, his location (payment documents, documents confirming the address of residence, banking, tax documents, etc.). The Company may also request documents confirming the Customer's experience in conducting trading operations and determining its Risk indicators.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.1.3. Your devices data</h4>
                        <p>We are talking about the personal data of the Client, which the Company can receive from various devices of the Client. For example, information about your geolocation, personal (unique) identifiers, IP addresses, etc.</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-3">
                      <strong>2.2.</strong> Depersonalized information - the so-called undetectable information about customers, which may become available in the process of obtaining the services of the Company. The company does not identify customers whose depersonalized information is being processed.
                    </p>
                    <div className="bg-[#212634] rounded-lg p-6 space-y-4 ml-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.2.1. Technical information</h4>
                        <p>Information about the software and devices that you use when performing operations (domain, language used, browser type, type of operating system, etc.). The purpose of collecting such information is to improve the performance of the Company's server, providing the most convenient option for interaction.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.2.2. Analytical information</h4>
                        <p>Information about your use of our applications, servers, etc. Based on this information, the Client's activity of the Company is determined (client clicks, views, recording time spent on a particular page, your other actions). Such information is necessary for the Company to correct various errors, system flaws, as well as to analyze your use of the Company's platform.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.2.3. Statistics</h4>
                        <p>The Company may collect, structure and transmit depersonalized information to other Clients. Such information may include the history of your transactions, the type of the most popular (profitable) asset, the best time to complete transactions, etc.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">2.2.4. Anonymous information</h4>
                        <p>The Company has the right to classify information in such a way that it does not allow you to specifically identify you (or summarize information about all Clients). In this case, the Company has the right to use such statistical information and disclose it without any restrictions in the part of the Policy.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Information use by the Company */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    3. Information Use by the Company
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>3.1.</strong> The information referred to in Section 2 of the Policy includes, including the Personal Information of the Client.
                  </p>
                  <p>
                    <strong>3.2.</strong> Your Personal Data may be used by the Company for the following purposes:
                  </p>
                  <ul className="list-none space-y-2 pl-4">
                    <li>3.2.1. Providing you with Company Services (trading services, creating a trading account, assessing your experience and risk level, etc.)</li>
                    <li>3.2.2. Creating your individual Account for using the Company Services</li>
                    <li>3.2.3. Identification (authentication) of access to the services of the Company</li>
                    <li>3.2.4. Notifications of you about Company updates</li>
                    <li>3.2.5. Promoting our product and site, as well as promoting products and sites of our partners</li>
                    <li>3.2.6. Response to your inquiries, applications</li>
                    <li>3.2.7. Detecting violations of the law, legal norms, as well as other abuses</li>
                    <li>3.2.8. Monitoring compliance with legislation, legal norms, as well as policies and rules of the Company</li>
                    <li>3.2.9. Enforcement of a court decision (court order), as well as other state bodies (including control and supervision)</li>
                    <li>3.2.10. Correction of errors in the work of the Company's services</li>
                    <li>3.2.11. Advertising</li>
                    <li>3.2.12. Pursuing a policy to improve the functioning of the services of the Company</li>
                    <li>3.2.13. Identifying the interests of customers</li>
                    <li>3.2.14. Preventing fraudulent transactions (including money laundering, financial terrorism, etc.)</li>
                  </ul>

                  <p>
                    <strong>3.3.</strong> The company does not transfer your confidential information, except as provided by law and this Policy (including does not sell it to third parties, does not rent it out and does not use it for such purposes).
                  </p>

                  <div className="bg-[#212634] rounded-lg p-6">
                    <p className="mb-3 text-foreground font-semibold">The personal data of the Client can be disclosed to the authorized representatives of the Company in order to:</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li>Improving the services of the Company (providing assistance during operations)</li>
                      <li>Combining information materials in accordance with the marketing policy of the Company</li>
                      <li>Your identification (identity authentication)</li>
                      <li>Analysis of the work of the Company's service, identification and correction of errors, malfunctions</li>
                      <li>Verification of your account</li>
                      <li>Storage and processing of such data in the interests of the Company</li>
                    </ul>
                    <p className="mt-4">Company proxies may include partners, subsidiaries, service providers, and other related companies.</p>
                  </div>

                  <p>
                    The Company reserves the right to disclose confidential information of the Client in cases that, in the opinion of the Company, are necessary and sufficient, being guided by the principles of reasonableness and fairness. For example:
                  </p>
                  <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>In order to comply with the operations of Clients in accordance with applicable law, legal standards, as well as the policy of the Company itself, as well as to identify any kind of offenses and / or abuses</li>
                    <li>In order to fulfill the requests of the judiciary and other public authorities</li>
                    <li>In order to prevent illegal, fraudulent actions, as well as timely measures to eliminate identified violations</li>
                    <li>In order to avoid causing any kind of harm (property, material and other) to the Company itself, its customers, and also to other parties involved</li>
                    <li>In order to protect the rights and legitimate interests of the Company (including the protection of the intellectual property of the Company), as well as legal protection against any kind of claims directed to the Company</li>
                  </ul>

                  <p>
                    <strong>3.6.</strong> The Company collects, stores and processes only the information that it receives from the Client in the process of rendering its services.
                  </p>
                  <p>
                    <strong>3.7.</strong> The Client understands and agrees that, by switching to other sites, trading platforms, the rules of the respective sites and trading platforms will be applied to him. The client agrees to independently familiarize themselves with the privacy policies of other companies.
                  </p>
                  <p>
                    <strong>3.8.</strong> The presence on the Company's website of any links to other companies is not a reason to believe that the Company recommends following (using) these links. The company is not responsible for the information offered by third-party sites, companies, applications and services. The Client understands and acknowledges that this Policy does not apply to such sites and links, and any operation carried out as part of such links is the responsibility of the Client.
                  </p>
                </div>
              </div>

              {/* 4. Information retention period */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    4. Information Retention Period
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>4.1.</strong> The customer has the right to make changes to personal data at any time by sending a corresponding request to the Company's email: <a href="mailto:support@qxbroker.com" className="text-[#0faf59] hover-elevate">support@qxbroker.com</a>.
                  </p>
                  <p>
                    <strong>4.2.</strong> The Client is also entitled to report any errors in his personal data identified by him or to ask the Company to delete this data. An exception is the history of transactions made by Clients, as well as other information that the Company undertakes to keep in force of applicable law. Similar requests are also sent to the e-mail of the Company: <a href="mailto:support@qxbroker.com" className="text-[#0faf59] hover-elevate">support@qxbroker.com</a>.
                  </p>
                  <p>
                    <strong>4.3.</strong> In case of non-receipt of the Client's notification in accordance with clause 4.1.-4.2 of this Policy, the Company reserves the right to store information about the Client for a period that it considers necessary, guided by its own goals and interests (taking into account the norms of the current legislation, fulfillment of the user agreement, rendering services, the functioning of services, enforcement of contracts, etc.).
                  </p>
                  <p>
                    <strong>4.4.</strong> The Company has the right at any time to edit or delete inaccurate and / or irrelevant, as well as incomplete information provided by the Client.
                  </p>
                </div>
              </div>

              {/* 5. Data protection */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    5. Data Protection
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>5.1.</strong> The company uses specialized technologies and security standards to maintain the confidentiality of Clients' information and protect it from unauthorized access by third parties.
                  </p>
                  <p>
                    <strong>5.2.</strong> At the same time, the Company is not responsible for the actions of third parties who have obtained access on illegal grounds, as well as illegally using the services of the Company. A company cannot guarantee that it will be able to prevent or prevent such unauthorized access in a timely manner.
                  </p>
                  <p>
                    <strong>5.3.</strong> If the Client has noticed any sign of disclosure of his confidential information (leak) not in accordance with this Policy and / or has suspected unauthorized access by a third party, the Client has the right to contact the Company's representatives via email: <a href="mailto:support@qxbroker.com" className="text-[#0faf59] hover-elevate">support@qxbroker.com</a>, the essence of the situation should be described in detail.
                  </p>
                </div>
              </div>

              {/* 6. Cookies */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Cookie className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    6. Cookies
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>6.1.</strong> Cookies are a data set that includes an anonymous and unique identifier that is sent to the Client's mobile phone or other device from the Company's website. When visiting the Company's website, pages viewed by the Client and cookies are downloaded to his device.
                  </p>
                  <p>
                    <strong>6.2.</strong> Cookies are stored on the Client's device.
                  </p>
                  <p>
                    <strong>6.3.</strong> Cookies have the function of an anonymous identifier in case of repeated visits by the Client to the Company's website, and also allow you to determine the most popular pages of the Client's request. Such files enable the Company to create the most effective site interface in order to maximize convenience for the Client.
                  </p>
                  <p>
                    The client has the right to block access to the cookies on his device. However, the Company does not guarantee uninterrupted operation of all functions of the Company's service. Your online session may be limited.
                  </p>

                  <div className="bg-[#212634] rounded-lg p-6">
                    <p className="mb-3 text-foreground font-semibold">The Company's website uses the following types of cookies:</p>
                    <ul className="list-disc list-inside space-y-2 pl-2">
                      <li><strong>Permanent:</strong> They are not deleted when the browser is closed. They are used only by the Company's website and for a certain period of time. This type of file allows the Company to identify who you are and to display your preferences in your next activation</li>
                      <li><strong>Session:</strong> When closing the browser they are deleted. They are stored temporarily and only with the browser open</li>
                      <li><strong>Third parties:</strong> Installed by third-party services for the purpose, for example, of analyzing and monitoring your access</li>
                    </ul>
                  </div>

                  <p>
                    <strong>6.6.</strong> Cookies do not allow you to be identified. At the same time, information obtained from such files is associated with your confidential information that is stored by the Company.
                  </p>
                </div>
              </div>

              {/* 7. Advertising */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Megaphone className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    7. Advertising
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>7.1.</strong> During the use of our service, you may come across advertising information, including targeted advertising.
                  </p>
                  <p>
                    <strong>7.2.</strong> The company reserves the right to attract third parties to disseminate the information specified in clause 4.1. Policies, as well as transmit to such persons depersonalized customer data in order to evaluate the success of advertising campaigns and identify the needs and interests of our customers.
                  </p>
                </div>
              </div>

              {/* 8. Marketing */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Megaphone className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    8. Marketing
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>8.1.</strong> The Company has the right to use your personal data, both independently and with the involvement of third parties under the contract, in order to provide you with information (promotional) materials about the Company's services, as well as about the products and services of the Company's proxies (partners, affiliates).
                  </p>
                  <p>
                    <strong>8.2.</strong> The Company also has the right to use your personal data in order to familiarize you with various marketing offers that, in the opinion of the Company, may interest you and be useful to you. Similar offers may be made by affiliates of the Company.
                  </p>
                  <p>
                    <strong>8.3.</strong> The client has the right to refuse to receive the information specified in clause 7.1.-7.2. of this Policy. To do this, send a corresponding request to the Company's email address (<a href="mailto:support@qxbroker.com" className="text-[#0faf59] hover-elevate">support@qxbroker.com</a>). In this case, the Company removes the Customer's email address from the mailing list. At the same time, the Company does not guarantee that the Client will cease to receive various kinds of marketing information from the Company's affiliates. The client may need to make a separate unsubscribe from the marketing communications of such individuals.
                  </p>
                  <p>
                    <strong>8.4.</strong> The Client hereby understands and agrees that when authorizing and gaining access to the Company's services, the Company has the right to collect, process and store the Client's information, as well as transmit it to its dependent (trusted) persons in order to familiarize the Client with marketing campaigns.
                  </p>
                </div>
              </div>

              {/* 9. Significant Corporate Actions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    9. Significant Corporate Actions
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>9.1.</strong> In the event that the Company concludes a corporate transaction for the sale of a business (part thereof), or in the economic process of consolidating the business capital of the Company (merger), as well as in the case of sale of fixed assets (part thereof), etc. - The company has the right to transfer personal data to authorized third parties. Affiliate organization accepts the rights and obligations of this Policy.
                  </p>
                </div>
              </div>

              {/* 10. Final Provisions */}
              <div className="bg-[#212634] rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-[#0faf59]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    10. Final Provisions
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong>10.1.</strong> The company has the right to amend the provisions of this Policy.
                  </p>
                  <p>
                    <strong>10.2.</strong> The client guarantees that he will follow the updates of the Policy, which is always freely available on the Company's website.
                  </p>
                  <p>
                    <strong>10.3.</strong> Information about the company:
                  </p>
                  <div className="bg-[#1c1f2d] rounded-lg p-6 space-y-2">
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-foreground min-w-24">Company:</span>
                      <span>International commercial company ON SPOT LLC GROUP</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-foreground min-w-24">Email:</span>
                      <a href="mailto:support@qxbroker.com" className="text-[#0faf59] hover-elevate">support@qxbroker.com</a>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="font-semibold text-foreground min-w-24">Address:</span>
                      <span>Main Street, P.O. Box 625, Charlestown, St. Kitts and Nevis</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
