"use client";

import React, { useState } from 'react';
import Navbar from '../../components/navBar/Navbar';
import styles from './page.module.css';
import pageStyles from '../page.module.css';
import Cards from './Cards';
import CompareFeatures from './CompareFeatures';
import Footer from '../../components/footer';

export default function Pricing() {
  const [addonEnabled, setAddonEnabled] = useState(false);

  const scrollToPlans = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const topCardEl = document.getElementById('top-card-sample') || document.querySelector('[class*="topCard"]');
    if (topCardEl) {
      // Align the bottom line of the inner card + 15px buffer so the full card outline is visible
      const targetBottom = topCardEl.getBoundingClientRect().bottom + window.scrollY;
      const y = targetBottom - window.innerHeight + 15;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  return (
    <div className={pageStyles.container}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Software that grows with your business</h1>
          <p className={styles.subtitle}>A simple plan that scales as your business does</p>
          <a href="#plans" className={styles.arrowLink} onClick={scrollToPlans}>
            See plans and features
            <span className={styles.arrow}>↓</span>
          </a>
        </div>

        <Cards addonEnabled={addonEnabled} setAddonEnabled={setAddonEnabled} />
        <CompareFeatures addonEnabled={addonEnabled} />
      </main>

      <Footer />
    </div>
  );
}
