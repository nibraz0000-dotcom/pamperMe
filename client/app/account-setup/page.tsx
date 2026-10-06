"use client";

import Link from 'next/link';
import styles from '../free-trial/freeTrial.module.css';
import { useState, useEffect } from 'react';
import { getStoredUser, logoutUser, UserSession, AUTH_EVENT_NAME } from '../../utils/auth';

const BackArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
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

export default function AccountSetupPage() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSetupOption, setSelectedSetupOption] = useState<'create' | 'join' | null>(null);
  const [businessName, setBusinessName] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [currentClipIndex, setCurrentClipIndex] = useState(0);

  useEffect(() => {
    setCurrentUser(getStoredUser());
    const handleAuthChange = () => {
      setCurrentUser(getStoredUser());
    };
    window.addEventListener(AUTH_EVENT_NAME, handleAuthChange);
    return () => {
      window.removeEventListener(AUTH_EVENT_NAME, handleAuthChange);
    };
  }, []);

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

                <div className={styles.popupLinks}>
                  <Link
                    href="/free-trial"
                    className={styles.menuItem}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    Overview
                  </Link>
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
                      window.location.href = '/free-trial';
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
        {/* Left Side: Setup Options Form */}
        <div className={styles.overviewLeftPanel}>
          <Link
            href="/free-trial"
            className={styles.setupBackBtn}
            aria-label="Go back to Overview"
          >
            <BackArrowIcon />
          </Link>

          <h1 className={styles.setupTitle}>
            How would you like to set up your professional account?
          </h1>

          <div className={styles.setupCardsList}>
            {/* Option 1: Create a new business account */}
            <button
              type="button"
              className={`${styles.setupOptionCard} ${selectedSetupOption === 'create' ? styles.setupOptionCardActive : ''}`}
              onClick={() => setSelectedSetupOption(selectedSetupOption === 'create' ? null : 'create')}
            >
              <div className={styles.setupCardLeft}>
                <div className={styles.setupCardTitle}>Create a new business account</div>
                <div className={styles.setupCardSubtitle}>Run your business on pamperMe</div>
              </div>
              <span className={styles.setupCardArrow}>→</span>
            </button>

            {selectedSetupOption === 'create' && (
              <div className={styles.setupSubForm}>
                <div className={styles.setupSubFormTitle}>Set up your business profile</div>
                <input
                  type="text"
                  placeholder="Business or Salon Name (e.g. Luxe Studio)"
                  className={styles.setupSubInput}
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  autoFocus
                />
                <button
                  type="button"
                  className={styles.setupSubmitBtn}
                  onClick={() => alert(`Business "${businessName || 'Luxe Studio'}" created successfully!`)}
                >
                  Continue to Dashboard →
                </button>
              </div>
            )}

            {/* Option 2: Join an existing business */}
            <button
              type="button"
              className={`${styles.setupOptionCard} ${selectedSetupOption === 'join' ? styles.setupOptionCardActive : ''}`}
              onClick={() => setSelectedSetupOption(selectedSetupOption === 'join' ? null : 'join')}
            >
              <div className={styles.setupCardLeft}>
                <div className={styles.setupCardTitle}>Join an existing business on pamperMe</div>
                <div className={styles.setupCardSubtitle}>Find the business you want to join</div>
              </div>
              <span className={styles.setupCardArrow}>→</span>
            </button>

            {selectedSetupOption === 'join' && (
              <div className={styles.setupSubForm}>
                <div className={styles.setupSubFormTitle}>Find your team or workspace</div>
                <input
                  type="text"
                  placeholder="Enter 6-digit workspace invite code or business name"
                  className={styles.setupSubInput}
                  value={joinCode}
                  onChange={(e) => setJoinCode(e.target.value)}
                  autoFocus
                />
                <button
                  type="button"
                  className={styles.setupSubmitBtn}
                  onClick={() => alert(`Request to join "${joinCode || 'Workspace'}" sent!`)}
                >
                  Request to Join →
                </button>
              </div>
            )}
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
