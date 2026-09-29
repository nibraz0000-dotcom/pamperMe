'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import PricingCards from './Cards';
import styles from './pricing.module.css';

const features = [
  {
    category: 'Core features',
    items: [
      { name: 'Bookings & scheduling', basic: true, pro: true },
      { name: 'Clients', basic: true, pro: true },
      { name: 'Staff & payroll', basic: true, pro: true },
      { name: 'Mobile apps', basic: true, pro: true },
      { name: 'Multi-location', basic: false, pro: true },
    ],
  },
  {
    category: 'Text marketing',
    items: [
      { name: 'Automated campaigns', basic: false, pro: true },
      { name: 'Two-way texting', basic: false, pro: 'Add-on' },
    ],
  },
  {
    category: 'Online bookings',
    items: [
      { name: 'Reserve with Google', basic: true, pro: true },
      { name: 'Waitlist', basic: false, pro: true },
      { name: 'Booking policies', basic: true, pro: true },
    ],
  },
  {
    category: 'Integrated payments',
    items: [
      { name: 'Card reader support', basic: true, pro: true },
      { name: 'Terminal purchases', basic: true, pro: true },
      { name: 'No-show protection', basic: false, pro: true },
    ],
  },
];

const faqs = [
  { question: 'What does "Software that grows with your business" mean?', answer: 'It means our platform is designed to scale effortlessly from a solo entrepreneur to a multi-location enterprise without requiring you to switch systems.' },
  { question: 'Can I change my plan later?', answer: 'Yes, you can upgrade or downgrade your plan at any time right from your dashboard.' },
  { question: 'Is there a free trial?', answer: 'Absolutely! You can try our Pro plan free for 14 days, no credit card required.' },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (openFaq === index) setOpenFaq(null);
    else setOpenFaq(index);
  };

  const CheckIcon = () => (
    <svg className={styles.check} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  const CrossIcon = () => (
    <svg className={styles.cross} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <div className={styles.container}>
      <Navbar showBanner={false} />

      <main>
        <section className={styles.hero}>
          <div className={styles.label}>Pricing</div>
          <h1 className={styles.title}>Software that grows<br />with your business</h1>
          <p className={styles.subtitle}>Try us free for 14 days, no credit card required</p>

          <div className={styles.scrollArrow} onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
        </section>

        <PricingCards />

        <section className={styles.tableSection}>
          <div className={styles.toggleContainer} style={{ margin: '0 auto 3rem auto' }}>
            <span className={`${styles.toggleLabel} ${!isAnnual ? styles.active : ''}`} onClick={() => setIsAnnual(false)}>
              Monthly
            </span>
            <div className={`${styles.toggleSwitch} ${isAnnual ? styles.active : ''}`} onClick={() => setIsAnnual(!isAnnual)}>
              <div className={styles.toggleKnob}></div>
            </div>
            <span className={`${styles.toggleLabel} ${isAnnual ? styles.active : ''}`} onClick={() => setIsAnnual(true)}>
              Billed annually
            </span>
          </div>
          <div className={styles.tableHeader}>
            <div className={styles.tableHeaderEmpty}>Compare plans</div>
            <div>
              <div className={styles.planTitle}>PamperMe Basic</div>
              <div className={styles.planPrice}>Free</div>
            </div>
            <div>
              <div className={styles.badge}>Save $20/mo</div>
              <div className={styles.planTitle}>Pro</div>
              <div className={styles.planPrice}><span>${isAnnual ? '15' : '25'}</span> / mo</div>
            </div>
          </div>

          <div className={styles.tableBody}>
            {features.map((category, idx) => (
              <div key={idx}>
                <div className={styles.categoryTitle}>{category.category}</div>
                {category.items.map((item, iIdx) => (
                  <div key={iIdx} className={styles.featureRow}>
                    <div className={styles.featureName}>{item.name}</div>
                    <div className={styles.featureValue}>
                      {typeof item.basic === 'boolean' ? (item.basic ? <CheckIcon /> : <CrossIcon />) : item.basic}
                    </div>
                    <div className={styles.featureValue}>
                      {typeof item.pro === 'boolean' ? (item.pro ? <CheckIcon /> : <CrossIcon />) : item.pro}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>Frequently asked questions</h2>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span style={{ transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div className={styles.faqAnswer}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>© 2023 PamperMe. All rights reserved.</div>
      </footer>
    </div>
  );
}
