import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Megaphone,
  ShoppingBag,
  CreditCard,
  Users,
  Zap,
  Palette,
  Briefcase,
  Shield,
  Headphones,
  Check
} from 'lucide-react';
import styles from './compareFeatures.module.css';

const features = [
  {
    category: 'Scheduling',
    icon: <Calendar size={20} />,
    items: [
      { 
        name: 'Create appointments', 
        description: 'Schedule unlimited one-on-one appointments with clients based on your real-time availability.',
        values: ['Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'] 
      },
      { 
        name: 'Staff accounts', 
        description: 'Create individual user profiles with custom permission levels for your team members.',
        values: ['1', '3', '5', '5'] 
      },
      { 
        name: 'Multiple locations', 
        description: 'Manage staff schedules, services, and client bookings across multiple business locations.',
        values: [true, true, true, true] 
      },
      { 
        name: '2-way calendar sync', 
        description: 'Bi-directional real-time sync with Google Calendar, Outlook, and Apple iCal to prevent conflicts.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Waitlist and class waitlists', 
        description: 'Automatically queue clients for fully booked slots and notify them on cancellations.',
        values: [true, true, true, true] 
      },
      { 
        name: 'SMS & email reminders', 
        description: 'Send automated text and email reminders to minimize missed appointments.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Generate review requests', 
        description: 'Automatically request reviews from satisfied clients after completed appointments.',
        values: [true, true, true, true] 
      },
      { 
        name: 'SMS & email blasts', 
        description: 'Broadcast promotional campaigns, seasonal discounts, and announcements to your clients.',
        values: [false, 'Unlimited', 'Unlimited', 'Unlimited'] 
      },
      { 
        name: 'Cancel/No-show protection', 
        description: 'Collect card details upfront and enforce custom cancellation fees for late cancellations.',
        values: [false, false, 'Unlimited', 'Unlimited'] 
      },
      { 
        name: 'Forms and waivers (Beta)', 
        description: 'Collect digital signatures, health questionnaires, and liability waivers before appointments.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Customizable booking app', 
        description: 'Deliver a branded self-service mobile booking experience for your clients.',
        values: [false, true, true, true] 
      },
      { 
        name: 'In-person payments', 
        description: 'Process tap, chip, swipe, and cash payments at your front desk with POS hardware.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Online payments (Beta)', 
        description: 'Accept deposits, prepayments, and full service fees online at booking.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Advanced reporting (Coming soon, access waitlist)', 
        description: 'Access deep reporting on revenue trends, staff productivity, and client retention.',
        values: [false, false, true, true] 
      },
    ]
  },
  {
    category: 'Marketing',
    icon: <Megaphone size={20} />,
    items: [
      { 
        name: 'Mass email and SMS marketing campaigns', 
        description: 'Create and launch bulk email and SMS marketing campaigns with audience segmentation.',
        values: [false, 'Waitlist only', 'Waitlist only', 'more'] 
      },
      { 
        name: 'SMS marketing & client communication', 
        description: 'Engage in two-way SMS messaging directly with clients to answer questions and confirm bookings.',
        values: [false, 'Waitlist only', 'Waitlist only', 'more'] 
      },
      { 
        name: 'Advanced marketing campaigns (Email & SMS templates)', 
        description: 'Use professionally designed templates and automated triggers for targeted client marketing.',
        values: [false, 'Waitlist only', 'Waitlist only', 'more'] 
      },
      { 
        name: 'Automated reviews', 
        description: 'Automate post-service feedback collection and showcase 5-star ratings across marketing channels.',
        values: [false, false, 'Waitlist only', 'more'] 
      },
    ]
  },
  {
    category: 'Online store',
    icon: <ShoppingBag size={20} />,
    items: [
      { 
        name: 'Storefront & booking link design', 
        description: 'Customize your digital storefront and shareable booking links with custom banners and styling.',
        values: [false, 'Waitlist only', 'Waitlist only', 'more'] 
      },
      { 
        name: 'Custom domain for online store and booking pages', 
        description: 'Connect your own custom web domain for a fully branded booking experience.',
        values: [false, 'Waitlist only', 'Waitlist only', 'more'] 
      },
      { 
        name: 'Product / Service tags and catalog layout', 
        description: 'Organize your services and retail inventory with custom tags, categories, and visual layouts.',
        values: [false, 'Waitlist only', 'Waitlist only', 'more'] 
      },
    ]
  },
  {
    category: 'Payments',
    icon: <CreditCard size={20} />,
    items: [
      { 
        name: 'In-person and online payments processing', 
        description: 'Accept all major credit cards, debit cards, and digital wallets online and in-studio.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Card saved on file & cancellation policies', 
        description: 'Securely store payment methods on file for 1-click checkout and automated cancellation fees.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Split payments across payment methods', 
        description: 'Split a single bill across multiple credit cards, gift cards, or cash at checkout.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Accept Apple Pay and Google Pay', 
        description: 'Enable fast, contactless touchless checkout for mobile and desktop appointments.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Automatic receipt sent after payment', 
        description: 'Instantly deliver digital itemized receipts to clients via SMS and email after payment.',
        values: [false, true, true, true] 
      },
    ]
  },
  {
    category: 'Contacts',
    icon: <Users size={20} />,
    items: [
      { 
        name: 'Unlimited client contacts across all locations', 
        description: 'Store comprehensive contact profiles for all your clients without any account limits.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Client profiles and detailed notes', 
        description: 'Maintain formulas, consultation notes, preferences, and before/after photos for each client.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Full client appointment history', 
        description: 'Track complete historical bookings, cancellations, service records, and purchase receipts.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Notes tracking for team members', 
        description: 'Share internal staff notes and service details across team members securely.',
        values: [false, true, true, true] 
      },
    ]
  },
  {
    category: 'Automations',
    icon: <Zap size={20} />,
    items: [
      { 
        name: 'Automated confirmation, reminders and review request workflows', 
        description: 'Trigger instant booking confirmations, timely reminders, and post-visit follow-up sequences.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Re-engagement & retention campaigns for returning clients', 
        description: 'Automatically identify inactive clients and send tailored incentives to re-book.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Send forms/waivers automatically prior to appointment', 
        description: 'Dispatch required consultation forms and waivers automatically upon booking.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Post-appointment follow-up campaigns', 
        description: 'Check in on client satisfaction and share personalized aftercare instructions automatically.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Send customized marketing and review campaigns to clients', 
        description: 'Build automated customer journeys tailored to specific service types and visit frequency.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Product & Sales feedback flows', 
        description: 'Collect structured ratings and reviews on specific retail products and services.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Remind clients to re-book', 
        description: 'Send smart reminders when it\'s time for clients to schedule their next regular appointment.',
        values: [false, false, true, true] 
      },
      { 
        name: 'Send happy birthday discounts', 
        description: 'Delight clients with personalized birthday greetings and special anniversary discounts.',
        values: [false, false, true, true] 
      },
      { 
        name: 'Multi-stage, custom campaigns', 
        description: 'Design multi-step drip sequences across email and SMS based on client behavior.',
        values: [false, false, true, true] 
      },
      { 
        name: 'No show or cancellation follow-up campaigns to win-back clients', 
        description: 'Automatically reach out to no-shows and cancelled clients to encourage rebooking.',
        values: [false, false, false, true] 
      },
    ]
  },
  {
    category: 'Personalization',
    icon: <Palette size={20} />,
    items: [
      { 
        name: 'Custom branding on booking pages', 
        description: 'Brand your booking flow with your business logo, custom banner images, and brand color palette.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Add your business logo', 
        description: 'Display your official business logo across client booking pages, receipts, and emails.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Custom colors across all interfaces (Booking & Staff)', 
        description: 'Apply your primary and accent brand colors across staff calendars and client portals.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Advanced customized features and integrations', 
        description: 'Unlock tailored UI customization options and custom CSS styling capabilities.',
        values: [false, true, true, true] 
      },
    ]
  },
  {
    category: 'Team tools',
    icon: <Briefcase size={20} />,
    items: [
      { 
        name: 'Employee clock in / clock out', 
        description: 'Track staff working hours, breaks, and shifts with an integrated digital time clock.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Custom role permissions & access', 
        description: 'Restrict sensitive financial data and customize system access levels per staff role.',
        values: [false, false, true, true] 
      },
      { 
        name: 'Unlimited team member access (Receptionist, Managers)', 
        description: 'Add receptionists, assistants, and managers to your account without extra seat fees.',
        values: [false, false, true, true] 
      },
      { 
        name: 'Payroll integrations', 
        description: 'Export timesheets and commission data directly to your preferred payroll provider.',
        values: [false, false, true, true] 
      },
    ]
  },
  {
    category: 'Security',
    icon: <Shield size={20} />,
    items: [
      { 
        name: 'Data center locations', 
        description: 'Host your business data in compliant, enterprise-grade cloud data centers.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Uptime SLA', 
        description: 'Guaranteed 99.9% uptime service level agreement backed by enterprise infrastructure.',
        values: [false, false, false, true] 
      },
      { 
        name: 'DDoS mitigation (WAF)', 
        description: 'Advanced web application firewalls to safeguard booking channels from DDoS threats.',
        values: [false, false, true, true] 
      },
      { 
        name: 'Automated backup and point-in-time recovery', 
        description: 'Continuous daily data backups with point-in-time database restoration capabilities.',
        values: [false, false, false, true] 
      },
      { 
        name: 'Incident support & tracking', 
        description: 'Priority incident triage and dedicated status tracking during service disruptions.',
        values: [false, false, false, true] 
      },
      { 
        name: 'Advanced infrastructure oversight', 
        description: '24/7 proactive system monitoring, security audits, and threat detection.',
        values: [false, false, false, true] 
      },
      { 
        name: 'SAML based SSO options', 
        description: 'Single sign-on integration with Okta, Azure AD, and Google Workspace for enterprise staff.',
        values: [false, false, false, true] 
      },
    ]
  },
  {
    category: 'Support',
    icon: <Headphones size={20} />,
    items: [
      { 
        name: 'Help center and specific community access', 
        description: 'Access comprehensive step-by-step guides, video tutorials, and user community forums.',
        values: [true, true, true, true] 
      },
      { 
        name: '24/7 email support', 
        description: 'Reach our dedicated customer support team via email around the clock with fast response times.',
        values: [true, true, true, true] 
      },
      { 
        name: 'Live chat support', 
        description: 'Chat directly with our product specialists during business hours for rapid troubleshooting.',
        values: [false, true, true, true] 
      },
      { 
        name: 'Phone support', 
        description: 'Speak directly to senior support engineers over the phone for urgent inquiries.',
        values: [false, false, false, true] 
      },
      { 
        name: '1-on-1 onboarding assistance', 
        description: 'Receive personalized setup guidance and staff training from a dedicated onboarding specialist.',
        values: [false, false, false, true] 
      },
      { 
        name: 'Dedicated Account Manager and prioritized SLA', 
        description: 'Partner with a named account manager for strategic business reviews and prioritized SLAs.',
        values: [false, false, false, true] 
      },
      { 
        name: 'Custom product integrations & architecture review', 
        description: 'Collaborate with our solutions engineers to build bespoke workflow integrations.',
        values: [false, false, false, true] 
      },
    ]
  }
];

