import React, { useState, useEffect } from 'react';
import styles from './cards.module.css';

const ArrowRight = ({ white = false }: { white?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={white ? "var(--color-5)" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px' }}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const IconBadge = ({ color, bg, children }: any) => (
  <div style={{ backgroundColor: bg, color: color, width: '24px', height: '24px', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
    {children}
  </div>
);

const HourglassIcon = () => (
  <IconBadge bg="var(--color-4)" color="var(--color-1)">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  </IconBadge>
);

const PaymentsIcon = () => (
  <IconBadge bg="var(--color-4)" color="var(--color-1)">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
  </IconBadge>
);

const NotetakerIcon = ({ disabled = false }: { disabled?: boolean }) => (
  <IconBadge bg={disabled ? "var(--color-4)" : "var(--color-1)"} color={disabled ? "var(--color-3)" : "var(--color-5)"}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
  </IconBadge>
);

const CallieIcon = ({ disabled = false }: { disabled?: boolean }) => (
  <IconBadge bg={disabled ? "var(--color-4)" : "var(--color-1)"} color={disabled ? "var(--color-3)" : "var(--color-5)"}>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  </IconBadge>
);

const CheckIconSmall = ({ disabled = false }: { disabled?: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={disabled ? "var(--color-3)" : "var(--color-1)"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const AnimatedPrice = ({ targetPrice }: { targetPrice: number }) => {
  const [displayPrice, setDisplayPrice] = useState(targetPrice);
  
  useEffect(() => {
    let current = displayPrice;
    if (current === targetPrice) return;
    
    const step = targetPrice > current ? 1 : -1;
    const interval = setInterval(() => {
      current += step;
      setDisplayPrice(current);
      if (current === targetPrice) {
        clearInterval(interval);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [targetPrice]);

  return <span>${displayPrice}</span>;
};

export default function PricingCards() {
  const [addonEnabled, setAddonEnabled] = useState(false);

  return (
    <section className={styles.cardsSection}>
      <div className={styles.cardsGrid}>
        
        {/* FREE */}
        <div className={styles.card}>
          <div className={styles.priceCardWrapper}>
            <h2 className={styles.cardPlanName}>Free</h2>
            <div className={styles.cardPriceWrapper}>
              <div className={styles.cardPriceTitle}>Always free</div>
            </div>
            <button className={styles.cardButtonOutline}>Get started <ArrowRight /></button>
          </div>
          
          <div className={styles.featuresContainer}>
            <div className={styles.cardFeaturesHeader}>Includes:</div>
            <div className={styles.featureCategory}>
              <div className={styles.featureCategoryTitle}>
                <HourglassIcon /> Scheduling
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall /> One event type</li>
                <li><CheckIconSmall /> One calendar connection</li>
                <li><CheckIconSmall /> One-on-one scheduling</li>
                <li><CheckIconSmall /> Customizable booking page</li>
                <li><CheckIconSmall /> Browser extension</li>
              </ul>
            </div>
          </div>
        </div>

        {/* STANDARD */}
        <div className={styles.card}>
          <div className={styles.priceCardWrapper}>
            <h2 className={styles.cardPlanName}>Standard{addonEnabled && '+'}</h2>
            <div className={styles.cardToggleWrapper} onClick={() => setAddonEnabled(!addonEnabled)}>
              <div className={`${styles.miniToggle} ${addonEnabled ? styles.active : ''}`}><div className={styles.miniToggleKnob}></div></div> 
              <span style={{ color: addonEnabled ? 'var(--color-1)' : 'var(--color-3)' }}>Add Notetaker & Callie</span>
            </div>
            <div className={styles.cardPriceWrapper}>
              <div className={styles.cardPriceValue}><AnimatedPrice targetPrice={addonEnabled ? 15 : 10} /></div>
              <div className={styles.cardPriceSub}>
                <span className={styles.cardPriceSeat}>/seat/mo</span>
                <span className={styles.badgeSmall}>Save 17%</span>
              </div>
            </div>
            <button className={styles.cardButtonOutline}>Get started <ArrowRight /></button>
          </div>
          
          <div className={styles.featuresContainer}>
            <div className={styles.cardFeaturesHeader}>Everything in Free, and:</div>
            <div className={styles.featureCategory}>
              <div className={styles.featureCategoryTitle}>
                <HourglassIcon /> Scheduling
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall /> Unlimited event types</li>
                <li><CheckIconSmall /> Connect multiple calendars</li>
                <li><CheckIconSmall /> Automations & reminders</li>
                <li><CheckIconSmall /> Connect Hubspot, Mailchimp</li>
              </ul>
            </div>

            <div className={styles.featureCategory}>
              <div className={styles.featureCategoryTitle}>
                <PaymentsIcon /> Payments
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall /> Connect Stripe, PayPal</li>
              </ul>
            </div>

            <div className={`${styles.featureCategory} ${!addonEnabled ? styles.disabledCategory : ''}`}>
              <div className={styles.featureCategoryTitle}>
                <NotetakerIcon disabled={!addonEnabled} /> Notetaker {!addonEnabled && <span className={styles.tag}>Not included</span>}
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall disabled={!addonEnabled} /> Recordings & transcripts</li>
                <li><CheckIconSmall disabled={!addonEnabled} /> Shareable meeting recaps</li>
                <li><CheckIconSmall disabled={!addonEnabled} /> Joins Zoom, Google Meet, Microsoft Teams</li>
              </ul>
            </div>
            
            <div className={`${styles.featureCategory} ${!addonEnabled ? styles.disabledCategory : ''}`}>
              <div className={styles.featureCategoryTitle}>
                <CallieIcon disabled={!addonEnabled} /> Callie {!addonEnabled && <span className={styles.tag}>Beta</span>}
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall disabled={!addonEnabled} /> An AI assistant that schedules over email</li>
                <li><CheckIconSmall disabled={!addonEnabled} /> Ask Callie interactive chat</li>
              </ul>
            </div>
          </div>
        </div>

        {/* TEAMS */}
        <div className={styles.cardPopularWrapper}>
          <div className={styles.popularBadge}>POPULAR PLAN</div>
          <div className={styles.cardInner}>
            <div className={styles.priceCardWrapper}>
              <h2 className={styles.cardPlanName}>Teams{addonEnabled && '+'}</h2>
              <div className={styles.cardToggleWrapper} onClick={() => setAddonEnabled(!addonEnabled)}>
                <div className={`${styles.miniToggle} ${addonEnabled ? styles.active : ''}`}><div className={styles.miniToggleKnob}></div></div> 
                <span style={{ color: addonEnabled ? 'var(--color-1)' : 'var(--color-3)' }}>Add Notetaker & Callie</span>
              </div>
              <div className={styles.cardPriceWrapper}>
                <div className={styles.cardPriceValue}><AnimatedPrice targetPrice={addonEnabled ? 21 : 16} /></div>
                <div className={styles.cardPriceSub}>
                  <span className={styles.cardPriceSeat}>/seat/mo</span>
                  <span className={styles.badgeSmall}>Save 20%</span>
                </div>
              </div>
              <button className={styles.cardButtonSolid}>Get started <ArrowRight white /></button>
            </div>
            
            <div className={styles.featuresContainer}>
              <div className={styles.cardFeaturesHeader}>Everything in Standard, and:</div>
              <div className={styles.featureCategory}>
                <div className={styles.featureCategoryTitle}>
                  <HourglassIcon /> Scheduling
                </div>
                <ul className={styles.featureList}>
                  <li><CheckIconSmall /> Round-robin & team scheduling</li>
                  <li><CheckIconSmall /> Qualify, route, & schedule leads</li>
                  <li><CheckIconSmall /> Centrally managed event types</li>
                  <li><CheckIconSmall /> Connect Marketo, Pardot</li>
                  <li><CheckIconSmall /> Send meetings to Salesforce</li>
                  <li><CheckIconSmall /> SSO security add-on (optional)</li>
                </ul>
              </div>

              <div className={`${styles.featureCategory} ${!addonEnabled ? styles.disabledCategory : ''}`}>
                <div className={styles.featureCategoryTitle}>
                  <NotetakerIcon disabled={!addonEnabled} /> Notetaker {!addonEnabled && <span className={styles.tag}>Not included</span>}
                </div>
                <ul className={styles.featureList}>
                  <li><CheckIconSmall disabled={!addonEnabled} /> Advanced admin controls</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ENTERPRISE */}
        <div className={styles.card}>
          <div className={styles.priceCardWrapper}>
            <h2 className={styles.cardPlanName}>Enterprise</h2>
            <div className={styles.cardPriceWrapper} style={{ marginTop: '2.5rem' }}>
              <div className={styles.cardPriceSeat}>Starts at</div>
              <div className={styles.cardPriceValue}>$15k</div>
              <div className={styles.cardPriceSeat}>/yr</div>
            </div>
            <button className={styles.cardButtonOutline}>Talk to sales <ArrowRight /></button>
          </div>
          
          <div className={styles.featuresContainer}>
            <div className={styles.cardFeaturesHeader}>Teams plan scheduling features, and:</div>
            <div className={styles.featureCategory}>
              <div className={styles.featureCategoryTitle}>
                <HourglassIcon /> Scheduling
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall /> Route with Salesforce lookup</li>
                <li><CheckIconSmall /> Connect Microsoft Dynamics</li>
                <li><CheckIconSmall /> Enable SSO & SAML</li>
                <li><CheckIconSmall /> Domain control</li>
                <li><CheckIconSmall /> Audit log compliance</li>
                <li><CheckIconSmall /> Data deletion API</li>
                <li><CheckIconSmall /> Onboarding & implementation</li>
                <li><CheckIconSmall /> Dedicated account support</li>
              </ul>
            </div>

            <div className={styles.featureCategory}>
              <div className={styles.featureCategoryTitle}>
                <NotetakerIcon /> Notetaker <span className={styles.tag}>Optional</span>
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall /> Inquire about Notetaker access</li>
              </ul>
            </div>

            <div className={styles.featureCategory}>
              <div className={styles.featureCategoryTitle}>
                <CallieIcon /> Callie <span className={styles.tag}>Beta</span>
              </div>
              <ul className={styles.featureList}>
                <li><CheckIconSmall /> Inquire about Callie access</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      
      <div className={styles.cardsFooterText}>
        <NotetakerIcon /> <CallieIcon /> <strong>Notetaker</strong> and <strong>Callie</strong> are only available in English at this time.
      </div>
    </section>
  );
}
