"use client";

import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

// SVG Icons
const AppleBadgeIcon = () => (
  <svg width="20" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.63 1.34-.56.65-1.04 1.71-.91 2.73 1.01.08 2.01-.47 2.62-1.22z" />
  </svg>
);

const GooglePlayBadgeIcon = () => (
  <svg width="20" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.61 1.814L13.79 12 3.61 22.186A2.37 2.37 0 0 1 3 20.5V3.5c0-.663.226-1.272.61-1.686z" fill="#2196F3" />
    <path d="M17.56 8.236l-3.77 3.764 3.77 3.764 4.25-2.457c1.23-.71 1.23-1.905 0-2.614l-4.25-2.457z" fill="#FFC107" />
    <path d="M3.61 1.814L15.35 8.59l-1.56 3.41L3.61 1.814z" fill="#4CAF50" />
    <path d="M3.61 22.186L13.79 12l1.56 3.41-11.74 6.776z" fill="#F44336" />
  </svg>
);

const ChatGptIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.28 11.23a8 8 0 00-1.85-6.72 8 8 0 00-7.3-2.61 8 8 0 00-5.75 3.32 8 8 0 00-4.8 1.94 8 8 0 00-2 7.02 8 8 0 001.85 6.72 8 8 0 007.3 2.61 8 8 0 005.75-3.32 8 8 0 004.8-1.94 8 8 0 002-7.02zm-12.75 8.7a5.55 5.55 0 01-2.9-1.25l7.55-4.36v-1.7l-9.15 5.3a5.6 5.6 0 01-1.3-4.35 5.6 5.6 0 013.85-4.4v8.76zm9.15-5.3a5.55 5.55 0 01-1.25 2.9l-4.36-7.55h-1.7l5.3 9.15a5.6 5.6 0 01-4.35 1.3 5.6 5.6 0 01-4.4-3.85h8.76zm-5.3-9.15a5.55 5.55 0 012.9 1.25l-7.55 4.36v1.7l9.15-5.3a5.6 5.6 0 011.3 4.35 5.6 5.6 0 01-3.85 4.4v-8.76zm-9.15 5.3a5.55 5.55 0 011.25-2.9l4.36 7.55h1.7l-5.3-9.15a5.6 5.6 0 014.35-1.3 5.6 5.6 0 014.4 3.85H4.23zm9.15-3.6h-2.76l-1.38-2.4a5.6 5.6 0 014.14 0l-1.38 2.4zm-4.14 8.76h2.76l1.38 2.4a5.6 5.6 0 01-4.14 0l1.38-2.4z"/>
  </svg>
);

const ClaudeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z"/>
  </svg>
);

const PerplexityIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z"/>
  </svg>
);

const GeminiIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/>
  </svg>
);

const MetaAiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/>
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
  </svg>
);

const GrokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.36 5.64a9 9 0 1 1-12.72 12.72A9 9 0 0 1 18.36 5.64zM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const ThreadsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.001 0C5.373 0 0 5.373 0 12s5.373 12 12.001 12c6.626 0 11.999-5.373 11.999-12S18.627 0 12.001 0zm4.567 15.539c-.569 1.583-1.892 2.711-3.627 3.096-2.316.514-4.577-.473-5.541-2.42-.628-1.267-.656-2.911-.082-4.398.74-1.916 2.42-3.136 4.492-3.262 1.488-.09 2.871.42 3.896 1.436.425.421.737.915.938 1.458-.291.139-.588.267-.889.385-.164-.403-.393-.762-.705-1.071-.741-.735-1.722-1.097-2.839-1.02-1.579.11-2.853 1.059-3.414 2.541-.456 1.205-.418 2.502.106 3.488.694 1.306 2.274 2.016 3.931 1.768 1.25-.187 2.215-.992 2.651-2.208-.415-.226-.889-.374-1.428-.423-.105.127-.225.241-.358.341-.607.457-1.372.582-2.155.352-.777-.229-1.301-.849-1.401-1.658-.11-.889.349-1.677 1.173-2.052.709-.322 1.62-.284 2.436.102.504.238.904.593 1.189 1.055.234-.037.472-.06.714-.067.067-.002.134-.002.201 0 .285 0 .565.045.834.123-.118 1.037-.478 1.968-.973 2.716zm-4.707-3.053c-.352.062-.647.25-.809.516-.145.238-.16.518-.041.769.119.25.348.406.629.428.435.034.825-.147 1.07-.495-.084-.374-.326-.749-.849-1.218z" />
  </svg>
);

const XTwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const handleAISummary = (platform: string) => {
    alert(`Here is a summary of pamperMe from ${platform}:\n\npamperMe is an all-in-one salon and spa management platform designed to streamline operations, enhance customer engagement, and boost revenue. It offers features like booking, lead tracking, offers, and analytics.`);
  };

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerContainer}>
        {/* Dark Card Container */}
        <div className={styles.darkCard}>
          {/* Top Header: Logo on the left, Follow Us on the right (horizontal line) */}
          <div className={styles.topHeader}>
            <Link href="/" className={styles.brandLogo}>
              pamperMe
            </Link>

            <div className={styles.topSocialRow}>
              <a href="#" className={styles.socialBtn} aria-label="Facebook" title="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Instagram" title="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className={styles.socialBtn} aria-label="YouTube" title="YouTube">
                <YouTubeIcon />
              </a>
              <a href="#" className={styles.socialBtn} aria-label="LinkedIn" title="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="#" className={styles.socialBtn} aria-label="Threads" title="Threads">
                <ThreadsIcon />
              </a>
              <a href="#" className={styles.socialBtn} aria-label="X (Twitter)" title="X">
                <XTwitterIcon />
              </a>
            </div>
          </div>

          {/* 5-Column Grid Area */}
          <div className={styles.gridContainer}>

            {/* Column 1: PLATFORM */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>PLATFORM</div>
              <div className={styles.itemList}>
                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>WhatsApp</div>
                  <div className={styles.itemSubtitle}>Conversion made easy</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Instagram</div>
                  <div className={styles.itemSubtitle}>Turn DMs into sales</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Calls</div>
                  <div className={styles.itemSubtitle}>Call with full context</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Email</div>
                  <div className={styles.itemSubtitle}>Better communication</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Scheduling</div>
                  <div className={styles.itemSubtitle}>Manage all bookings</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Billing</div>
                  <div className={styles.itemSubtitle}>Track all payments</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Dashboard</div>
                  <div className={styles.itemSubtitle}>Live business performance</div>
                </Link>
              </div>
            </div>

            {/* Column 2: TOOLS */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>TOOLS</div>
              <div className={styles.itemList}>
                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Campaigns</div>
                  <div className={styles.itemSubtitle}>Customers outreach</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Contacts & Follow-ups</div>
                  <div className={styles.itemSubtitle}>Lead Tracking</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Offers & Coupons</div>
                  <div className={styles.itemSubtitle}>Boost repeat sales</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Reports & Analytics</div>
                  <div className={styles.itemSubtitle}>Performance Insights</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Integrations</div>
                  <div className={styles.itemSubtitle}>Connected tools</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Roles & Permissions</div>
                  <div className={styles.itemSubtitle}>Access control</div>
                </Link>

                <Link href="#" className={styles.itemLink}>
                  <div className={styles.itemTitle}>Notifications</div>
                  <div className={styles.itemSubtitle}>Instant alerts</div>
                </Link>
              </div>
            </div>

            {/* Column 3: BY INDUSTRY & AI SECTION */}
            <div className={styles.col3Section}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>BY INDUSTRY</div>
                <div className={styles.itemList}>
                  <Link href="#" className={styles.itemLink}>
                    <div className={styles.itemTitle}>Salon & Spa</div>
                    <div className={styles.itemSubtitle}>Manage salon effortlessly</div>
                  </Link>

                  <Link href="#" className={styles.itemLink}>
                    <div className={styles.itemTitle}>Healthcare & Clinics</div>
                    <div className={styles.itemSubtitle}>Patient communication & follow-ups</div>
                  </Link>

                  <Link href="#" className={styles.itemLink}>
                    <div className={styles.itemTitle}>Fitness & Wellness</div>
                    <div className={styles.itemSubtitle}>Grow memberships & retention</div>
                  </Link>
                </div>
              </div>

              {/* AI Summary Card */}
              <div className={styles.appDownloadCard}>
                <div className={styles.appDownloadTitle}>Ask AI for a summary</div>
                <div className={styles.aiButtonsRow}>
                  <button onClick={() => handleAISummary('ChatGPT')} className={styles.aiButton} style={{ backgroundColor: '#74aa9c', color: '#fff' }} aria-label="ChatGPT">
                    <ChatGptIcon />
                  </button>
                  <button onClick={() => handleAISummary('Claude')} className={styles.aiButton} style={{ backgroundColor: '#d97757', color: '#fff' }} aria-label="Claude">
                    <ClaudeIcon />
                  </button>
                  <button onClick={() => handleAISummary('Perplexity')} className={styles.aiButton} style={{ backgroundColor: '#222222', color: '#fff' }} aria-label="Perplexity">
                    <PerplexityIcon />
                  </button>
                  <button onClick={() => handleAISummary('Meta AI')} className={styles.aiButton} style={{ backgroundColor: '#ffffff', color: '#000' }} aria-label="Meta AI">
                    <MetaAiIcon />
                  </button>
                  <button onClick={() => handleAISummary('Grok')} className={styles.aiButton} style={{ backgroundColor: '#ffffff', color: '#000' }} aria-label="Grok">
                    <GrokIcon />
                  </button>
                  <button onClick={() => handleAISummary('Gemini')} className={styles.aiButton} style={{ backgroundColor: '#ffffff', color: '#1a73e8' }} aria-label="Gemini">
                    <GeminiIcon />
                  </button>
                </div>
              </div>
            </div>

            {/* Columns 4 & 5 Combined Section */}
            <div className={styles.rightSection}>
              <div className={styles.topRightRow}>
                {/* Column 4: BY TEAM */}
                <div className={styles.card}>
                  <div className={styles.cardHeader}>BY TEAM</div>
                  <div className={styles.itemList}>
                    <Link href="#" className={styles.itemLink}>
                      <div className={styles.itemTitle}>Customer Engagement</div>
                      <div className={styles.itemSubtitle}>All conversations in one place</div>
                    </Link>

                    <Link href="#" className={styles.itemLink}>
                      <div className={styles.itemTitle}>Operations & Admin</div>
                      <div className={styles.itemSubtitle}>Better team management</div>
                    </Link>

                    <Link href="#" className={styles.itemLink}>
                      <div className={styles.itemTitle}>Marketing</div>
                      <div className={styles.itemSubtitle}>B2B and B2C</div>
                    </Link>
                  </div>
                </div>

                {/* Column 5: SUPPORT */}
                <div className={styles.card}>
                  <div className={styles.cardHeader}>SUPPORT</div>
                  <div className={styles.itemList}>
                    <Link href="/pricing" className={styles.itemLink}>
                      <div className={styles.itemTitle}>Pricing</div>
                      <div className={styles.itemSubtitle}>Compare plans and find what fits your business.</div>
                    </Link>

                    <Link href="#" className={styles.itemLink}>
                      <div className={styles.itemTitle}>Contact Us</div>
                      <div className={styles.itemSubtitle}>Get in touch with our team.</div>
                    </Link>

                    <Link href="#" className={styles.itemLink}>
                      <div className={styles.itemTitle}>Tutorials</div>
                      <div className={styles.itemSubtitle}>Master the use of all modules in pamperMe.</div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* App Download Grid: For businesses & For customers */}
              <div className={styles.appDownloadGrid}>
                {/* For businesses */}
                <div className={styles.appDownloadCard}>
                  <div className={styles.appDownloadTitle}>For businesses</div>
                  <div className={styles.storeBadgesRow}>
                    <a href="#" className={styles.storeBadge} aria-label="Download on the App Store">
                      <AppleBadgeIcon />
                      <div className={styles.storeBadgeText}>
                        <span className={styles.storeBadgeSubtitle}>Download on the</span>
                        <span className={styles.storeBadgeTitle}>App Store</span>
                      </div>
                    </a>
                    <a href="#" className={styles.storeBadge} aria-label="Get it on Google Play">
                      <GooglePlayBadgeIcon />
                      <div className={styles.storeBadgeText}>
                        <span className={styles.storeBadgeSubtitle}>GET IT ON</span>
                        <span className={styles.storeBadgeTitle}>Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* For customers */}
                <div className={styles.appDownloadCard}>
                  <div className={styles.appDownloadTitle}>For customers</div>
                  <div className={styles.storeBadgesRow}>
                    <a href="#" className={styles.storeBadge} aria-label="Download on the App Store">
                      <AppleBadgeIcon />
                      <div className={styles.storeBadgeText}>
                        <span className={styles.storeBadgeSubtitle}>Download on the</span>
                        <span className={styles.storeBadgeTitle}>App Store</span>
                      </div>
                    </a>
                    <a href="#" className={styles.storeBadge} aria-label="Get it on Google Play">
                      <GooglePlayBadgeIcon />
                      <div className={styles.storeBadgeText}>
                        <span className={styles.storeBadgeSubtitle}>GET IT ON</span>
                        <span className={styles.storeBadgeTitle}>Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Bar: Located outside the dark card in the bottom margin space */}
        <div className={styles.bottomBar}>
          <div className={styles.copyrightText}>
            © 2026 <strong>pamperme.in </strong>
          </div>
          <div className={styles.legalLinks}>
            <Link href="#" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="#" className={styles.legalLink}>Terms of Service</Link>
            <Link href="#" className={styles.legalLink}>Payments & Billing Terms</Link>
            <Link href="#" className={styles.legalLink}>SaaS Agreement</Link>
            <Link href="#" className={styles.legalLink}>Cookie & Data Preferences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
