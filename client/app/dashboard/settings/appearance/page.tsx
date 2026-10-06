"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../dashboard.module.css";
import DashboardSidebar from "../../../../components/dashboard/DashboardSidebar";
import { getStoredUser, UserSession } from "../../../../utils/auth";

type ThemeMode = "light" | "dark" | "system";

export default function AppearanceSettingsPage() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<ThemeMode>("light");

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
          {/* Breadcrumbs */}
          <div className={styles.breadcrumbNav}>
            <Link href="/dashboard/settings" className={styles.backBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span>Back</span>
            </Link>
            <div className={styles.breadcrumbText}>
              Account settings • <span className={styles.breadcrumbHighlight}>Appearance</span>
            </div>
          </div>

          <div className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Appearance</h1>
            </div>
          </div>

          {/* Theme Card */}
          <div className={styles.detailSectionCard}>
            <h2 className={styles.cardSectionHeading}>Theme</h2>

            <div className={styles.themeGrid}>
              {/* Option 1: Light */}
              <div
                className={`${styles.themeOption} ${selectedTheme === "light" ? styles.themeOptionActive : ""}`}
                onClick={() => setSelectedTheme("light")}
              >
                <div className={styles.themeIcon}>
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
                <span className={styles.themeLabel}>Light</span>
              </div>

              {/* Option 2: Dark */}
              <div
                className={`${styles.themeOption} ${selectedTheme === "dark" ? styles.themeOptionActive : ""}`}
                onClick={() => setSelectedTheme("dark")}
              >
                <div className={styles.themeIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                  </svg>
                </div>
                <span className={styles.themeLabel}>Dark</span>
              </div>

              {/* Option 3: System */}
              <div
                className={`${styles.themeOption} ${selectedTheme === "system" ? styles.themeOptionActive : ""}`}
                onClick={() => setSelectedTheme("system")}
              >
                <div className={styles.themeIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className={styles.themeLabel}>System</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
