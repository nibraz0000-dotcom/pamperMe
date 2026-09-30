"use client";

import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

// SVG Icons
const AppleBadgeIcon = () => (
  <svg width="18" height="22" viewBox="0 0 170 170" fill="currentColor">
    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.41-9.78-11.48-20.9-15.19-33.34-3.71-12.45-5.57-24.16-5.57-35.13 0-14.78 3.7-26.65 11.09-35.63 7.39-8.98 16.7-13.58 27.93-13.8 4.79 0 10.11 1.25 15.96 3.75 5.85 2.5 9.77 3.8 11.77 3.9 1.77 0 5.8-1.38 12.09-4.13 6.28-2.75 11.76-3.99 16.42-3.72 13.06.66 23.36 5.56 30.9 14.69-11.39 6.89-16.94 16.43-16.64 28.62.3 9.47 3.97 17.33 11.01 23.58 7.04 6.25 15.42 9.7 25.13 10.35-2.28 7.08-4.78 13.75-7.51 20.03zM119.22 31.84c0-7.39 2.66-14.28 7.99-20.67 5.33-6.39 11.83-10.45 19.5-12.17.65 1.74.98 3.59.98 5.54 0 7.39-2.77 14.45-8.31 21.18-5.54 6.74-12.33 10.74-20.37 12.01-.22-1.96-.33-3.89-.33-5.89z" />
  </svg>
);

const GooglePlayBadgeIcon = () => (
  <svg width="19" height="21" viewBox="0 0 24 24">
    <path d="M3.609 1.814L13.792 12 3.61 22.186A2.37 2.37 0 0 1 3 20.5V3.5c0-.663.226-1.272.609-1.686z" fill="#00D3FF" />
    <path d="M17.556 8.236l-3.764 3.764 3.764 3.764 4.257-2.457c1.23-.71 1.23-1.905 0-2.614l-4.257-2.457z" fill="#FFCE00" />
    <path d="M3.609 1.814L15.347 8.59l-1.555 3.41-10.183-10.186z" fill="#00F076" />
    <path d="M3.609 22.186L13.792 12l1.555 3.41-11.738 6.776z" fill="#FF3A44" />
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

            {/* Column 3: BY INDUSTRY */}
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
