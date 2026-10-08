"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './teamSize.module.css';
import { ArrowLeft, Lightbulb } from 'lucide-react';

interface TeamSizeOption {
  id: string;
  label: string;
}

const TEAM_SIZE_OPTIONS: TeamSizeOption[] = [
  { id: 'independent', label: "I'm an independent" },
  { id: '2-5', label: '2-5 people' },
  { id: '6-10', label: '6-10 people' },
  { id: '11-20', label: '11-20 people' },
  { id: '20+', label: '20+ people' },
];

export default function TeamSizePage() {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (!selectedSize) {
      setErrorMessage('Please select your team size to continue.');
      return;
    }

    try {
      localStorage.setItem('teamSize', selectedSize);
    } catch {
      // ignore
    }

    // Proceed to service location step
    router.push('/account-type/create/location');
  };

  return (
    <div className={styles.container}>
      {/* Top 5-segment Progress Bar: Steps 1, 2, 3 active */}
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={styles.progressSegment} />
        <div className={styles.progressSegment} />
      </div>

      {/* Header Navigation with Back and Next */}
      <div className={styles.headerNav}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => router.push('/account-type/create/category')}
          aria-label="Go back to category selection"
        >
          <ArrowLeft size={20} />
        </button>

        <button type="button" className={styles.nextBtn} onClick={handleNext}>
          Next <span>→</span>
        </button>
      </div>

      {/* Main Content */}
      <div className={styles.content}>
        <div className={styles.subtitle}>Account setup</div>
        <h1 className={styles.title}>What's your team size?</h1>
        <p className={styles.description}>
          This will help us set up your calendar correctly
        </p>

        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

        {/* Options List */}
        <div className={styles.optionsList}>
          {TEAM_SIZE_OPTIONS.map((option) => {
            const isSelected = selectedSize === option.id;

            return (
              <button
                key={option.id}
                type="button"
                className={`${styles.optionCard} ${
                  isSelected ? styles.optionCardActive : ''
                }`}
                onClick={() => {
                  setSelectedSize(option.id);
                  setErrorMessage('');
                }}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Notice box shown for any selection EXCEPT 'I'm an independent' */}
        {selectedSize && selectedSize !== 'independent' && (
          <div className={styles.noticeBox}>
            <Lightbulb size={20} className={styles.noticeIcon} />
            <div className={styles.noticeText}>
              We'll add 'Wendy' as an example employee so you can see how the system works. You can manage employees later once you're in!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
