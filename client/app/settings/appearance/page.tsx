"use client";

import React from "react";
import Link from "next/link";
import styles from "../settings.module.css";
import { useTheme } from "../../../utils/ThemeContext";

export default function AppearancePage() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.breadcrumb}>
          <Link href="/settings">Account settings</Link> • Appearance
        </div>
        <h1 className={styles.pageTitle}>Appearance</h1>
      </div>

      <div className={styles.sectionBlock}>
        <h2 className={styles.sectionHeader}>Theme</h2>

        <label className={styles.radioOption}>
          <input 
            type="radio" 
            name="theme" 
            value="light" 
            checked={theme === "light"} 
            onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
            className={styles.radioInput}
          />
          <span className={styles.radioLabel}>Light</span>
        </label>

        <label className={styles.radioOption}>
          <input 
            type="radio" 
            name="theme" 
            value="dark" 
            checked={theme === "dark"} 
            onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
            className={styles.radioInput}
          />
          <span className={styles.radioLabel}>Dark</span>
        </label>

        <label className={styles.radioOption}>
          <input 
            type="radio" 
            name="theme" 
            value="system" 
            checked={theme === "system"} 
            onChange={(e) => setTheme(e.target.value as "light" | "dark" | "system")}
            className={styles.radioInput}
          />
          <span className={styles.radioLabel}>System</span>
        </label>
      </div>
    </div>
  );
}
