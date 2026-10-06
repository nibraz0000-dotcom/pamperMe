"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';
import styles from './businessType.module.css';

export interface BusinessTypeProps {
  heroTitle?: string;
  heroSubtitle?: string;
}

const pathMap: Record<string, string> = {
  '/acupuncture': 'Acupuncture',
  '/aesthetic-clinic': 'Aesthetic Clinic',
  '/barber': 'Barbershop',
  '/barre-studio': 'Barre Studio',
  '/booth-renter': 'Booth Renter',
  '/brow-and-lash': 'Brow and Lash Studio',
  '/brow-lash': 'Brow and Lash Studio',
  '/chiropractor': 'Chiropractor',
  '/coaching': 'Coaching',
  '/cross-training': 'Cross Training Gym',
  '/cycling': 'Cycling Studio',
  '/dance-studio': 'Dance Studio',
  '/gym': 'Gym',
  '/hair-removal': 'Hair Removal Clinic',
  '/makeup': 'Makeup Artist',
  '/martial-arts': 'Martial Arts Studio',
  '/massage': 'Massage Studio',
  '/med-spa': 'Med Spa',
  '/mental-health': 'Mental Health Clinic',
  '/nail': 'Nail Salon',
  '/nutritionist': 'Nutritionist',
  '/personal-trainer': 'Personal Trainer',
  '/pet-grooming': 'Pet Grooming Salon',
  '/physical-therapy': 'Physical Therapy Clinic',
  '/pilates': 'Pilates Studio',
  '/salon': 'Salon',
  '/spa': 'Spa',
  '/sports-facility': 'Sports Facility',
  '/tanning': 'Tanning Salon',
  '/tattoo': 'Tattoo Studio',
  '/weight-loss-clinic': 'Weight Loss Clinic',
  '/yoga': 'Yoga Studio'
};

function getFaqs(businessType: string) {
  return [
    {
      question: `What is ${businessType} software?`,
      bullets: [
        "24/7 online appointment booking",
        "Integrated point of sale & payments",
        "Client profiles & service records",
        "Staff shift scheduling & commissions",
      ],
      conclusion:
        `Beyond automated booking and point of sale, ${businessType.toLowerCase()} software gives your team complete peace of mind to focus on their craft and elevating client loyalty.`,
    },
    {
      question: `How much should I expect to pay for ${businessType} software?`,
      bullets: [
        "Predictable flat monthly subscription tiers",
        "Competitive, transparent processing rates",
        "Zero hidden cancellation fees or contracts",
        "Free 14-day full feature trial",
      ],
      conclusion:
        "With transparent subscription tiers and low card rates, modern platforms eliminate surprise overhead so owners can invest more into growing their business.",
    },
    {
      question: `How can I use ${businessType} software to help me grow my business?`,
      bullets: [
        "Automated SMS & email rebooking campaigns",
        "Custom gift cards, packages & memberships",
        "Automated 5-star Google review requests",
        "Real-time revenue & utilization analytics",
      ],
      conclusion:
        "Combining automated marketing with intelligent rebooking keeps appointment books filled consistently, driving higher customer lifetime value with minimal daily effort.",
    },
    {
      question: `Does most ${businessType} software include an integrated payment system?`,
      bullets: [
        "Card-on-file capture for no-show protection",
        "Contactless Apple Pay, Google Pay & tap cards",
        "Customizable tip screens & split checks",
        "Instant next-day payout deposits to your bank",
      ],
      conclusion:
        "Built-in processing unifies checkouts with card protection policies, giving clients a frictionless visit while safeguarding your daily revenue.",
    },
    {
      question: `Is customer support typically included with ${businessType} software?`,
      bullets: [
        "24/7 dedicated live chat & phone support",
        "Free 1-on-1 team onboarding & training",
        "Complimentary client data migration service",
        "Extensive knowledge base & video tutorials",
      ],
      conclusion:
        "Dedicated onboarding and complimentary data transfer guarantee that your staff transitions seamlessly without any disruption to your regular schedule.",
    },
    {
      question: `How can I integrate ${businessType} software into my business operations?`,
      bullets: [
        "Embed booking widgets on your website & socials",
        "Fast 1-click import of clients & service menus",
        "Custom staff logins with role permissions",
        "Sync seamlessly with Google Reserve & Instagram",
      ],
      conclusion:
        "With intuitive setup wizards and seamless social booking links, your business can start accepting appointments and managing team schedules in less than an hour.",
    },
    {
      question: `What should I consider when purchasing ${businessType} software?`,
      bullets: [
        "Ease of use on mobile phones and tablets",
        "Automated appointment reminders to stop no-shows",
        "Flexible staff & commission structures",
        "Dedicated hardware reliability and POS speed",
      ],
      conclusion:
        "Prioritize an intuitive mobile experience with strong deposit policies that saves front-desk hours while protecting staff earnings.",
    },
    {
      question: `What devices work with pamperMe?`,
      bullets: [
        "iOS & Android smartphones and tablets",
        "Mac & Windows desktop web browsers",
        "Dual-screen countertop register hardware",
        "Pocket Bluetooth contactless card readers",
      ],
      conclusion:
        "Cloud synchronization across all smartphones, tablets, and dedicated POS terminals ensures you can monitor operations and take payments from anywhere, anytime.",
    },
  ];
}

