"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../dashboard.module.css";
import DashboardSidebar from "../../../components/dashboard/DashboardSidebar";
import { getStoredUser, UserSession } from "../../../utils/auth";

export default function AccountSettingsPage() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <div className={styles.layout}>
      {/* Sidebar with active "Personal settings" */}
      <DashboardSidebar activeTab="settings" />

      {/* Main Content Area */}
      <main className={styles.main}>
        <header className={styles.topBar}>
          <div className={styles.userBadgeCircle}>
            {currentUser?.avatarText || "RT"}
          </div>
        </header>

        <div className={styles.contentWrapper}>
          <div className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Account settings</h1>
              <p className={styles.pageSubtitle}>
                Manage settings for your personal area.{" "}
                <a href="#learn-more" onClick={(e) => e.preventDefault()}>
                  Learn more.
                </a>
              </p>
            </div>
          </div>

          {/* 3 Settings Grid Cards */}
          <div className={styles.cardsGrid}>
            {/* 1. Personal info */}
            <Link
              href="/dashboard/settings/personal-info"
              className={styles.settingsCard}
            >
              <div className={styles.settingsCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className={styles.settingsCardTitle}>Personal info</h3>
              <p className={styles.settingsCardDesc}>
                Customize your personal details and how we can contact you
              </p>
            </Link>

            {/* 2. Login & security */}
            <Link
              href="/dashboard/settings/login-security"
              className={styles.settingsCard}
            >
              <div className={styles.settingsCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <h3 className={styles.settingsCardTitle}>Login & security</h3>
              <p className={styles.settingsCardDesc}>
                Update your password and secure your account
              </p>
            </Link>

            {/* 3. Appearance */}
            <Link
              href="/dashboard/settings/appearance"
              className={styles.settingsCard}
            >
              <div className={styles.settingsCardIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              </div>
              <h3 className={styles.settingsCardTitle}>Appearance</h3>
              <p className={styles.settingsCardDesc}>
                Select the look and feel of your platform
              </p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
