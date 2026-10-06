'use client';
import React, { useState, useEffect } from 'react';
import styles from './googleOneTap.module.css';
import { getStoredUser, loginUser, AUTH_EVENT_NAME } from '../../utils/auth';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

interface GoogleOneTapProps {
  delayMs?: number;
}

export default function GoogleOneTapPrompt({ delayMs = 5000 }: GoogleOneTapProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  useEffect(() => {
    // If user is already logged in, do not show popup
    if (getStoredUser()) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      // Recheck in case logged in during the 5s
      if (!getStoredUser()) {
        setIsVisible(true);
      }
    }, delayMs);

    const handleAuthChange = () => {
      if (getStoredUser()) {
        setIsVisible(false);
      }
    };

    window.addEventListener(AUTH_EVENT_NAME, handleAuthChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener(AUTH_EVENT_NAME, handleAuthChange);
    };
  }, [delayMs]);

  const handleContinue = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      loginUser({
        name: 'Alex Rivera',
        email: 'alex.rivera@gmail.com',
        role: 'Business Owner',
        avatarText: 'AR'
      });
      setIsAuthenticating(false);
      setIsVisible(false);
    }, 600);
  };

  const handleClose = () => {
    if (!isAuthenticating) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className={styles.oneTapContainer}>
      <div className={styles.oneTapCard}>
        {/* Top Header */}
        <div className={styles.oneTapHeader}>
          <div className={styles.oneTapBrand}>
            <GoogleIcon />
            <span>Sign in to pamperMe with Google</span>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={handleClose}
            aria-label="Close Google sign in"
          >
            &times;
          </button>
        </div>

        {/* Account Row */}
        <div className={styles.oneTapBody}>
          <div className={styles.accountRow}>
            <div className={styles.avatar}>AR</div>
            <div className={styles.accountInfo}>
              <div className={styles.accountName}>Alex Rivera</div>
              <div className={styles.accountEmail}>alex.rivera@gmail.com</div>
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            className={styles.continueBtn}
            onClick={handleContinue}
            disabled={isAuthenticating}
          >
            {isAuthenticating ? (
              <span className={styles.spinner}></span>
            ) : (
              'Continue as Alex'
            )}
          </button>

          {/* Disclaimer Footer */}
          <div className={styles.oneTapFooter}>
            To continue, Google will share your name, email address, and profile picture with pamperMe. See pamperMe's Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}
