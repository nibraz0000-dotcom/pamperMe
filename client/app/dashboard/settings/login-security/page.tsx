"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../dashboard.module.css";
import DashboardSidebar from "../../../../components/dashboard/DashboardSidebar";
import { getStoredUser, UserSession } from "../../../../utils/auth";

export default function LoginSecurityPage() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [googleConnected, setGoogleConnected] = useState(true);
  const [appleConnected, setAppleConnected] = useState(false);

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
              Account settings • <span className={styles.breadcrumbHighlight}>Login & security</span>
            </div>
          </div>

          <div className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Login & security</h1>
              <p className={styles.pageSubtitle}>
                Update your password and secure your account.{" "}
                <a href="#learn-more" onClick={(e) => e.preventDefault()}>
                  Learn more.
                </a>
              </p>
            </div>
          </div>

          {/* Card 1: Login details */}
          <div className={styles.detailSectionCard}>
            <h2 className={styles.cardSectionHeading}>Login details</h2>
            <p className={styles.cardSubtitleText}>
              Password and connected social accounts used for login
            </p>

            {/* Password Row */}
            <div className={styles.connectionRow} style={{ borderTop: "none", paddingTop: "8px" }}>
              <div className={styles.connectionDetails}>
                <span className={styles.connectionName}>Password</span>
                <span className={styles.connectionStatus}>
                  Your password is managed by social logins.
                </span>
              </div>
              <button
                type="button"
                className={styles.pillActionBtn}
                onClick={() => alert("Password creation link sent to your verified email.")}
              >
                Create new password
              </button>
            </div>

            {/* Google Row */}
            <div className={styles.connectionRow}>
              <div className={styles.connectionLeft}>
                <div className={styles.socialIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                    <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.33 24 12 24z"/>
                    <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.97 0 12s.45 3.84 1.24 5.42l4.04-3.15z"/>
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                  </svg>
                </div>
                <div className={styles.connectionDetails}>
                  <span className={styles.connectionName}>Google</span>
                  <span className={`${styles.connectionStatus} ${googleConnected ? styles.connectionStatusActive : ""}`}>
                    {googleConnected ? "Connected" : "Not connected"}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className={styles.pillActionBtn}
                onClick={() => setGoogleConnected(!googleConnected)}
              >
                {googleConnected ? "Disconnect" : "Connect"}
              </button>
            </div>

            {/* Apple Row */}
            <div className={styles.connectionRow}>
              <div className={styles.connectionLeft}>
                <div className={styles.socialIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" color="#000000">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 1.01-2.87-.96.04-2.13.64-2.79 1.41-.57.66-1.07 1.73-.93 2.76 1.07.08 2.16-.55 2.71-1.3z"/>
                  </svg>
                </div>
                <div className={styles.connectionDetails}>
                  <span className={styles.connectionName}>Apple</span>
                  <span className={`${styles.connectionStatus} ${appleConnected ? styles.connectionStatusActive : ""}`}>
                    {appleConnected ? "Connected" : "Not connected"}
                  </span>
                </div>
              </div>
              <button
                type="button"
                className={styles.pillActionBtn}
                onClick={() => setAppleConnected(!appleConnected)}
              >
                {appleConnected ? "Disconnect" : "Connect"}
              </button>
            </div>
          </div>

          {/* Card 2: Trusted devices */}
          <div className={styles.detailSectionCard}>
            <h2 className={styles.cardSectionHeading}>Trusted devices</h2>
            <p className={styles.cardSubtitleText}>
              Devices that can skip two-factor authentication
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div className={styles.socialIconBox}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className={styles.connectionDetails}>
                  <span className={styles.connectionName}>Chrome on Windows (Current session)</span>
                  <span className={styles.connectionStatusActive}>Active now</span>
                </div>
              </div>
              <span style={{ fontSize: "13px", color: "#64748b" }}>This device</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
