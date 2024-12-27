import { Component } from '@angular/core';
import {
  NgbAccordionBody,
  NgbAccordionButton,
  NgbAccordionCollapse, NgbAccordionDirective,
  NgbAccordionHeader, NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-policy',
  standalone: true,
  imports: [
    NgbAccordionCollapse,
    NgForOf,
    NgbAccordionBody,
    NgbAccordionButton,
    NgbAccordionHeader,
    NgbAccordionDirective,
    NgbAccordionItem
  ],
  templateUrl: './policy.component.html',
  styleUrl: './policy.component.scss'
})
export class PolicyComponent {
  privacyPolicySections = [
    {
      title: '1. Information We Collect',
      content: [
        'A. Personal Information',
        'We collect personal information that you provide when you create an account, use our services, or interact with our website. This information may include:',
        'Account information: Name, email address, username, password, and contact details.',
        'Payment information: Credit card number, bank account information, billing address, and other payment details.',
        'Verification data: Identity verification documents (e.g., government-issued ID, passport, proof of address).',
        'Communication data: Email exchanges, chat messages, or phone call logs with our support team.',
        'B. Non-Personal Information',
        'In addition to the personal information you provide, we may automatically collect non-personal information about your interaction with our website. This may include:',
        'Device and browser information: IP address, device type, operating system, browser version, and language preference.',
        'Usage data: Information about how you use our website, such as pages visited, search queries, links clicked, and time spent on the website.',
        'Cookies: We may use cookies and other tracking technologies to enhance your experience.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'We use the information we collect for various purposes, including but not limited to:',
        'Account management: To create and manage your account, provide personalized experiences, and ensure the proper functioning of our platform.',
        'Transactions and payments: To process your cryptocurrency transactions, deposits, withdrawals, and payment processing.',
        'Compliance and legal obligations: To comply with applicable laws, regulations, and industry standards, including anti-money laundering (AML) and know your customer (KYC) requirements.',
        'Security: To protect the integrity of our website, prevent fraud, and detect and respond to security threats.',
        'Customer support: To provide customer service, respond to inquiries, and troubleshoot issues.',
        'Marketing: To send promotional communications, newsletters, or updates (with your consent, if required by law).',
        'Improvement of services: To analyze user behavior, improve our website functionality, and tailor our offerings to better serve our users.',
      ],
    },
    // Continue adding sections for other headings like "3. How We Protect Your Information", etc.
  ];
}
