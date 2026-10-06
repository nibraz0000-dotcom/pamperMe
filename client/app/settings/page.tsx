"use client";

import React from "react";
import Link from "next/link";
import styles from "./settings.module.css";

export default function SettingsOverviewPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>Account settings</h1>
      </div>

      <div className={styles.cardsContainer}>
        <Link href="/settings/personal-info" className={styles.settingCard}>
          <h2 className={styles.cardTitle}>Personal info</h2>
          <p className={styles.cardDesc}>
            Provide personal details and how we can reach you
          </p>
        </Link>

        <Link href="/settings/login-security" className={styles.settingCard}>
          <h2 className={styles.cardTitle}>Login & security</h2>
          <p className={styles.cardDesc}>
            Update your password and secure your account
          </p>
        </Link>

        <Link href="/settings/appearance" className={styles.settingCard}>
          <h2 className={styles.cardTitle}>Appearance</h2>
          <p className={styles.cardDesc}>
            Customize how pamperMe looks on your device
          </p>
        </Link>
      </div>
    </div>
  );
}
