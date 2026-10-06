"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../settings.module.css";

export default function PersonalInfoPage() {
  const [profileVisible, setProfileVisible] = useState(true);

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/settings">Account settings</Link> • Personal Info
        </div>
        <h1 className={styles.pageTitle}>Personal Info</h1>
      </div>

      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionHeader}>Contact</h2>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Legal Name</div>
            <div className={styles.fieldValue}>Tereika Garden</div>
          </div>
          <button className={styles.editBtn}>Edit</button>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Mobile number</div>
            <div className={styles.fieldValue}>+44 2843 3843</div>
          </div>
          <button className={styles.editBtn}>Edit</button>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Email address</div>
            <div className={styles.fieldValue}>tereikagarden@gmail.com</div>
          </div>
          <button className={styles.editBtn}>Edit</button>
        </div>
      </div>

      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionHeader}>Online profile visibility</h2>
        
        <div className={styles.fieldRow}>
          <div className={styles.fieldInfo}>
            <div className={styles.fieldLabel}>Show your online profile to clients</div>
            <div className={styles.fieldValue}>Show profile</div>
          </div>
          <label className={styles.toggleSwitch}>
            <input 
              type="checkbox" 
              checked={profileVisible} 
              onChange={() => setProfileVisible(!profileVisible)} 
            />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    </div>
  );
}
