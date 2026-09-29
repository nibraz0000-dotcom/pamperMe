"use client";

import React, { useState } from 'react';
import styles from './cards.module.css';

export default function Cards() {
  const [standardAddon, setStandardAddon] = useState(false);
  const [teamsAddon, setTeamsAddon] = useState(false);

  return (
    <div className={styles.container} id="plans">
      <div className={styles.grid}>
        
        {/* FREE PLAN */}
        <div className={styles.card}>
          <h2 className={styles.planName}>Free</h2>
          <div className={styles.priceContainer}>
            <span className={styles.priceText}>Always free</span>
          </div>
          <button className={`${styles.btn} ${styles.btnOutline}`}>
            Get started <ArrowIcon />
          </button>
          
          <div className={styles.includesLabel}>Includes:</div>
          
          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconBlue}`}><HourglassIcon /></div>
              <span className={styles.categoryName}>Scheduling</span>
            </div>
            <ul className={styles.featureList}>
              <li><CheckIcon /> One event type</li>
              <li><CheckIcon /> One calendar connection</li>
              <li><CheckIcon /> One-on-one scheduling</li>
              <li><CheckIcon /> Customizable booking page</li>
              <li><CheckIcon /> Browser extension</li>
            </ul>
          </div>
        </div>

        {/* STANDARD PLAN */}
        <div className={styles.card}>
          <h2 className={styles.planName}>Standard</h2>
          
          <div className={styles.toggleWrapper}>
            <button 
              className={`${styles.toggle} ${standardAddon ? styles.toggleOn : ''}`}
              onClick={() => setStandardAddon(!standardAddon)}
            >
              <div className={styles.toggleKnob}></div>
            </button>
            <span className={styles.toggleLabel}>Add Notetaker & Callie</span>
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.currency}>$</span>
            <span className={styles.priceAmount}>{standardAddon ? '20' : '10'}</span>
            <div className={styles.priceSuffix}>
              <span className={styles.perUnit}>/seat/mo</span>
              <span className={styles.saveBadge}>Save 17%</span>
            </div>
          </div>
          
          <button className={`${styles.btn} ${styles.btnOutline}`}>
            Get started <ArrowIcon />
          </button>
          
          <div className={styles.includesLabel}>Everything in Free, and:</div>
          
          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconBlue}`}><HourglassIcon /></div>
              <span className={styles.categoryName}>Scheduling</span>
            </div>
            <ul className={styles.featureList}>
              <li><CheckIcon /> Unlimited event types</li>
              <li><CheckIcon /> Connect multiple calendars</li>
              <li><CheckIcon /> Automations & reminders</li>
              <li><CheckIcon /> Connect Hubspot, Mailchimp</li>
            </ul>
          </div>

          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconGreen}`}><CardIcon /></div>
              <span className={styles.categoryName}>Payments</span>
            </div>
            <ul className={styles.featureList}>
              <li><CheckIcon /> Connect Stripe, PayPal</li>
            </ul>
          </div>

          <div className={`${styles.addonSection} ${!standardAddon ? styles.disabled : ''}`}>
            <div className={styles.category}>
              <div className={styles.categoryHeader}>
                <div className={`${styles.iconWrapper} ${styles.iconPurple}`}><NotetakerIcon /></div>
                <span className={styles.categoryName}>Notetaker</span>
                {!standardAddon && <span className={styles.notIncludedBadge}>Not included</span>}
              </div>
              <ul className={styles.featureList}>
                <li><CheckIcon /> Recordings & transcripts</li>
                <li><CheckIcon /> Shareable meeting recaps</li>
                <li><CheckIcon /> Joins Zoom, Google Meet, Microsoft Teams</li>
              </ul>
            </div>

            <div className={styles.category}>
              <div className={styles.categoryHeader}>
                <div className={`${styles.iconWrapper} ${styles.iconLime}`}><CallieIcon /></div>
                <span className={styles.categoryName}>Callie</span>
                <span className={styles.betaBadge}>Beta</span>
              </div>
              <ul className={styles.featureList}>
                <li><CheckIcon /> An AI assistant that schedules over email</li>
                <li><CheckIcon /> Ask Callie interactive chat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TEAMS PLAN */}
        <div className={styles.popularWrapper}>
          <div className={styles.popularHeader}>POPULAR PLAN</div>
          <div className={`${styles.card} ${styles.popularCard}`}>
            <h2 className={styles.planName}>Teams</h2>
            
            <div className={styles.toggleWrapper}>
              <button 
                className={`${styles.toggle} ${teamsAddon ? styles.toggleOn : ''}`}
                onClick={() => setTeamsAddon(!teamsAddon)}
              >
                <div className={styles.toggleKnob}></div>
              </button>
              <span className={styles.toggleLabel}>Add Notetaker & Callie</span>
            </div>

            <div className={styles.priceContainer}>
              <span className={styles.currency}>$</span>
              <span className={styles.priceAmount}>{teamsAddon ? '26' : '16'}</span>
              <div className={styles.priceSuffix}>
                <span className={styles.perUnit}>/seat/mo</span>
                <span className={styles.saveBadge}>Save 20%</span>
              </div>
            </div>
            
            <button className={`${styles.btn} ${styles.btnDark}`}>
              Get started <ArrowIcon />
            </button>
            
            <div className={styles.includesLabel}>Everything in Standard, and:</div>
            
            <div className={styles.category}>
              <div className={styles.categoryHeader}>
                <div className={`${styles.iconWrapper} ${styles.iconBlue}`}><HourglassIcon /></div>
                <span className={styles.categoryName}>Scheduling</span>
              </div>
              <ul className={styles.featureList}>
                <li><CheckIcon /> Round-robin & team scheduling</li>
                <li><CheckIcon /> Qualify, route, & schedule leads</li>
                <li><CheckIcon /> Centrally managed event types</li>
                <li><CheckIcon /> Connect Marketo, Pardot</li>
                <li><CheckIcon /> Send meetings to Salesforce</li>
                <li><CheckIcon /> SSO security add-on (optional)</li>
              </ul>
            </div>

            <div className={`${styles.addonSection} ${!teamsAddon ? styles.disabled : ''}`}>
              <div className={styles.category}>
                <div className={styles.categoryHeader}>
                  <div className={`${styles.iconWrapper} ${styles.iconPurple}`}><NotetakerIcon /></div>
                  <span className={styles.categoryName}>Notetaker</span>
                  {!teamsAddon && <span className={styles.notIncludedBadge}>Not included</span>}
                </div>
                <ul className={styles.featureList}>
                  <li><CheckIcon /> Advanced admin controls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ENTERPRISE PLAN */}
        <div className={styles.card}>
          <h2 className={styles.planName}>Enterprise</h2>
          
          <div className={styles.priceContainerEnterprise}>
            <span className={styles.startsAt}>Starts at</span>
            <span className={styles.currency}>$</span>
            <span className={styles.priceAmount}>15k</span>
            <span className={styles.perUnit}>/yr</span>
          </div>
          
          <button className={`${styles.btn} ${styles.btnOutline}`}>
            Talk to sales <ArrowIcon />
          </button>
          
          <div className={styles.includesLabel}>Teams plan scheduling features, and:</div>
          
          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconBlue}`}><HourglassIcon /></div>
              <span className={styles.categoryName}>Scheduling</span>
            </div>
            <ul className={styles.featureList}>
              <li><CheckIcon /> Route with Salesforce lookup</li>
              <li><CheckIcon /> Connect Microsoft Dynamics</li>
              <li><CheckIcon /> Enable SSO & SAML</li>
              <li><CheckIcon /> Domain control</li>
              <li><CheckIcon /> Audit log compliance</li>
              <li><CheckIcon /> Data deletion API</li>
              <li><CheckIcon /> Onboarding & implementation</li>
              <li><CheckIcon /> Dedicated account support</li>
            </ul>
          </div>

          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconPurple}`}><NotetakerIcon /></div>
              <span className={styles.categoryName}>Notetaker</span>
              <span className={styles.optionalBadge}>Optional</span>
            </div>
            <ul className={styles.featureList}>
              <li><CheckIcon /> Inquire about Notetaker access</li>
            </ul>
          </div>

          <div className={styles.category}>
            <div className={styles.categoryHeader}>
              <div className={`${styles.iconWrapper} ${styles.iconLime}`}><CallieIcon /></div>
              <span className={styles.categoryName}>Callie</span>
              <span className={styles.betaBadge}>Beta</span>
            </div>
            <ul className={styles.featureList}>
              <li><CheckIcon /> Inquire about Callie access</li>
            </ul>
          </div>
        </div>

      </div>
      
      <div className={styles.disclaimer}>
        <div className={styles.disclaimerIcons}>
          <div className={`${styles.iconWrapperSmall} ${styles.iconPurple}`}><NotetakerIcon /></div>
          <div className={`${styles.iconWrapperSmall} ${styles.iconLime}`}><CallieIcon /></div>
        </div>
        <span><strong>Notetaker</strong> and <strong>Callie</strong> are only available in English at this time.</span>
      </div>
    </div>
  );
}

// SVG Components
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const CheckIcon = () => (
  <svg className={styles.checkIcon} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const HourglassIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v4L15 13l5 5v4H4v-4l5-5-5-5z"/>
  </svg>
);

const CardIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="5" width="20" height="14" rx="2"/>
    <line x1="2" y1="10" x2="22" y2="10"/>
  </svg>
);

const NotetakerIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
  </svg>
);

const CallieIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
