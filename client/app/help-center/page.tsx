'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './helpCenter.module.css';

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const MessageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const BookOpenIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const articles = [
  {
    title: 'How does the 14-day free trial work?',
    category: 'Billing & Trial',
    summary: 'Everything you need to know about starting, testing all features, and upgrading your trial with no credit card required.'
  },
  {
    title: 'Setting up your business calendar and online booking',
    category: 'Booking System',
    summary: 'A complete step-by-step guide to adding staff, configuring service durations, and sharing your custom booking link.'
  },
  {
    title: 'Migrating client data from previous software',
    category: 'Data Transfer',
    summary: 'Our dedicated migration specialists transfer your client profiles, service history, and past notes 100% free.'
  },
  {
    title: 'Integrated POS, card payments & Buy Now Pay Later',
    category: 'Payments',
    summary: 'Accept credit cards, contactless tap-to-pay, and flexible financing with low, transparent processing rates.'
  },
  {
    title: 'Automated SMS and email appointment reminders',
    category: 'Client Communications',
    summary: 'Reduce no-shows by up to 80% with smart reminder sequences customized with your business branding.'
  },
  {
    title: 'Managing inventory and retail product sales',
    category: 'Inventory',
    summary: 'Track stock counts, set low-inventory threshold alerts, and bundle retail products directly with services.'
  }
];

export default function HelpCenterPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email) {
      setContactSubmitted(true);
    }
  };

  return (
    <div className={styles.helpContainer}>
      {/* Top Navbar */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.brand}>
            pamperMe <span className={styles.helpBadge}>Help Center</span>
          </Link>
          <div className={styles.headerLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/free-trial" className={styles.navLink}>Free Trial</Link>
            <a href="#contact" className={styles.contactBtn}>Contact Support</a>
          </div>
        </div>
      </header>

      {/* Hero Search Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>How can we help your business today?</h1>
          <p className={styles.heroSubtitle}>
            Search our knowledge base, explore setup guides, or connect directly with customer support.
          </p>
          <div className={styles.searchBar}>
            <SearchIcon />
            <input
              type="text"
              placeholder="Search guides, tutorials, or troubleshooting articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>
        </div>
      </section>

      {/* Quick Channels Cards */}
      <section className={styles.channelsSection}>
        <div className={styles.channelGrid}>
          <div className={styles.channelCard}>
            <div className={styles.channelIcon} style={{ background: '#eff6ff', color: '#2563eb' }}>
              <MessageIcon />
            </div>
            <h3 className={styles.channelTitle}>24/7 Live Chat</h3>
            <p className={styles.channelDesc}>Get instant responses from dedicated technical specialists in under 2 minutes.</p>
            <button className={styles.channelActionBtn} onClick={() => alert('Live chat initiated with support specialist!')}>
              Start Live Chat
            </button>
          </div>

          <div className={styles.channelCard}>
            <div className={styles.channelIcon} style={{ background: '#f0fdf4', color: '#16a34a' }}>
              <PhoneIcon />
            </div>
            <h3 className={styles.channelTitle}>Phone Support</h3>
            <p className={styles.channelDesc}>Speak directly with onboarding advisors for urgent account or migration inquiries.</p>
            <a href="tel:+18005550199" className={styles.channelActionBtn} style={{ textDecoration: 'none' }}>
              +1 (800) 555-0199
            </a>
          </div>

          <div className={styles.channelCard}>
            <div className={styles.channelIcon} style={{ background: '#faf5ff', color: '#9333ea' }}>
              <MailIcon />
            </div>
            <h3 className={styles.channelTitle}>Email Assistance</h3>
            <p className={styles.channelDesc}>Send detailed queries or file attachments. We guarantee a reply within 1 hour.</p>
            <a href="mailto:support@pamperme.com" className={styles.channelActionBtn} style={{ textDecoration: 'none' }}>
              support@pamperme.com
            </a>
          </div>
        </div>
      </section>

      {/* Knowledge Base Articles */}
      <section className={styles.articlesSection}>
        <h2 className={styles.sectionTitle}>Popular Help Articles & Guides</h2>
        <div className={styles.articlesGrid}>
          {filteredArticles.map((art, idx) => (
            <div key={idx} className={styles.articleCard}>
              <div className={styles.articleCategory}>{art.category}</div>
              <h3 className={styles.articleTitle}>{art.title}</h3>
              <p className={styles.articleSummary}>{art.summary}</p>
              <div className={styles.readMoreLink}>Read full guide →</div>
            </div>
          ))}
          {filteredArticles.length === 0 && (
            <div className={styles.noResults}>
              <BookOpenIcon />
              <p>No articles matched your search query. Please try different keywords or contact support below.</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Customer Form */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactCard}>
          <h2 className={styles.contactTitle}>Contact Customer Support</h2>
          <p className={styles.contactSubtitle}>
            Have a question about your trial, custom pricing, or onboarding? Send us a message and our team will get right back to you.
          </p>

          {contactSubmitted ? (
            <div className={styles.successMessage}>
              <h3>Thank you for reaching out!</h3>
              <p>Your ticket has been logged. A customer support representative will contact you at <strong>{contactForm.email}</strong> shortly.</p>
              <button className={styles.submitBtn} onClick={() => { setContactSubmitted(false); setContactForm({ name: '', email: '', message: '' }); }}>
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Rivera"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className={styles.input}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Business Email</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@mysalon.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className={styles.input}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>How can we assist you?</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe your question, request, or onboarding needs..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className={styles.textarea}
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message to Support
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026 pamperMe Inc. All rights reserved. • Dedicated Customer Success & Support</p>
      </footer>
    </div>
  );
}
