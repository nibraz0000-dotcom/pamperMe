"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './software.module.css';
import { ArrowLeft } from 'lucide-react';

export default function SoftwarePage() {
  const router = useRouter();
  
  const [selectedSoftware, setSelectedSoftware] = useState('');
  const [otherValue, setOtherValue] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const options = [
    { id: 'zenoti', label: 'Zenoti' },
    { id: 'fresha', label: 'Fresha' },
    { id: 'vagaro', label: 'Vagaro' },
    { id: 'treatwell', label: 'Treatwell' },
    { id: 'square', label: 'Square' },
    { id: 'timely', label: 'Timely' },
    { id: 'mindbody', label: 'Mindbody' },
    { id: 'acuity', label: 'Acuity' },
    { id: 'booksy', label: 'Booksy' },
    { id: 'setmore', label: 'Setmore' },
    { id: 'other', label: 'Other' }
  ];

  const handleNext = () => {
    setHasSubmitted(true);
    
    if (!selectedSoftware) return;
    
    if (selectedSoftware === 'other') {
      if (!otherValue.trim() || otherValue.length > 20) return;
    }

    // Persist and navigate to the success page
    try {
      localStorage.setItem('previousSoftware', selectedSoftware === 'other' ? otherValue.trim() : selectedSoftware);
    } catch {
      // ignore
    }

    router.push('/account-type/create/success');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={styles.progressSegment80} />
      </div>

      <div className={styles.headerNav}>
        <button className={styles.backBtn} onClick={() => router.push('/account-type/create/source')}>
          <ArrowLeft size={20} />
        </button>
        <div className={styles.navActions}>
          <button className={styles.closeBtn} onClick={() => router.push('/user-account/workspace')}>
            Close
          </button>
          <button 
            className={`${styles.doneBtn} ${!selectedSoftware ? styles.doneBtnDisabled : ''}`} 
            onClick={handleNext}
          >
            Done
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.subtitle}>Account setup</div>
        <h1 className={styles.title}>Which software are you currently using?</h1>
        <p className={styles.description}>
          If you're looking to switch, we can help speed up your business setup and import your data into your new PamperMe account.
        </p>

        <div className={styles.optionsGrid}>
          {options.map((option) => (
            <div 
              key={option.id} 
              className={option.id === 'other' ? styles.otherOptionWrapper : ''}
            >
              <div 
                className={`
                  ${styles.softwareCard} 
                  ${selectedSoftware === option.id ? styles.softwareCardActive : ''}
                  ${hasSubmitted && option.id === 'other' && selectedSoftware === 'other' && (!otherValue.trim() || otherValue.length > 20) ? styles.softwareCardError : ''}
                `} 
                onClick={() => setSelectedSoftware(option.id)}
              >
                <div className={`${styles.radioCircle} ${selectedSoftware === option.id ? styles.radioCircleActive : ''}`}>
                  {selectedSoftware === option.id && <div className={styles.radioDot} />}
                </div>
                
                {option.id === 'other' && selectedSoftware === 'other' ? (
                  <div className={styles.inlineInputContainer}>
                    <input 
                      type="text" 
                      className={styles.inlineInput}
                      placeholder="What other software?"
                      value={otherValue}
                      onChange={(e) => setOtherValue(e.target.value)}
                      maxLength={20}
                      autoFocus
                    />
                    <div className={styles.inlineCharCount}>
                      {otherValue.length}/20
                    </div>
                  </div>
                ) : (
                  <div className={styles.softwareLabel}>{option.label}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
