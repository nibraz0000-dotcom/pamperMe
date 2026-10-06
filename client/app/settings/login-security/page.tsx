"use client";

import React from "react";
import Link from "next/link";
import styles from "../settings.module.css";

export default function LoginSecurityPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/settings">Account settings</Link> • Login & security
        </div>
        <h1 className={styles.pageTitle}>Login & security</h1>
      </div>

      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionHeader}>Login details</h2>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Password</div>
            <div className={styles.fieldValue}>Last updated 1 month ago</div>
          </div>
          <button className={styles.editBtn}>Update</button>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Google</div>
            <div className={styles.fieldValue}>Connected</div>
          </div>
          <button className={`${styles.editBtn} ${styles.disconnectBtn}`}>Disconnect</button>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Apple</div>
            <div className={styles.fieldValue}>Not connected</div>
          </div>
          <button className={`${styles.editBtn} ${styles.connectBtn}`}>Connect</button>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionHeader}>Trusted devices</h2>
        
        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Mac - Chrome</div>
            <div className={styles.fieldValue}>Active now • London, UK</div>
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>iPhone 13 - Safari</div>
            <div className={styles.fieldValue}>Last active 2 days ago • London, UK</div>
          </div>
        </div>
      </div>
    </div>
  );
}
