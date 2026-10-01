"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../navBar/Navbar';
import Footer from '../footer/Footer';
import styles from './businessType.module.css';

export interface BusinessTypeProps {
  categoryName?: string;
  heroBadge?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroPhotos?: {
    imageSrc: string;
    title: string;
    badge: string;
  }[];
}

const FAQ_ITEMS = [
  {
    question: "What is Salon software?",
    bullets: [
      "24/7 online appointment booking",
      "Integrated point of sale & payments",
      "Client profiles & color formula records",
      "Stylist shift scheduling & commissions",
    ],
    conclusion:
      "Beyond automated booking and point of sale, salon software gives your team complete peace of mind to focus on creative craft and elevating client loyalty.",
  },
  {
    question: "How much should I expect to pay for salon software?",
    bullets: [
      "Predictable flat monthly subscription tiers",
      "Competitive, transparent processing rates",
      "Zero hidden cancellation fees or contracts",
      "Free 14-day full feature trial",
    ],
    conclusion:
      "With transparent subscription tiers and low card rates, modern platforms eliminate surprise overhead so salon owners can invest more into growing their business.",
  },
  {
    question: "How can I use salon software to help me grow my business?",
    bullets: [
      "Automated SMS & email rebooking campaigns",
      "Custom gift cards, packages & memberships",
      "Automated 5-star Google review requests",
      "Real-time revenue & chair utilization analytics",
    ],
    conclusion:
      "Combining automated marketing with intelligent rebooking keeps appointment books filled consistently, driving higher customer lifetime value with minimal daily effort.",
  },
  {
    question: "Does most salon software include an integrated payment system?",
    bullets: [
      "Card-on-file capture for no-show protection",
      "Contactless Apple Pay, Google Pay & tap cards",
      "Customizable tip screens & split checks",
      "Instant next-day payout deposits to your bank",
    ],
    conclusion:
      "Built-in processing unifies appointment checkouts with card protection policies, giving salon clients a frictionless visit while safeguarding your daily revenue.",
  },
  {
    question: "Is customer support typically included with salon software?",
    bullets: [
      "24/7 dedicated live chat & phone support",
      "Free 1-on-1 team onboarding & training",
      "Complimentary client data migration service",
      "Extensive knowledge base & video tutorials",
    ],
    conclusion:
      "Dedicated onboarding and complimentary data transfer guarantee that your staff transitions seamlessly without any disruption to your regular salon schedule.",
  },
  {
    question: "How can I integrate salon software into my business operations?",
    bullets: [
      "Embed booking widgets on your website & socials",
      "Fast 1-click import of clients & service menus",
      "Custom stylist logins with role permissions",
      "Sync seamlessly with Google Reserve & Instagram",
    ],
    conclusion:
      "With intuitive setup wizards and seamless social booking links, your salon can start accepting appointments and managing team schedules in less than an hour.",
  },
  {
    question: "What should I consider when purchasing salon software?",
    bullets: [
      "Ease of use on mobile phones and tablets",
      "Automated appointment reminders to stop no-shows",
      "Flexible booth rental & commission structures",
      "Dedicated hardware reliability and POS speed",
    ],
    conclusion:
      "Prioritize an intuitive mobile experience with strong deposit policies that saves front-desk hours while protecting stylist earnings and chair turnover.",
  },
  {
    question: "What devices work with pamperMe?",
    bullets: [
      "iOS & Android smartphones and tablets",
      "Mac & Windows desktop web browsers",
      "Dual-screen countertop register hardware",
      "Pocket Bluetooth contactless card readers",
    ],
    conclusion:
      "Cloud synchronization across all smartphones, tablets, and dedicated POS terminals ensures you can monitor operations and take payments from any chair, anytime.",
  },
];

