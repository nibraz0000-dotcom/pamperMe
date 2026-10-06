"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../dashboard.module.css";
import DashboardSidebar from "../../../../components/dashboard/DashboardSidebar";
import { getStoredUser, UserSession } from "../../../../utils/auth";

export default function PersonalInfoPage() {
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isProfileHidden, setIsProfileHidden] = useState(false);

  const [legalName, setLegalName] = useState("raheem tda");
  const [emailAddress, setEmailAddress] = useState("n********0@gmail.com");
  const [mobileNumber, setMobileNumber] = useState("+91 *******961");

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser(user);
      if (user.name) setLegalName(user.name);
      if (user.email) setEmailAddress(user.email);
    }
  }, []);

  const handleSaveContact = () => {
    setIsEditing(false);
    alert("Personal contact details updated successfully!");
  };

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
              Account settings • <span className={styles.breadcrumbHighlight}>Personal info</span>
            </div>
          </div>

          <div className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Personal info</h1>
              <p className={styles.pageSubtitle}>
                Customize your personal details and how we can contact you.{" "}
                <a href="#learn-more" onClick={(e) => e.preventDefault()}>
                  Learn more.
                </a>
              </p>
            </div>
          </div>

          {/* Card 1: Contact */}
          <div className={styles.detailSectionCard}>
            <div className={styles.cardTopRow}>
              <h2 className={styles.cardSectionHeading}>Contact</h2>
              <button
                type="button"
                className={styles.pillActionBtn}
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Done" : "Edit"}
              </button>
            </div>

            {isEditing ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "12px" }}>
                <div>
                  <label className={styles.infoLabel}>Legal Name</label>
                  <input
                    type="text"
                    value={legalName}
                    onChange={(e) => setLegalName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid #e2e8f0",
                      marginTop: "4px",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label className={styles.infoLabel}>Email address</label>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid #e2e8f0",
                      marginTop: "4px",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label className={styles.infoLabel}>Mobile number</label>
                  <input
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "10px",
                      border: "1.5px solid #e2e8f0",
                      marginTop: "4px",
                      fontSize: "14px",
                      outline: "none"
                    }}
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSaveContact}
                  className={styles.addBtn}
                  style={{ alignSelf: "flex-start", marginTop: "8px" }}
                >
                  Save Changes
                </button>
              </div>
            ) : (
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Legal Name</span>
                  <span className={styles.infoValue}>{legalName}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Mobile number</span>
                  <span className={styles.infoValue}>{mobileNumber}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email address</span>
                  <span className={styles.infoValue}>{emailAddress}</span>
                </div>
              </div>
            )}
          </div>

          {/* Card 2: Online profile visibility */}
          <div className={styles.detailSectionCard}>
            <h2 className={styles.cardSectionHeading}>Online profile visibility</h2>
            <p className={styles.cardSubtitleText}>
              Hide your professional profile on the marketplace.
            </p>
            <button
              type="button"
              className={styles.pillActionBtn}
              onClick={() => setIsProfileHidden(!isProfileHidden)}
              style={isProfileHidden ? { backgroundColor: "#0f172a", color: "#ffffff", borderColor: "#0f172a" } : {}}
            >
              {isProfileHidden ? "Profile Hidden (Click to Show)" : "Hide profile"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
