"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './create.module.css';

export default function CreateBusinessAccountPage() {
  const router = useRouter();
  const [businessName, setBusinessName] = useState('');
  const [website, setWebsite] = useState('');
  const [websiteError, setWebsiteError] = useState('');

  const validateAndProceed = () => {
    // Reset error
    setWebsiteError('');

    // URL regex allowing domains like domain.com, www.domain.in
    const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,63})([\/\w \.-]*)*\/?$/i;

    if (website.trim().length > 0) {
      if (!urlRegex.test(website.trim())) {
        setWebsiteError('Please enter a valid website URL or domain (e.g., www.yoursite.com)');
        return;
      }
    }

    if (!businessName.trim()) {
      // Though not requested, usually business name is required. We'll just let it pass for now 
      // or we can add validation later. The audio only stressed about website validation.
    }

    // If all valid, navigate to industry selection step
    router.push('/account-type/create/industry');
  };

  return (
    <div className={styles.container}>
      {/* Top Progress Bar */}
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`}></div>
        <div className={styles.progressSegment}></div>
        <div className={styles.progressSegment}></div>
        <div className={styles.progressSegment}></div>
        <div className={styles.progressSegment}></div>
      </div>

      {/* Header Actions */}
      <div className={styles.headerActions}>
        <button className={styles.nextBtn} onClick={validateAndProceed}>
          Next <span>→</span>
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.subtitle}>Account setup</div>
        <h1 className={styles.title}>What's your business name?</h1>
        <p className={styles.description}>
          This is the brand name your clients will see. Your billing and legal name can be added later.
        </p>

        <div className={styles.formGroup}>
          <label className={styles.label}>Business name</label>
          <input 
            type="text" 
            className={styles.input} 
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>
            Website <span className={styles.labelOptional}>(Optional)</span>
          </label>
          <input 
            type="text" 
            className={`${styles.input} ${websiteError ? styles.inputError : ''}`}
            placeholder="www.yoursite.com"
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
              if (websiteError) setWebsiteError('');
            }}
          />
          {websiteError && <div className={styles.errorText}>{websiteError}</div>}
        </div>
      </div>
    </div>
  );
}