const BRAND_PARTNERS = [
  {
    id: "toni-and-guy",
    name: "Toni & Guy",
    origin: "United Kingdom",
    knownFor: "High-fashion runway styling, modern precision cuts, and global academies.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 10H16M11 10V24" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M19 14L25 20M25 14L19 20" stroke="#3d1a14" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "great-clips",
    name: "Great Clips",
    origin: "United States",
    knownFor: "World's largest salon brand by salon count (over 4,400 locations).",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 11C20.5 8.5 17.5 7 14 7C8.5 7 4 11.5 4 17C4 22.5 8.5 27 14 27C19.5 27 23.5 23 24 17H14" stroke="#3d1a14" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "supercuts",
    name: "Supercuts",
    origin: "United States",
    knownFor: "Fast, affordable haircuts with over 2,000 franchise locations.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 9C20 7 16 6 13 7.5C10 9 9 12 11 14.5L20 18.5C22 19.5 23 22.5 21 24.5C18 27.5 12 26.5 9 24" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "vidal-sassoon",
    name: "Vidal Sassoon",
    origin: "United Kingdom",
    knownFor: "Pioneering the bob cut and architectural geometric hair styling.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="16,5 27,25 5,25" stroke="#3d1a14" strokeWidth="2.2" strokeLinejoin="round" />
        <line x1="16" y1="5" x2="16" y2="25" stroke="#3d1a14" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "dessange-paris",
    name: "Dessange Paris",
    origin: "France",
    knownFor: "Luxury hair spa treatments and official stylist for Cannes Film Festival.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 14L10 24H22L26 14L19 18L16 8L13 18L6 14Z" stroke="#3d1a14" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "jean-louis-david",
    name: "Jean Louis David",
    origin: "France",
    knownFor: "Pioneering layered cuts and contemporary urban hair trends.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="6" y1="9" x2="26" y2="9" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="16" x2="20" y2="16" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="23" x2="14" y2="23" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "franck-provost",
    name: "Franck Provost",
    origin: "France",
    knownFor: "High-end French styling, bespoke balayage, and international presence.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8V24M8 8H20M8 16H17" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" />
        <polygon points="24,18 26,20 24,22 22,20" fill="#3d1a14" />
      </svg>
    ),
  },
  {
    id: "regis-salons",
    name: "Regis Salons",
    origin: "United States",
    knownFor: "Full-service mall and lifestyle-center beauty salons.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24V8H18C21 8 23 10 23 13C23 16 21 18 18 18H8M17 18L24 24" stroke="#3d1a14" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "drybar",
    name: "Drybar",
    origin: "United States",
    knownFor: "Pioneered the specialized blowout-only salon concept.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 16C7 11 11 7 16 7C21 7 25 11 25 16C25 21 21 25 16 25" stroke="#3d1a14" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M16 12C14 12 12 14 12 16C12 18 14 20 16 20C18 20 20 18 20 16" stroke="#3d1a14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "aveda-salons",
    name: "Aveda Salons",
    origin: "United States",
    knownFor: "Plant-based, eco-friendly hair treatments and organic care.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 26C6 16 11 6 26 6C26 16 21 26 6 26Z" stroke="#3d1a14" strokeWidth="2.2" strokeLinejoin="round" />
        <path d="M6 26C13 22 18 17 26 6" stroke="#3d1a14" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "rush-hair-and-beauty",
    name: "Rush Hair & Beauty",
    origin: "United Kingdom",
    knownFor: "Award-winning British salon chain known for creative color and cut.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8H17C21 8 23 10.5 23 13.5C23 16.5 21 19 17 19H7V8ZM7 19V25M16 19L23 25" stroke="#3d1a14" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "saks-hair-and-beauty",
    name: "Saks Hair & Beauty",
    origin: "United Kingdom",
    knownFor: "Premium nationwide franchise network in the UK.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 10C20 7.5 16.5 6.5 13.5 8C10.5 9.5 9.5 12.5 11.5 15L20.5 18C22.5 19.5 23 22.5 21 24.5C18 27 12.5 26.5 9.5 24" stroke="#3d1a14" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "cost-cutters",
    name: "Cost Cutters",
    origin: "United States",
    knownFor: "Family-focused, convenient walk-in salon services.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="22" r="4" stroke="#3d1a14" strokeWidth="2.2" />
        <circle cx="22" cy="22" r="4" stroke="#3d1a14" strokeWidth="2.2" />
        <path d="M12.8 19.2L24 6" stroke="#3d1a14" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M19.2 19.2L8 6" stroke="#3d1a14" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "blo-blow-dry-bar",
    name: "Blo Blow Dry Bar",
    origin: "Canada",
    knownFor: "North America's original and largest blowout bar franchise.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 8H16C19 8 21 10 21 12.5C21 15 19 16.5 16 16.5H8V8Z" stroke="#3d1a14" strokeWidth="2.4" strokeLinejoin="round" />
        <path d="M8 16.5H17C20 16.5 22 18.5 22 21C22 23.5 20 25.5 17 25.5H8V16.5Z" stroke="#3d1a14" strokeWidth="2.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: "paul-mitchell",
    name: "Paul Mitchell",
    origin: "United States",
    knownFor: "Signature styling network powered by John Paul Mitchell Systems.",
    logo: (
      <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="10" stroke="#3d1a14" strokeWidth="2.4" />
        <circle cx="16" cy="16" r="4" fill="#3d1a14" />
      </svg>
    ),
  },
];