export default function BusinessTypeTemplate({
  categoryName = "Salon",
  heroBadge = "SALON SOFTWARE",
  heroTitle = "The salon software that keeps your chairs full.",
  heroSubtitle = "Effortless 24/7 online booking, automated marketing, contactless salon POS, and team management built specifically for salon owners and independent stylists.",
  heroPhotos = [
    {
      imageSrc: "/salon_hero_stylist.jpg",
      title: "Hairstyling & Cuts",
      badge: "Booked 24/7",
    },
    {
      imageSrc: "/salon_stylist_tablet.jpg",
      title: "Smart Calendar",
      badge: "Real-time Schedule",
    },
    {
      imageSrc: "/salon_interior_modern.jpg",
      title: "Salon Floor",
      badge: "Team Management",
    },
  ],
}: BusinessTypeProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top Navbar */}
      <Navbar />

      <main>
        {/* ==========================================================================
            1. HERO SECTION
            ========================================================================== */}
        <section className={styles.heroSection}>
          <div className={styles.heroBadge}>{heroBadge}</div>
          <h1 className={styles.heroTitle}>{heroTitle}</h1>
          <p className={styles.heroSubtitle}>{heroSubtitle}</p>

          <div className={styles.heroActions}>
            <Link href="/pricing" className={styles.primaryBtn}>
              Start free trial →
            </Link>
            <button className={styles.secondaryBtn}>
              Book a demo
            </button>
          </div>

          {/* 3-Photo Showcase Cards */}
          <div className={styles.heroCardsRow}>
            {heroPhotos.map((photo, index) => (
              <div key={index} className={styles.heroPhotoCard}>
                <Image
                  src={photo.imageSrc}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImage}
                  priority={index === 0}
                />
                <div className={styles.cardFloatingBadge}>
                  <span>{photo.title}</span>
                  <span style={{ color: '#00f076' }}>● {photo.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================================================
            2. PRESS / SOCIAL PROOF BAR
            ========================================================================== */}
        <section className={styles.pressBar}>
          <div className={styles.pressTitle}>Trusted by over 300,000 beauty & salon professionals</div>
          <div className={styles.pressLogos}>
            <span className={styles.pressLogo}>VOGUE</span>
            <span className={styles.pressLogo}>Forbes</span>
            <span className={styles.pressLogo}>allure</span>
            <span className={styles.pressLogo}>GLAMOUR</span>
            <span className={styles.pressLogo}>Salon Today</span>
            <span className={styles.pressLogo}>TechCrunch</span>
          </div>
        </section>

        {/* ==========================================================================
            3. PRODUCT SUITE OVERVIEW
            ========================================================================== */}
        <section className={styles.overviewSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>ALL-IN-ONE PLATFORM</div>
            <h2 className={styles.sectionHeading}>Everything you need to grow your salon in one place</h2>
            <p className={styles.sectionDesc}>
              Say goodbye to juggling multiple apps. pamperMe connects your bookings, payments, client records, and marketing seamlessly.
            </p>
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
            4. VIDEO TESTIMONIAL FEATURE BANNER
            ========================================================================== */}
        <section className={styles.storiesSection}>
          <div className={styles.storiesContainer}>
            <div className={styles.videoBannerCard}>
              <Image
                src="/salon_hero_stylist.jpg"
                alt="Salon Testimonial Video"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.videoBannerOverlay}></div>
              <div className={styles.videoBannerContent}>
                <button className={styles.playCircleBtn} aria-label="Play Story Video">
                  ▶
                </button>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800 }}>
                  "pamperMe transformed how we book clients and run checkout."
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem' }}>
                  Watch how The Mane Studio cut admin time by 15 hours every week.
                </p>
              </div>
            </div>

            <div className={styles.videoStoryGrid}>
              <div className={styles.storyCard}>
                <div className={styles.storyImageWrap}>
                  <Image
                    src="/salon_stylist_tablet.jpg"
                    alt="Salon Owner Story"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.storyCardBody}>
                  <div className={styles.storyQuote}>
                    "Our rebooking rate jumped by 35% within the first two months of switching to pamperMe."
                  </div>
                  <div className={styles.storyAuthor}>Elena Rostova</div>
                  <div className={styles.storySalon}>Owner, Aurora Hair & Co.</div>
                </div>
              </div>

              <div className={styles.storyCard}>
                <div className={styles.storyImageWrap}>
                  <Image
                    src="/salon_interior_modern.jpg"
                    alt="Stylist Team Story"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.storyCardBody}>
                  <div className={styles.storyQuote}>
                    "My stylists love having their schedules and commission stats updated live in the mobile app."
                  </div>
                  <div className={styles.storyAuthor}>Marcus Vance</div>
                  <div className={styles.storySalon}>Director, Atelier Salon Lounge</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================================================
            5. HARDWARE / POS SHOWCASE
            ========================================================================== */}
        <section className={styles.hardwareSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionEyebrow}>SALON HARDWARE</div>
            <h2 className={styles.sectionHeading}>Purpose-built salon POS hardware</h2>
            <p className={styles.sectionDesc}>
              Modern, reliable payment terminals that look beautiful on your reception counter or styling station.
            </p>
          </div>

          <div className={styles.hardwareGrid}>
            <div className={styles.hardwareCard}>
              <div className={styles.hardwareImageWrap}>
                <Image
                  src="/salon_pos_terminal.jpg"
                  alt="pamperMe Salon Register"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className={styles.hardwareTitle}>pamperMe Countertop Register</h3>
                <p className={styles.hardwareDesc}>
                  Dual-screen countertop setup with client-facing display, instant tip suggestions, and contactless Apple Pay / Google Pay.
                </p>
                <button className={styles.primaryBtn} style={{ background: '#0f172a', color: '#ffffff' }}>
                  Explore Register →
                </button>
              </div>
            </div>

            <div className={styles.hardwareCard}>
              <div className={styles.hardwareImageWrap}>
                <Image
                  src="/salon_stylist_tablet.jpg"
                  alt="pamperMe Mobile Reader"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className={styles.hardwareTitle}>pamperMe Handheld Card Reader</h3>
                <p className={styles.hardwareDesc}>
                  Pocket-sized Bluetooth card reader allowing stylists to checkout clients right from the chair with zero friction.
                </p>
                <button className={styles.primaryBtn} style={{ background: '#0f172a', color: '#ffffff' }}>
                  Explore Card Reader →
                </button>
              </div>
            </div>
          </div>

          <div className={styles.hardwarePromoBanner}>
            <div>
              <div className={styles.promoTitle}>Get a FREE card reader with your free trial</div>
              <div className={styles.promoSubtitle}>Sign up today and receive a complimentary contactless card reader for your salon.</div>
            </div>
            <Link href="/pricing" className={styles.primaryBtn} style={{ background: '#ffffff', color: '#0f172a' }}>
              Claim Offer Now →
            </Link>
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
          <h2 className={styles.platformTitle}>A platform suitable for all</h2>

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
                  { title: "Fitness", image: "/fitness.jpg", href: "#" },
                  { title: "Spa", image: "/spa-hero.jpg", href: "#" },
                  { title: "Massage Salon", image: "/wellness.jpg", href: "#" },
                  { title: "Tanning Studios", image: "/salon_interior_modern.jpg", href: "#" },
                  // Duplicated for seamless infinite loop
                  { title: "Personal Trainer", image: "/fitness.jpg", href: "#" },
                  { title: "Fitness", image: "/fitness.jpg", href: "#" },
                  { title: "Spa", image: "/spa-hero.jpg", href: "#" },
                  { title: "Massage Salon", image: "/wellness.jpg", href: "#" },
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
          <h2 className={styles.faqTitle}>{categoryName || "Salon"} Software & App FAQ</h2>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, index) => {
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
      </main>

      {/* Reusable Footer */}
      <Footer />
    </div>
  );
}

