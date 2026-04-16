// app/privacy/page.tsx

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - PromptIn Extension',
  description: 'Privacy Policy for the PromptIn Chrome Extension',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e90ff] text-center mb-2 border-b-2 border-[#1e90ff] pb-6">
            Privacy Policy
          </h1>

          <p className="text-center text-gray-600 mb-10">
            <strong>Last Updated: September 12, 2025</strong>
          </p>

          <div className="prose prose-lg max-w-none text-gray-800">
            <h2 className="text-[#1e90ff]">1. Introduction</h2>
            <p>
              Welcome to the Privacy Policy for the <strong>PromptIn Extension</strong> (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). 
              This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our Chrome extension, 
              which allows you to save, manage, and organize prompts for use with AI platforms like ChatGPT.
            </p>
            <p>
              Your privacy is important to us, and we are committed to protecting your personal data in compliance with applicable data protection laws, 
              including the General Data Protection Regulation (GDPR).
            </p>

            <h2 className="text-[#1e90ff]">2. Information We Collect</h2>
            <p>We collect the following types of information when you use the PromptIn Extension:</p>

            <h3>2.1 Personal Data</h3>
            <ul>
              <li>
                <strong>Prompt Data</strong>: Text you enter into the extension, such as prompt titles, descriptions, and content, which are stored locally on your device via Chrome&apos;s storage API.
              </li>
              <li>
                <strong>ExtensionPay Data</strong>: If you subscribe to a paid plan (e.g., Pro or Basic), we collect your email address through ExtensionPay to manage your subscription. We do not store payment details.
              </li>
            </ul>

            <h3>2.2 Usage Data</h3>
            <ul>
              <li>
                <strong>Analytics Data</strong>: We collect anonymized usage data through Google Analytics 4 (GA4), such as interactions with the extension (e.g., opening the modal, saving prompts, selecting options). This data includes event names, parameters (e.g., domain, step navigation), and a unique client ID stored locally.
              </li>
              <li>
                <strong>Technical Data</strong>: Information about your browser and device, such as browser type, version, and the domain of the website where the extension is used (e.g., chatgpt.com).
              </li>
            </ul>

            <h3>2.3 Consent</h3>
            <p>
              We only collect analytics data if you have provided explicit consent through the extension&apos;s settings. 
              You can withdraw consent at any time by updating your preferences.
            </p>

            <h2 className="text-[#1e90ff]">3. How We Use Your Information</h2>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li><strong>Provide Functionality</strong>: To save and manage your prompts as requested, stored locally on your device.</li>
              <li><strong>Improve the Extension</strong>: To analyze usage patterns to enhance functionality and user experience.</li>
              <li><strong>Subscription Management</strong>: To process subscriptions and provide access to premium features via ExtensionPay.</li>
              <li><strong>Compliance</strong>: To comply with legal obligations, such as responding to data access requests under GDPR.</li>
            </ul>

            <h2 className="text-[#1e90ff]">4. Data Sharing and Third Parties</h2>
            <p>We do not sell or share your personal data with third parties, except as described below:</p>
            <ul>
              <li>
                <strong>Google Analytics 4</strong>: If you consent, anonymized usage data is sent to Google Analytics to track extension interactions. 
                Google may process this data according to its{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>.
              </li>
              <li>
                <strong>ExtensionPay</strong>: For paid subscriptions, your email address is processed by ExtensionPay to manage your subscription. 
                See ExtensionPay&apos;s{' '}
                <a href="https://extensionpay.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a> for details.
              </li>
              <li>
                <strong>Legal Requirements</strong>: We may disclose data if required by law or to protect our rights.
              </li>
            </ul>

            <h2 className="text-[#1e90ff]">5. Data Storage and Security</h2>
            <p>
              <strong>Storage</strong>: Prompt data is stored locally on your device using Chrome&apos;s storage API and is not sent to our servers. 
              Analytics data is stored by Google Analytics, and subscription data (email) is stored by ExtensionPay.
            </p>
            <p>
              <strong>Security</strong>: We implement reasonable measures to protect your data, such as secure communication with third-party services 
              (e.g., HTTPS for GA4 and ExtensionPay). However, no method of transmission or storage is 100% secure.
            </p>
            <p>
              <strong>Retention</strong>: Prompt data is retained until you delete it or uninstall the extension. Analytics data is retained according 
              to Google Analytics&apos; retention policies. Subscription data is retained by ExtensionPay as long as your subscription is active.
            </p>

            <h2 className="text-[#1e90ff]">6. Your Rights</h2>
            <p>Under GDPR and other applicable laws, you have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access</strong>: Request a copy of the data we hold about you.</li>
              <li><strong>Rectification</strong>: Correct inaccurate or incomplete data.</li>
              <li><strong>Deletion</strong>: Request deletion of your data (e.g., by uninstalling the extension or withdrawing analytics consent).</li>
              <li><strong>Restriction</strong>: Restrict processing of your data in certain circumstances.</li>
              <li><strong>Objection</strong>: Object to data processing for analytics (by withdrawing consent).</li>
              <li><strong>Data Portability</strong>: Request your data in a structured, machine-readable format.</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:business.promptin@gmail.com" className="text-[#1e90ff] hover:underline">
                business.promptin@gmail.com
              </a>.
            </p>

            <h2 className="text-[#1e90ff]">7. Cookies and Tracking Technologies</h2>
            <p>
              The PromptIn Extension does not use cookies. However, we use a locally stored unique client ID for Google Analytics to track usage 
              anonymously if you consent. You can disable analytics tracking in the extension&apos;s settings.
            </p>

            <h2 className="text-[#1e90ff]">8. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes in our practices or legal requirements. The updated policy will be posted on our 
              website at{' '}
              <a href="https://prompt-in.com/privacy.html" target="_blank" rel="noopener noreferrer" className="text-[#1e90ff] hover:underline">
                https://prompt-in.com/privacy.html
              </a>
              , and the &ldquo;Last Updated&rdquo; date will be revised. We encourage you to review this policy periodically.
            </p>

            <h2 className="text-[#1e90ff]">9. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
            <p>
              Email:{' '}
              <a href="mailto:business.promptin@gmail.com" className="text-[#1e90ff] hover:underline">
                business.promptin@gmail.com
              </a>
              <br />
              Website:{' '}
              <a href="https://prompt-in.com" target="_blank" rel="noopener noreferrer" className="text-[#1e90ff] hover:underline">
                https://prompt-in.com
              </a>
            </p>
          </div>
        </div>

        <footer className="text-center text-gray-500 text-sm mt-10">
          <p>© 2025 PromptIn Extension. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}