"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './location.module.css';
import { ArrowLeft, Check, Sparkles } from 'lucide-react';

interface LocationOption {
  id: string;
  label: string;
}

const LOCATION_OPTIONS: LocationOption[] = [
  {
    id: 'physical',
    label: 'Clients come to me at a physical location',
  },
  {
    id: 'mobile',
    label: 'I visit my clients as a mobile operator',
  },
  {
    id: 'virtual',
    label: 'I provide virtual services online',
  },
];

export default function ServiceLocationPage() {
  const router = useRouter();
  const [selectedLocations, setSelectedLocations] = useState<string[]>(['physical']);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleToggle = (id: string) => {
    setErrorMessage('');
    if (selectedLocations.includes(id)) {
      setSelectedLocations(selectedLocations.filter((loc) => loc !== id));
    } else {
      setSelectedLocations([...selectedLocations, id]);
    }
  };

  const handleNext = () => {
    if (selectedLocations.length === 0) {
      setErrorMessage('Please select at least one option to continue.');
      return;
    }

    // Next proceeds ONLY when "Clients come to me at a physical location" is exclusively selected.
    // If mobile operator or virtual services are included (or selected on their own, or all three selected), show Coming Soon popup.
    const isOnlyPhysical =
      selectedLocations.length === 1 && selectedLocations.includes('physical');

    if (!isOnlyPhysical) {
      setShowComingSoon(true);
      return;
    }

    // Save selection
    try {
      localStorage.setItem('serviceLocations', JSON.stringify(selectedLocations));
    } catch {
      // ignore
    }

    // When physical location is selected, proceed to venue location setup
    router.push('/account-type/create/venue');
  };

  return (
    <div className={styles.container}>
      {/* Top 5-segment Progress Bar: Steps 1, 2, 3, 4 active */}
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={styles.progressSegment} />
      </div>

      {/* Header Navigation with Back, Close, and Next */}
      <div className={styles.headerNav}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => router.push('/account-type/create/team-size')}
          aria-label="Go back to team size step"
        >
          <ArrowLeft size={20} />
        </button>

        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => router.push('/user-account/workspace')}
          >
            Close
          </button>

          <button type="button" className={styles.nextBtn} onClick={handleNext}>
            Next <span>→</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className={styles.content}>
        <div className={styles.subtitle}>Account setup</div>
        <h1 className={styles.title}>Where do you provide your services?</h1>

        {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}

        {/* Options List: Multi-select or single-select */}
        <div className={styles.optionsList}>
          {LOCATION_OPTIONS.map((option) => {
            const isSelected = selectedLocations.includes(option.id);

            return (
              <button
                key={option.id}
                type="button"
                className={`${styles.optionCard} ${
                  isSelected ? styles.optionCardActive : ''
                }`}
                onClick={() => handleToggle(option.id)}
              >
                <span className={styles.optionLabel}>{option.label}</span>
                {isSelected && (
                  <span className={styles.checkIcon}>
                    <Check size={14} strokeWidth={3} />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Coming Soon Modal Popup */}
      {showComingSoon && (
        <div className={styles.modalOverlay} onClick={() => setShowComingSoon(false)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalBadge}>Coming Soon</div>
            <h2 className={styles.modalTitle}>
              {selectedLocations.includes('physical')
                ? 'Mobile & Virtual Services Coming Soon'
                : 'Feature In Development'}
            </h2>
            <p className={styles.modalDesc}>
              {selectedLocations.includes('physical')
                ? 'Mobile operator visits and virtual online services are currently under development. Please uncheck Option 2 and Option 3 and continue with physical location only to proceed.'
                : 'Mobile visits and virtual online services are currently under development. Please select "Clients come to me at a physical location" to continue setting up your account.'}
            </p>
            <div className={styles.modalBtnGroup}>
              <button
                type="button"
                className={styles.modalPrimaryBtn}
                onClick={() => {
                  setSelectedLocations(['physical']);
                  setShowComingSoon(false);
                  try {
                    localStorage.setItem('serviceLocations', JSON.stringify(['physical']));
                  } catch {
                    // ignore
                  }
                  router.push('/account-type/create/venue');
                }}
              >
                {selectedLocations.includes('physical')
                  ? 'Uncheck 2 & 3 and Continue'
                  : 'Select Option 1 and Continue'}
              </button>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => setShowComingSoon(false)}
              >
                I'll edit manually
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
