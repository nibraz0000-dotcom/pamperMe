"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../../app/page.module.css';
import { useState, useEffect, useRef } from 'react';

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 16v-4"></path>
    <path d="M12 8h.01"></path>
  </svg>
);

const MarketplaceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l2.5-5h13L21 9" />
    <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
    <path d="M4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
  </svg>
);

export default function Navbar() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(menu);
    }, 500);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      handleMouseLeave();
      // The top banner is only on the home page.
      const threshold = pathname === '/' ? 36 : 0;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [pathname]);

  return (
    <>
      {/* Background Overlay */}
      <div 
        className={`${styles.navOverlay} ${activeMenu ? styles.navOverlayShow : ''}`} 
        onClick={handleMouseLeave}
      />

      {/* Top Banner (Only on Home Page) */}
      {pathname === '/' && (
        <div className={styles.topBanner}>
          Get 2 months free with code FALL2023.
          <Link href="/pricing" className={styles.topBannerLink}>Get Started →</Link>
        </div>
      )}

      <div className={`${styles.stickyHeader} ${isScrolled ? styles.scrolled : ''}`}>
        {/* Navigation */}
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo} style={{ textDecoration: 'none' }}>
            pamperMe
          </Link>

          <div className={styles.navLinks}>
            <Link href="#marketplace" className={styles.marketplaceBtn}>
              <MarketplaceIcon />
              <span>Marketplace</span>
            </Link>
            <button className={styles.marketplaceBtn}>Start free trial</button>
            <Link href="/login" className={styles.marketplaceBtn}>Log In</Link>
          </div>
        </nav>

        <nav className={styles.subNav}>
          <div className={styles.navLinks}>
            <div 
              className={styles.navItem}
              onMouseEnter={() => handleMouseEnter('business')}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${styles.navLink} ${activeMenu === 'business' ? styles.activeNavLink : ''}`}>Business Types</div>
              <div className={`${styles.megaMenu} ${activeMenu === 'business' ? styles.megaMenuShow : ''}`}>

                {/* BEAUTY COLUMN */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Beauty <span>›</span></div>
                  <div className={styles.megaList}>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Booth Renter</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Salon</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Brow & Lash</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Barber</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Nail</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Hair Removal</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Makeup</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Tanning</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Tattoo</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Pet Grooming</Link>
                  </div>
                </div>

                {/* WELLNESS COLUMN */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Wellness <span>›</span></div>
                  <div className={styles.megaList}>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Spa</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Aesthetic Clinic</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Med Spa</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Weight Loss Clinic</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Massage</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Acupuncture</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Chiropractor</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Mental Health</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Nutritionist</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Coaching</Link>
                    <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Physical Therapy</Link>
                  </div>
                </div>

              {/* FITNESS COLUMN */}
              <div className={styles.megaColumn}>
                <div className={styles.megaTitle}>Fitness <span>›</span></div>
                <div className={styles.megaList}>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Yoga</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Gym</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Personal Trainer</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Martial Arts</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Pilates</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Barre Studio</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Cross Training</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Cycling</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIcon}><MenuIcon /></div> Dance Studio</Link>
                </div>
              </div>

            </div>
          </div>


          <div 
            className={styles.navItem}
            onMouseEnter={() => handleMouseEnter('features')}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`${styles.navLink} ${activeMenu === 'features' ? styles.activeNavLink : ''}`}>Features</div>
            <div className={`${styles.megaMenu} ${styles.megaMenuWide} ${activeMenu === 'features' ? styles.megaMenuShow : ''}`}>

              {/* RUN YOUR BUSINESS */}
              <div className={styles.megaColumn}>
                <div className={styles.megaTitle}>Run Your Business</div>
                <div className={styles.megaListSingle}>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Calendar</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> E-Prescribe <span className={styles.badgeNew}>NEW</span></Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Reports</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> SOAP Notes</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Vera AI <span className={styles.badgeNew}>NEW</span></Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Forms</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Payroll</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Employee Management</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Free Data Transfer</Link>
                </div>
              </div>

              {/* GROW YOUR BUSINESS */}
              <div className={styles.megaColumn}>
                <div className={styles.megaTitle}>Grow Your Business</div>
                <div className={styles.megaListSingle}>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Marketplace</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Online Store</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Memberships</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Inventory</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> PamperMe Capital</Link>
                </div>
              </div>

              {/* SIMPLIFY PAYMENTS */}
              <div className={styles.megaColumn}>
                <div className={styles.megaTitle}>Simplify Payments</div>
                <div className={styles.megaListSingle}>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> PayPro (POS) <span className={styles.badgeNew}>NEW</span></Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Buy Now, Pay Later</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Invoices</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Payments</Link>
                </div>
              </div>

              {/* ELEVATE CLIENT EXPERIENCE */}
              <div className={styles.megaColumn}>
                <div className={styles.megaTitle}>Elevate Client Experience</div>
                <div className={styles.megaListSingle}>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Online Booking</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Customer Tracking</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> PamperMe Connect</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Notifications</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Live Stream</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Mobile Apps</Link>
                </div>
              </div>

              {/* BUILD YOUR BRAND */}
              <div className={styles.megaColumn}>
                <div className={styles.megaTitle}>Build Your Brand</div>
                <div className={styles.megaListSingle}>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> MySite</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Marketing</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Email Marketing</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Text Marketing</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Design Services</Link>
                  <Link href="#" className={styles.megaLink}><div className={styles.megaIconPlain}><MenuIcon /></div> Branded App</Link>
                </div>
              </div>

            </div>
          </div>
          <Link href="#products" className={styles.navLink}>Products</Link>
          <Link href="#multi-location" className={styles.navLink}>Multi-location</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
          <Link href="#Contact Sales" className={styles.navLink}>Contact Sales</Link>
          <Link href="#Support" className={styles.navLink}>Support</Link>
          <Link href="#Resources" className={styles.navLink}>Resources</Link>
        </div>
      </nav>
      </div>
    </>
  );
}