const NO_EXTRA_CHARGE_ROWS = [
  [
    { text: "Unlimited bookings" },
    { text: "Client Appointment Confirmations & Reminders" },
    { text: "Email Marketing" },
  ],
  [
    { text: "Text Message Marketing*" },
    { text: "Custom Forms & Liability Waivers" },
    { text: "Reserve with Google" },
  ],
  [
    { text: "Reporting and insights" },
    { text: "Waitlists" },
    { text: "No-Show Protection features**" },
  ],
  [
    { text: "Online Gift Cards**" },
    { text: "Memberships and Packages" },
    { text: "and more!" },
  ],
];

export default function BusinessTypeTemplate({
  heroTitle = "The salon software that keeps your chairs full.",
  heroSubtitle = "Smart 24/7 online booking, contactless payments, and effortless salon management built for modern stylists and owners.",
}: BusinessTypeProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const pathname = usePathname();
  const businessType = pathMap[pathname] || 'Salon';
  const faqItems = getFaqs(businessType);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();

      // Smoothly expand to full width when approaching its active viewport position
      if (rect.top <= 160 && rect.bottom >= 180) {
        setIsExpanded(true);
      } else if (rect.top > 280 || rect.bottom < 100) {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.pageWrapper}>
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* ==========================================================================
            1. HERO SECTION
            ========================================================================== */}
        <section className={styles.heroSection}>
          <div className={styles.heroContentLeft}>
            <h1 className={styles.heroTitle}>{heroTitle}</h1>
            <p className={styles.heroSubtitle}>{heroSubtitle}</p>

            <div className={styles.heroActions}>
              <Link href="/free-trial" className={styles.primaryBtn}>
                Start Free Trial
              </Link>
              <span className={styles.heroMicrocopy}>No credit card required</span>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            2. BRAND PARTNERS / SOCIAL PROOF FLIP CARDS
            ========================================================================== */}
        <section className={styles.pressBar}>
          <div className={styles.pressTitle}>
            Trusted by the world&apos;s leading salon & beauty brands
          </div>

          <div className={styles.brandMarqueeWrapper}>
            <div className={styles.brandMarqueeTrack}>
              {[0, 1].map((groupIndex) => (
                <div key={`group-${groupIndex}`} className={styles.brandMarqueeGroup} aria-hidden={groupIndex > 0 ? "true" : undefined}>
                  {BRAND_PARTNERS.map((brand, idx) => (
                    <div key={`${brand.id}-${groupIndex}-${idx}`} className={styles.brandCardContainer}>
                      <div className={styles.brandCardInner}>
                        {/* Front Face: Single Line Logo & Brand Name */}
                        <div className={styles.brandCardFront}>
                          <div className={styles.brandHeaderInline}>
                            <span className={styles.brandIconInline}>{brand.logo}</span>
                            <span className={styles.brandNameInline}>{brand.name}</span>
                          </div>
                        </div>

                        {/* Back Face: Clean Centered Description Text */}
                        <div className={styles.brandCardBack}>
                          <p className={styles.brandBackDescText}>{brand.knownFor}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================================================
            3. PRODUCT SUITE OVERVIEW
            ========================================================================== */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.overviewHeading}>Cut the busywork to Smooth</h2>
          </div>

          <div className={styles.suiteGrid}>
            <div className={styles.suiteVisual}>
              <Image
                src="/dashboard_mockup.jpg"
                alt="PamperMe Salon Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className={styles.suiteList}>
              <div className={styles.suiteItem}>
                <div className={styles.checkIconCircle}>✓</div>
                <div>
                  <div className={styles.suiteItemTitle}>24/7 Smart Online Booking</div>
                  <div className={styles.suiteItemDesc}>
                    Clients book directly through your custom website, Instagram, and Google without phone tags.
                  </div>
                </div>
              </div>

              <div className={styles.suiteItem}>
                <div className={styles.checkIconCircle}>✓</div>
                <div>
                  <div className={styles.suiteItemTitle}>Automated SMS & Email Reminders</div>
                  <div className={styles.suiteItemDesc}>
                    Reduce no-shows by up to 80% with automated appointment confirmations and customizable reminder texts.
                  </div>
                </div>
              </div>

              <div className={styles.suiteItem}>
                <div className={styles.checkIconCircle}>✓</div>
                <div>
                  <div className={styles.suiteItemTitle}>Built-In Salon Point of Sale (POS)</div>
                  <div className={styles.suiteItemDesc}>
                    Accept Apple Pay, tap cards, and split payments with prompt tipping screens and transparent processing.
                  </div>
                </div>
              </div>

              <div className={styles.suiteItem}>
                <div className={styles.checkIconCircle}>✓</div>
                <div>
                  <div className={styles.suiteItemTitle}>Team & Booth Renter Management</div>
                  <div className={styles.suiteItemDesc}>
                    Track individual stylist commissions, manage shift schedules, and partition booth renter finances with ease.
                  </div>
                </div>
              </div>

              <div className={styles.suiteItem}>
                <div className={styles.checkIconCircle}>✓</div>
                <div>
                  <div className={styles.suiteItemTitle}>Color Formulas & Client History</div>
                  <div className={styles.suiteItemDesc}>
                    Store detailed color formulas, consultation photos, and client preferences right inside their profile.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            4. NO EXTRA CHARGE FOR: FEATURE MATRIX SECTION (3-BLOCK WRAPPER)
            ========================================================================== */}
        <section
          ref={sectionRef}
          className={`${styles.noExtraChargeSection} ${isExpanded ? styles.expanded : ''}`}
        >
          {/* Block 1: Top Header with Centered Headline */}
          <div className={styles.noExtraChargeBlockHeader}>
            <div className={styles.noExtraChargeHeaderCol}>
              <h2 className={styles.noExtraChargeHeading}>
                Professionalism <br /> in Every Move
              </h2>
            </div>
          </div>

          {/* Block 2: 4-Row Feature Matrix Table */}
          <div className={styles.noExtraChargeBlockMatrix}>
            {NO_EXTRA_CHARGE_ROWS.map((row, rowIdx) => (
              <div key={`no-extra-row-${rowIdx}`} className={styles.noExtraChargeRow}>
                {row.map((item, colIdx) => (
                  <div key={`no-extra-col-${rowIdx}-${colIdx}`} className={styles.noExtraChargeCol}>
                    <div className={styles.scissorsIconWrap}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="6" cy="18" r="3" />
                        <line x1="20" y1="4" x2="8.12" y2="15.88" />
                        <line x1="14.47" y1="14.48" x2="20" y2="20" />
                        <line x1="8.12" y1="8.12" x2="12" y2="12" />
                      </svg>
                    </div>
                    <span className={styles.noExtraChargeText}>{item.text}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Block 3: Bottom CTA Button & Fine Print */}
          <div className={styles.noExtraChargeBlockFooter}>
            <Link href="/pricing#compare-plans" className={styles.seeFeaturesBtn}>
              See all included features
            </Link>
            <p className={styles.noExtraChargeDisclaimer}>
              * Plans include 2,000 free SMS marketing messages per month. Appointment confirmations and reminders are always free.<br />
              **Standard Mobile Payment processing fees apply.
            </p>
          </div>
        </section>

        {/* ==========================================================================
            6. FEATURE DEEP-DIVES
            ========================================================================== */}
        <section className={styles.featureSection}>
          {/* Row 1 */}
          <div className={styles.featureRow}>
            <div className={styles.featureImageWrap}>
              <Image
                src="/salon_hero_stylist.jpg"
                alt="Automate salon bookings"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureTag}>ONLINE BOOKING</div>
              <h3 className={styles.featureHeading}>Automate client appointments and keep chairs full</h3>
              <p className={styles.featureParagraph}>
                Give your clients the freedom to book appointments 24/7 on your custom booking website, Google Search, and social media. Let pamperMe fill last-minute cancellations automatically with our smart waitlist.
              </p>
              <div>
                <Link href="/pricing" className={styles.primaryBtn} style={{ background: '#c62c3f', color: '#ffffff' }}>
                  See Booking Features →
                </Link>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className={`${styles.featureRow} ${styles.featureRowReverse}`}>
            <div className={styles.featureImageWrap}>
              <Image
                src="/salon_interior_modern.jpg"
                alt="Salon Team Management"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureTag}>TEAM MANAGEMENT</div>
              <h3 className={styles.featureHeading}>Manage employees and booth renters effortlessly</h3>
              <p className={styles.featureParagraph}>
                Set custom permissions, calculate complex tiered commissions automatically, track product sales per stylist, and let team members manage their own personal calendars from their phones.
              </p>
              <div>
                <Link href="/pricing" className={styles.primaryBtn} style={{ background: '#0f172a', color: '#ffffff' }}>
                  Learn Team Features →
                </Link>
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className={styles.featureRow}>
            <div className={styles.featureImageWrap}>
              <Image
                src="/salon_stylist_tablet.jpg"
                alt="No Show Protection"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.featureTag}>REVENUE PROTECTION</div>
              <h3 className={styles.featureHeading}>Eliminate no-shows with deposits & card capture</h3>
              <p className={styles.featureParagraph}>
                Protect your revenue with mandatory card-on-file capture, customizable deposit requirements, and automated late cancellation fee enforcement so your time is always compensated.
              </p>
              <div>
                <Link href="/pricing" className={styles.primaryBtn} style={{ background: '#c62c3f', color: '#ffffff' }}>
                  Explore Protection →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            7. GRADIENT HIGHLIGHT CARD
            ========================================================================== */}
        <section className={styles.gradientCardSection}>
          <div className={styles.gradientCard}>
            <div>
              <h3 className={styles.gradientCardHeading}>
                Designed to deliver an unforgettable client salon experience
              </h3>
              <p className={styles.gradientCardText}>
                From seamless self check-in to digital consultation forms and automated birthday rewards, keep your clients coming back month after month.
              </p>
              <Link href="/pricing" className={styles.primaryBtn}>
                Get Started Today →
              </Link>
            </div>

            <div className={styles.featurePillList}>
              <div className={styles.featurePill}>
                <span>✨</span>
                <span>Digital Consultation & Intake Forms</span>
              </div>
              <div className={styles.featurePill}>
                <span>🎂</span>
                <span>Automated Birthday & Loyalty Rewards</span>
              </div>
              <div className={styles.featurePill}>
                <span>💳</span>
                <span>Express Self-Checkout on Client Phones</span>
              </div>
              <div className={styles.featurePill}>
                <span>⭐</span>
                <span>Automated 5-Star Google Review Requests</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            8. "A PLATFORM SUITABLE FOR ALL" - CONTINUOUS DUAL MARQUEE SHOWCASE
            ========================================================================== */}
        <section className={styles.platformSection}>
          <h2 className={styles.platformTitle}>The right fit for all</h2>

          <div className={styles.marqueeWrapper}>
            {/* Top Row: Right to Left Marquee */}
            <div className={styles.marqueeRow}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeLeft}`}>
                {[
                  { title: "Barbers", image: "/cat_barbers.jpg", href: "#" },
                  { title: "Waxing Salon", image: "/beauty.jpg", href: "#" },
                  { title: "Medspa", image: "/cat_medspa.jpg", href: "#" },
                  { title: "Eyebrow Bar", image: "/cat_eyebrow.jpg", href: "#" },
                  { title: "Hair Salon", image: "/salon_hero_stylist.jpg", href: "/salon" },
                  // Duplicated for seamless infinite loop
                  { title: "Barbers", image: "/cat_barbers.jpg", href: "#" },
                  { title: "Waxing Salon", image: "/beauty.jpg", href: "#" },
                  { title: "Medspa", image: "/cat_medspa.jpg", href: "#" },
                  { title: "Eyebrow Bar", image: "/cat_eyebrow.jpg", href: "#" },
                  { title: "Hair Salon", image: "/salon_hero_stylist.jpg", href: "/salon" },
                ].map((item, idx) => (
                  <Link key={`row1-${idx}`} href={item.href} className={styles.platformCard}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="300px"
                      className={styles.platformCardImage}
                    />
                    <div className={styles.platformCardOverlay}>
                      <span className={styles.platformCardTitle}>{item.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Bottom Row: Left to Right Marquee */}
            <div className={styles.marqueeRow}>
              <div className={`${styles.marqueeTrack} ${styles.marqueeRight}`}>
                {[
                  { title: "Personal Trainer", image: "/fitness.jpg", href: "#" },
                  { title: "Spa", image: "/spa-hero.jpg", href: "#" },
                  { title: "Massage Salon", image: "/wellness.jpg", href: "#" },
                  { title: "Fitness", image: "/fitness.jpg", href: "#" },
                  { title: "Tanning Studios", image: "/salon_interior_modern.jpg", href: "#" },
                  // Duplicated for seamless infinite loop
                  { title: "Personal Trainer", image: "/fitness.jpg", href: "#" },
                  { title: "Spa", image: "/spa-hero.jpg", href: "#" },
                  { title: "Massage Salon", image: "/wellness.jpg", href: "#" },
                  { title: "Fitness", image: "/fitness.jpg", href: "#" },
                  { title: "Tanning Studios", image: "/salon_interior_modern.jpg", href: "#" },
                ].map((item, idx) => (
                  <Link key={`row2-${idx}`} href={item.href} className={styles.platformCard}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="300px"
                      className={styles.platformCardImage}
                    />
                    <div className={styles.platformCardOverlay}>
                      <span className={styles.platformCardTitle}>{item.title}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            9. FAQ ACCORDION SECTION (Reference-matched Design)
            ========================================================================== */}
        <section className={styles.faqSection}>
          <h2 className={styles.faqTitle}>FAQ</h2>

          <div className={styles.faqList}>
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <svg
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronRotated : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      {/* 2-Column x 2-Row Grid for 4 Bullets */}
                      <div className={styles.faqGrid}>
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className={styles.faqBullet}>
                            <span className={styles.faqBulletDot}>•</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* 1.5 - 2 Line Concise Summary */}
                      <p className={styles.faqConclusion}>{item.conclusion}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================================================
            10. "PROFESSIONALISM IN EVERY MOVE" - COMMUNITY CTA BANNER
            ========================================================================== */}
        <section className={styles.makeTimeSection}>
          <div className={styles.makeTimeCrowdWrapper}>
            <Image
              src="/salon_pros_community.png"
              alt="Community of salon and beauty professionals"
              width={1376}
              height={499}
              className={styles.makeTimeCrowdImg}
              priority
            />
          </div>
          <div className={styles.makeTimeBanner}>
            <h2 className={styles.makeTimeHeading}>Professionalism in every move</h2>

            <Link href="/free-trial" className={styles.ctaBtn}>
              Start Free Trial
            </Link>
          </div>
        </section>
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