interface CompareFeaturesProps {
  addonEnabled?: boolean;
}

export default function CompareFeatures({ addonEnabled = false }: CompareFeaturesProps) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Offset from top of viewport: navbar height (96px) + table header height (~80px)
      const offset = 180;

      for (let i = features.length - 1; i >= 0; i--) {
        const el = document.getElementById(`category-section-${i}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            setActiveCategoryIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCategory = features[activeCategoryIndex] || features[0];

  const renderValue = (value: string | boolean) => {
    if (value === true) {
      return (
        <div className={styles.checkCircle}>
          <Check size={12} strokeWidth={4} />
        </div>
      );
    }
    if (value === false) {
      return <span className={styles.hyphen}>-</span>;
    }
    return <span className={styles.textValue}>{value}</span>;
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Compare features</h2>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <colgroup>
            <col className={styles.colFeature} />
            <col className={styles.colPlan} />
            <col className={styles.colPlan} />
            <col className={styles.colPlan} />
            <col className={styles.colPlan} />
          </colgroup>
          <thead>
            <tr className={styles.headerRow}>
              <th>
                <div key={currentCategory.category} className={styles.headerCategory}>
                  {currentCategory.icon}
                  <span>{currentCategory.category}</span>
                </div>
              </th>
              <th>
                <h1 className={styles.planName}>Free</h1>
                <button className={`${styles.btn} ${styles.btnOutline}`}>Get started</button>
              </th>
              <th>
                <h1 className={styles.planName}>
                  Standard
                  {addonEnabled && <span className={styles.plusBadge}>Plus</span>}
                </h1>
                <button className={`${styles.btn} ${styles.btnOutline}`}>Get started</button>
              </th>
              <th>
                <h1 className={styles.planName}>
                  Teams
                  {addonEnabled && <span className={styles.plusBadge}>Plus</span>}
                </h1>
                <button className={`${styles.btn} ${styles.btnDark}`}>Get started</button>
              </th>
              <th>
                <h1 className={styles.planName}>Enterprise</h1>
                <button className={`${styles.btn} ${styles.btnOutline}`}>Talk to sales</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((section, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && (
                  <tr 
                    id={`category-section-${idx}`} 
                    className={`${styles.categoryRow} ${activeCategoryIndex >= idx ? styles.categoryRowVanished : ''}`}
                  >
                    <th colSpan={5}>
                      <div className={styles.categoryHeader}>
                        {section.icon}
                        {section.category}
                      </div>
                    </th>
                  </tr>
                )}
                {section.items.map((item, itemIdx) => (
                  <tr 
                    key={itemIdx} 
                    id={idx === 0 && itemIdx === 0 ? 'category-section-0' : undefined}
                    className={styles.featureRow}
                  >
                    <td className={styles.featureNameCell}>
                      <div className={styles.featureLabelContainer}>
                        <span className={styles.featureNameText}>{item.name}</span>
                        {item.description && (
                          <div className={styles.tooltipPopover}>
                            <p className={styles.tooltipText}>{item.description}</p>
                          </div>
                        )}
                      </div>
                    </td>
                    {item.values.map((val, valIdx) => (
                      <td key={valIdx}>
                        <div className={styles.featureValue}>
                          {renderValue(val)}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
