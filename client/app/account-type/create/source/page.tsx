"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './source.module.css';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function SourcePage() {
  const router = useRouter();
  
  const [selectedSource, setSelectedSource] = useState('');
  const [otherValue, setOtherValue] = useState('');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const options = [
    { id: 'friend', label: 'Recommended by a friend' },
    { id: 'social', label: 'Social media' },
    { id: 'advert_mail', label: 'Advert in the mail' },
    { id: 'search', label: 'Search engine (e.g. Google, Bing)' },
    { id: 'ai', label: 'AI Chatbot (e.g. ChatGPT, Gemini, DeepSeek)' },
    { id: 'ratings', label: 'Ratings website (e.g. Capterra, Trustpilot)' },
    { id: 'other', label: 'Other' }
  ];

  const handleNext = () => {
    setHasSubmitted(true);
    
    if (!selectedSource) return;
    
    if (selectedSource === 'other') {
      if (!otherValue.trim() || otherValue.length > 12) return;
    }

    // Persist and navigate to the next step
    try {
      localStorage.setItem('discoverySource', selectedSource === 'other' ? otherValue.trim() : selectedSource);
    } catch {
      // ignore
    }

    router.push('/account-type/create/software');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={styles.progressSegment60} />
      </div>

      <div className={styles.headerNav}>
        <button className={styles.backBtn} onClick={() => router.push('/account-type/create/venue')}>
          <ArrowLeft size={20} />
        </button>
        <div className={styles.navActions}>
          <button className={styles.closeBtn} onClick={() => router.push('/user-account/workspace')}>
            Close
          </button>
          <button 
            className={`${styles.nextBtn} ${!selectedSource ? styles.nextBtnDisabled : ''}`} 
            onClick={handleNext}
          >
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.subtitle}>Account setup</div>
        <h1 className={styles.title}>How did you hear about PamperMe?</h1>

        <div className={styles.optionsList}>
          {options.map((option) => (
            <div key={option.id}>
              <div 
                className={styles.optionLabel} 
                onClick={() => setSelectedSource(option.id)}
              >
                <div className={`${styles.radioCircle} ${selectedSource === option.id ? styles.radioCircleActive : ''}`}>
                  {selectedSource === option.id && <div className={styles.radioDot} />}
                </div>
                {option.label}
              </div>
              
              {option.id === 'other' && selectedSource === 'other' && (
                <input 
                  type="text" 
                  className={`${styles.otherInput} ${hasSubmitted && (!otherValue.trim() || otherValue.length > 12) ? styles.inputError : ''}`}
                  placeholder="Please specify (max 12 chars)"
                  value={otherValue}
                  onChange={(e) => setOtherValue(e.target.value)}
                  maxLength={12}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
