'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../../free-trial/freeTrial.module.css';
import { getStoredUser, logoutUser, UserSession, AUTH_EVENT_NAME } from '../../../utils/auth';

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
  </svg>
);

const businessClips = [
  '/videos/clip_42867.mp4',   // Salon Hair Wash & Care
  '/videos/barber_40124.mp4', // Barber Grooming
  '/videos/spa_42458.mp4',    // Med Spa & Facial Treatment
  '/videos/spa_42459.mp4',    // Luxury Spa Massage
  '/videos/clip_42865.mp4',   // Salon Styling
  '/videos/barber_40120.mp4', // Barber Cut & Style
];

const brickRows = [
  ['Barbershop', 'Spa', 'Yoga Studio'],
  ['Med Spa', 'Brow & Lash'],
  ['Gym & Fitness', 'Salon', 'Hair Removal'],
  ['Massage Studio', 'Nail Salon'],
  ['Aesthetic Clinic', 'Personal Trainer', 'Acupuncture'],
];

export default function WorkspaceOverviewPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);

  useEffect(() => {
    const user = getStoredUser();
    if (!user) {
      router.replace('/user-account');
      return;
    }
    setCurrentUser(user);

    const handleAuthChange = () => {
      const u = getStoredUser();
      if (!u) {
        router.replace('/user-account');
      } else {
        setCurrentUser(u);
      }
    };

    window.addEventListener(AUTH_EVENT_NAME, handleAuthChange);
    return () => {
      window.removeEventListener(AUTH_EVENT_NAME, handleAuthChange);
    };
  }, [router]);

  const handleVideoEnded = () => {
    setCurrentClipIndex((prevIndex) => (prevIndex + 1) % businessClips.length);
  };

  return (
    <div className={styles.pageWrapper}>
      {/* Top Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.brandName}>
          <Link href="/">pamperMe</Link>
        </div>
        <div className={styles.navRight}>
          <div className={styles.accountWrapper}>
            <button
              className={styles.avatarCircle}
              onClick={() => setShowPopup(!showPopup)}
              aria-label="Account Menu"
            >
              {currentUser?.avatarText || 'AR'}
            </button>

            {/* Account Popup */}
            {showPopup && (
              <div className={styles.popupMenu}>
                <div className={styles.popupHeader}>
                  <div className={styles.popupAvatar}>
                    {currentUser?.avatarText || 'AR'}
                  </div>
                  <div className={styles.popupUserInfo}>
                    <div className={styles.popupName}>{currentUser?.name || 'Business Owner'}</div>
                    <div className={styles.popupDesc}>{currentUser?.email || 'Salon Manager'}</div>
                  </div>
                </div>

                <div className={styles.buildProfileCard}>
                  <div className={styles.buildProfileText}>Build your own profile</div>
                  <Link
                    href="/account-type"
                    className={styles.buildProfileBtn}
                    onClick={() => setShowPopup(false)}
                    style={{ textDecoration: 'none', display: 'inline-block' }}
                  >
                    Start now
                  </Link>
                </div>

                <div className={styles.popupLinks}>
                  <button className={styles.menuItem}>My profile</button>
                  <button className={styles.menuItem}>Personal settings</button>
                  <a
                    href="/help-center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.menuItem}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    Help & support
                  </a>
                  <button className={styles.menuItem}>English</button>
                  <button
                    className={styles.menuItem}
                    onClick={() => {
                      logoutUser();
                      setShowPopup(false);
                      router.push('/user-account');
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Main Split Content Area */}
      <div className={styles.overviewLayout}>
        {/* Left Side: Overview Content */}
        <div className={styles.overviewLeftPanel}>
          <h1 className={styles.cardTitle}>Start Your Free Trial</h1>

          <div className={styles.cardPoints}>
            <div className={styles.pointRow}>
              <ArrowRightIcon />
              <span>Full access to all premium features for 14 days.</span>
            </div>
            <div className={styles.pointRow}>
              <ArrowRightIcon />
              <span>No credit card required. Cancel anytime.</span>
            </div>
          </div>

          <div className={styles.cardActions}>
            <Link
              href="/account-type"
              className={styles.startNowLargeBtn}
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Start now
            </Link>
            <Link
              href="/help-center"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.learnMoreLink}
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Right Side: Black Video Box with looping video + glassOverlay + brickGrid */}
        <div className={styles.loginBackground}>
          <video
            key={businessClips[currentClipIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
            className={styles.videoBackground}
          >
            <source src={businessClips[currentClipIndex]} type="video/mp4" />
          </video>

          <div className={styles.glassOverlay}>
            <h2>Built for businesses. Designed to help you grow.</h2>
            <div className={styles.brickGrid}>
              {brickRows.map((row, rIdx) => (
                <div key={rIdx} className={styles.brickRow}>
                  {row.map((cat) => (
                    <span key={cat} className={styles.categoryText}>
                      {cat}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
