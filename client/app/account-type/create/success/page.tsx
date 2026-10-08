"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './success.module.css';
import { Check, User } from 'lucide-react';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconContainer}>
          <User size={36} color="#fff" strokeWidth={2.5} />
          <div className={styles.badgeContainer}>
            <Check size={12} color="#fff" strokeWidth={4} />
          </div>
        </div>
        <h1 className={styles.title}>Your workspace is waiting !</h1>
        <p className={styles.subtitle}>Enjoy 1 month free of using PamperMe for business</p>
        <button
          className={styles.doneBtn}
          onClick={() => router.push('/operations')}
        >
          Done
        </button>
      </div>
    </div>
  );
}
