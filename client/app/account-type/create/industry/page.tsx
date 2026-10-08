"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './industry.module.css';
import { ArrowLeft, Sparkles, Flower2, Dumbbell, Layers } from 'lucide-react';

interface IndustryOption {
  id: 'beauty' | 'wellness' | 'fitness' | 'mixed';
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
}

const INDUSTRIES: IndustryOption[] = [
  {
    id: 'beauty',
    title: 'Beauty',
    description: 'Hair salons, barbershops, nail studios, lashes, aesthetics & makeup',
    icon: Sparkles,
  },
  {
    id: 'wellness',
    title: 'Wellness',
    description: 'Day spas, massage clinics, acupuncture, mental health & therapy',
    icon: Flower2,
  },
  {
    id: 'fitness',
    title: 'Fitness',
    description: 'Gyms, personal training studios, yoga, pilates & sports facilities',
    icon: Dumbbell,
  },
  {
    id: 'mixed',
    title: 'Mixed',
    description: 'Combination of beauty, wellness, and fitness services under one roof',
    icon: Layers,
  },
];

export default function IndustrySelectionPage() {
  const router = useRouter();
  const [selectedIndustry, setSelectedIndustry] = useState<
    'beauty' | 'wellness' | 'fitness' | 'mixed' | null
  >(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleNext = () => {
    if (!selectedIndustry) {
      setErrorMessage('Please select an industry to continue.');
      return;
    }

    // Save selection in localStorage
    try {
      localStorage.setItem('selectedIndustry', selectedIndustry);
    } catch {
      // ignore
    }

    // Navigate to category page with industry query param
    router.push(`/account-type/create/category?industry=${selectedIndustry}`);
  };

  return (
    <div className={styles.container}>
      {/* Top 5-segment Progress Bar: Step 1 filled, Step 2 half filled */}
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={styles.progressSegmentHalf} />
        <div className={styles.progressSegment} />
        <div className={styles.progressSegment} />
        <div className={styles.progressSegment} />
      </div>

      {/* Header Navigation with Back and Next */}
      <div className={styles.headerNav}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => router.push('/account-type/create')}
          aria-label="Go back"
        >
          <ArrowLeft size={20} />
        </button>

        <button type="button" className={styles.nextBtn} onClick={handleNext}>
          Next <span>→</span>
        </button>
      </div>

      {/* Content Area */}
      <div className={styles.content}>
        <div className={styles.subtitle}>Account setup</div>
        <h1 className={styles.title}>Select your industry</h1>
        <p className={styles.description}>
          Choose the primary focus of your business, or select Mixed if you offer services across multiple sectors.
        </p>

        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

        <div className={styles.grid}>
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry === ind.id;

            return (
              <button
                key={ind.id}
                type="button"
                className={`${styles.card} ${isSelected ? styles.cardActive : ''}`}
                onClick={() => {
                  setSelectedIndustry(ind.id);
                  setErrorMessage('');
                }}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconWrapper}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.radioCircle}>
                    {isSelected && <div className={styles.radioInner} />}
                  </div>
                </div>
                <div>
                  <div className={styles.cardTitle}>{ind.title}</div>
                  <div className={styles.cardDesc}>{ind.description}</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
