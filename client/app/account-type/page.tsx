"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../free-trial/freeTrial.module.css';
import { getStoredUser, UserSession, AUTH_EVENT_NAME } from '../../utils/auth';

const BackArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export default function AccountTypePage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [selectedSetupOption, setSelectedSetupOption] = useState<'create' | 'join' | null>(null);
  const [businessName, setBusinessName] = useState('');
  const [joinCode, setJoinCode] = useState('');

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

  return (
    <div className={styles.setupContainer}>
      {/* Top Left Back Arrow */}
      <Link
        href="/user-account/workspace"
        className={styles.setupBackBtn}
        aria-label="Go back to workspace"
      >
        <BackArrowIcon />
      </Link>

      {/* Left Panel */}
      <div className={styles.setupLeftPanel}>
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
          <Link
            href="/account-type/join"
            className={styles.setupOptionCard}
          >
            <div className={styles.setupCardLeft}>
              <div className={styles.setupCardTitle}>Join an existing business on pamperMe</div>
              <div className={styles.setupCardSubtitle}>Find the business you want to join</div>
            </div>
            <span className={styles.setupCardArrow}>→</span>
          </Link>
        </div>
      </div>

      {/* Right Panel with Organic Curved Boundary & 3-Professionals Hero Photo */}
      <div className={styles.setupRightPanel}>
        <svg
          className={styles.setupCurvedDivider}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q90,50 0,100 L0,100 Z"
            fill="#ffffff"
          />
        </svg>

        <img
          src="/professionals_hero.jpg"
          alt="pamperMe for professionals"
          className={styles.setupHeroImg}
        />

        <div className={styles.setupBrandWatermark}>
          <div className={styles.setupBrandLogo}>pamperMe</div>
          <div className={styles.setupBrandTagline}>for professionals</div>
        </div>
      </div>
    </div>
  );
}
