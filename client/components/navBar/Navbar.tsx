"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import { useState, useEffect, useRef } from 'react';

import {
  Store,
  Scissors,
  SprayCan,
  Eye,
  Sparkles,
  Zap,
  Brush,
  Sun,
  PenTool,
  PawPrint,
  Flower2,
  HeartPulse,
  Scale,
  Hand,
  Pin,
  Bone,
  Brain,
  Apple,
  Target,
  Accessibility,
  Flower,
  Dumbbell,
  UserCheck,
  Swords,
  Activity,
  Footprints,
  Flame,
  Bike,
  Music,
  Trophy,
  Calendar,
  FileText,
  BarChart3,
  ClipboardList,
  Bot,
  FileCheck,
  DollarSign,
  Users,
  ArrowRightLeft,
  ShoppingBag,
  CreditCard,
  Boxes,
  Coins,
  Clock,
  Receipt,
  Wallet,
  CalendarCheck,
  UserSearch,
  MessageSquare,
  Bell,
  Video,
  Smartphone,
  Globe,
  Megaphone,
  Mail,
  MessageCircle,
  Palette,
  AppWindow
} from 'lucide-react';

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
  const [isFooterHidden, setIsFooterHidden] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollYRef = useRef(0);
  const headerRef = useRef<HTMLDivElement | null>(null);

  const closeMenuImmediately = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveMenu(null);
  };

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (activeMenu) {
      // Instant transition between menu items when already open
      setActiveMenu(menu);
    } else {
      // Initial entry delay (~400ms) to prevent accidental hover popups on long mouse movement
      timeoutRef.current = setTimeout(() => {
        setActiveMenu(menu);
      }, 400);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      closeMenuImmediately();
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollYRef.current;
      const threshold = pathname === '/' ? 36 : 0;
      setIsScrolled(currentScrollY > threshold);

      const footerEl = document.querySelector('footer');
      if (footerEl) {
        const footerRect = footerEl.getBoundingClientRect();
        const headerHeight = headerRef.current?.offsetHeight || 80;

        // When scrolling up, always show the navigation bar
        if (isScrollingUp) {
          setIsFooterHidden(false);
        } else if (footerRect.top <= headerHeight) {
          // Only hide when scrolling down AND the footer wrapper actually touches/reaches the navbar at top
          setIsFooterHidden(true);
        } else {
          // Above the footer (e.g. over the cards/content), keep navbar visible
          setIsFooterHidden(false);
        }
      } else {
      setIsFooterHidden(false);
    }

      lastScrollYRef.current = currentScrollY;
    };

    // Set initial scroll position
    lastScrollYRef.current = window.scrollY;
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
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

      <div
        ref={headerRef}
        className={`${styles.stickyHeader} ${isScrolled ? styles.scrolled : ''} ${isFooterHidden ? styles.navbarHidden : ''}`}
      >
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
          <div className={styles.subNavLinks}>
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
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Store size={14} /></div><span className={styles.megaText}>Booth Renter</span></Link>
                    <Link href="/salon" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Scissors size={14} /></div><span className={styles.megaText}>Salon</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Eye size={14} /></div><span className={styles.megaText}>Brow & Lash</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><SprayCan size={14} /></div><span className={styles.megaText}>Barber</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Sparkles size={14} /></div><span className={styles.megaText}>Nail</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Zap size={14} /></div><span className={styles.megaText}>Hair Removal</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Brush size={14} /></div><span className={styles.megaText}>Makeup</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Sun size={14} /></div><span className={styles.megaText}>Tanning</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><PenTool size={14} /></div><span className={styles.megaText}>Tattoo</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><PawPrint size={14} /></div><span className={styles.megaText}>Pet Grooming</span></Link>
                  </div>
                </div>

                {/* WELLNESS COLUMN */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Wellness <span>›</span></div>
                  <div className={styles.megaList}>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Flower2 size={14} /></div><span className={styles.megaText}>Spa</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Sparkles size={14} /></div><span className={styles.megaText}>Aesthetic Clinic</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><HeartPulse size={14} /></div><span className={styles.megaText}>Med Spa</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Scale size={14} /></div><span className={styles.megaText}>Weight Loss Clinic</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Hand size={14} /></div><span className={styles.megaText}>Massage</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Pin size={14} /></div><span className={styles.megaText}>Acupuncture</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Bone size={14} /></div><span className={styles.megaText}>Chiropractor</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Brain size={14} /></div><span className={styles.megaText}>Mental Health</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Apple size={14} /></div><span className={styles.megaText}>Nutritionist</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Target size={14} /></div><span className={styles.megaText}>Coaching</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Accessibility size={14} /></div><span className={styles.megaText}>Physical Therapy</span></Link>
                  </div>
                </div>

                {/* FITNESS COLUMN */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Fitness <span>›</span></div>
                  <div className={styles.megaList}>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Flower size={14} /></div><span className={styles.megaText}>Yoga</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Dumbbell size={14} /></div><span className={styles.megaText}>Gym</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><UserCheck size={14} /></div><span className={styles.megaText}>Personal Trainer</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Swords size={14} /></div><span className={styles.megaText}>Martial Arts</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Activity size={14} /></div><span className={styles.megaText}>Pilates</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Footprints size={14} /></div><span className={styles.megaText}>Barre Studio</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Flame size={14} /></div><span className={styles.megaText}>Cross Training</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Bike size={14} /></div><span className={styles.megaText}>Cycling</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Music size={14} /></div><span className={styles.megaText}>Dance Studio</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Trophy size={14} /></div><span className={styles.megaText}>Sports facility</span></Link>
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
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Calendar size={14} /></div><span className={styles.megaText}>Calendar</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><FileText size={14} /></div><span className={styles.megaText}>E-Prescribe <span className={styles.badgeNew}>NEW</span></span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><BarChart3 size={14} /></div><span className={styles.megaText}>Reports</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><ClipboardList size={14} /></div><span className={styles.megaText}>SOAP Notes</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Bot size={14} /></div><span className={styles.megaText}>Vera AI <span className={styles.badgeNew}>NEW</span></span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><FileCheck size={14} /></div><span className={styles.megaText}>Forms</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><DollarSign size={14} /></div><span className={styles.megaText}>Payroll</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Users size={14} /></div><span className={styles.megaText}>Employee Management</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><ArrowRightLeft size={14} /></div><span className={styles.megaText}>Free Data Transfer</span></Link>
                  </div>
                </div>

                {/* GROW YOUR BUSINESS */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Grow Your Business</div>
                  <div className={styles.megaListSingle}>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Store size={14} /></div><span className={styles.megaText}>Marketplace</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><ShoppingBag size={14} /></div><span className={styles.megaText}>Online Store</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><CreditCard size={14} /></div><span className={styles.megaText}>Memberships</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Boxes size={14} /></div><span className={styles.megaText}>Inventory</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Coins size={14} /></div><span className={styles.megaText}>PamperMe Capital</span></Link>
                  </div>
                </div>

                {/* SIMPLIFY PAYMENTS */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Simplify Payments</div>
                  <div className={styles.megaListSingle}>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><CreditCard size={14} /></div><span className={styles.megaText}>PayPro (POS) <span className={styles.badgeNew}>NEW</span></span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Clock size={14} /></div><span className={styles.megaText}>Buy Now, Pay Later</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Receipt size={14} /></div><span className={styles.megaText}>Invoices</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Wallet size={14} /></div><span className={styles.megaText}>Payments</span></Link>
                  </div>
                </div>

                {/* ELEVATE CLIENT EXPERIENCE */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Elevate Client Experience</div>
                  <div className={styles.megaListSingle}>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><CalendarCheck size={14} /></div><span className={styles.megaText}>Online Booking</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><UserSearch size={14} /></div><span className={styles.megaText}>Customer Tracking</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><MessageSquare size={14} /></div><span className={styles.megaText}>PamperMe Connect</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Bell size={14} /></div><span className={styles.megaText}>Notifications</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><Video size={14} /></div><span className={styles.megaText}>Live Stream</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Smartphone size={14} /></div><span className={styles.megaText}>Mobile Apps</span></Link>
                  </div>
                </div>

                {/* BUILD YOUR BRAND */}
                <div className={styles.megaColumn}>
                  <div className={styles.megaTitle}>Build Your Brand</div>
                  <div className={styles.megaListSingle}>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><Globe size={14} /></div><span className={styles.megaText}>MySite</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#ffb347' } as React.CSSProperties}><div className={styles.megaIcon}><Megaphone size={14} /></div><span className={styles.megaText}>Marketing</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#6cb4ee' } as React.CSSProperties}><div className={styles.megaIcon}><Mail size={14} /></div><span className={styles.megaText}>Email Marketing</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#d0f0c0' } as React.CSSProperties}><div className={styles.megaIcon}><MessageCircle size={14} /></div><span className={styles.megaText}>Text Marketing</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#b19cd9' } as React.CSSProperties}><div className={styles.megaIcon}><Palette size={14} /></div><span className={styles.megaText}>Design Services</span></Link>
                    <Link href="#" className={styles.megaLink} style={{ '--accent-color': '#40e0d0' } as React.CSSProperties}><div className={styles.megaIcon}><AppWindow size={14} /></div><span className={styles.megaText}>Branded App</span></Link>
                  </div>
                </div>

              </div>
            </div>
            <Link href="#products" className={styles.navLink} onMouseEnter={closeMenuImmediately}>Products</Link>
            <Link href="#multi-location" className={styles.navLink} onMouseEnter={closeMenuImmediately}>Multi-location</Link>
            <Link href="/pricing" className={styles.navLink} onMouseEnter={closeMenuImmediately}>Pricing</Link>
            <Link href="#Contact Sales" className={styles.navLink} onMouseEnter={closeMenuImmediately}>Contact Sales</Link>
            <Link href="#Support" className={styles.navLink} onMouseEnter={closeMenuImmediately}>Support</Link>
            <Link href="#Resources" className={styles.navLink} onMouseEnter={closeMenuImmediately}>Resources</Link>
          </div>
        </nav>
      </div>
    </>
  );
}
