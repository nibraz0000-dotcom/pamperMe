"use client";

import React, { useState, Suspense, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './category.module.css';
import {
  ArrowLeft,
  PlusCircle,
  Store,
  Scissors,
  Eye,
  SprayCan,
  Sparkles,
  Zap,
  Brush,
  Sun,
  PenTool,
  PawPrint,
  Flower2,
  HeartPulse,
  Scale,
  Hand,
  Pin,
  Bone,
  Brain,
  Apple,
  Target,
  Accessibility,
  Flower,
  Dumbbell,
  UserCheck,
  Swords,
  Activity,
  Footprints,
  Flame,
  Bike,
  Music,
  Trophy
} from 'lucide-react';

interface CategoryItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  isOther?: boolean;
}

interface CategoryGroup {
  id: 'beauty' | 'wellness' | 'fitness';
  name: string;
  badge: string;
  items: CategoryItem[];
}

const ALL_CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'beauty',
    name: 'Beauty',
    badge: '11 services',
    items: [
      { id: 'booth-renter', label: 'Booth Renter', icon: Store },
      { id: 'salon', label: 'Salon', icon: Scissors },
      { id: 'brow-lash', label: 'Brow & Lash', icon: Eye },
      { id: 'barber', label: 'Barber', icon: SprayCan },
      { id: 'nail', label: 'Nail', icon: Sparkles },
      { id: 'hair-removal', label: 'Hair Removal', icon: Zap },
      { id: 'makeup', label: 'Makeup', icon: Brush },
      { id: 'tanning', label: 'Tanning', icon: Sun },
      { id: 'tattoo', label: 'Tattoo', icon: PenTool },
      { id: 'pet-grooming', label: 'Pet Grooming', icon: PawPrint },
      { id: 'beauty-other', label: 'Other', icon: PlusCircle, isOther: true },
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness',
    badge: '12 services',
    items: [
      { id: 'spa', label: 'Spa', icon: Flower2 },
      { id: 'aesthetic-clinic', label: 'Aesthetic Clinic', icon: Sparkles },
      { id: 'med-spa', label: 'Med Spa', icon: HeartPulse },
      { id: 'weight-loss', label: 'Weight Loss Clinic', icon: Scale },
      { id: 'massage', label: 'Massage', icon: Hand },
      { id: 'acupuncture', label: 'Acupuncture', icon: Pin },
      { id: 'chiropractor', label: 'Chiropractor', icon: Bone },
      { id: 'mental-health', label: 'Mental Health', icon: Brain },
      { id: 'nutritionist', label: 'Nutritionist', icon: Apple },
      { id: 'coaching', label: 'Coaching', icon: Target },
      { id: 'physical-therapy', label: 'Physical Therapy', icon: Accessibility },
      { id: 'wellness-other', label: 'Other', icon: PlusCircle, isOther: true },
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness',
    badge: '11 services',
    items: [
      { id: 'yoga', label: 'Yoga', icon: Flower },
      { id: 'gym', label: 'Gym', icon: Dumbbell },
      { id: 'personal-trainer', label: 'Personal Trainer', icon: UserCheck },
      { id: 'martial-arts', label: 'Martial Arts', icon: Swords },
      { id: 'pilates', label: 'Pilates', icon: Activity },
      { id: 'barre-studio', label: 'Barre Studio', icon: Footprints },
      { id: 'cross-training', label: 'Cross Training', icon: Flame },
      { id: 'cycling', label: 'Cycling', icon: Bike },
      { id: 'dance-studio', label: 'Dance Studio', icon: Music },
      { id: 'sports-facility', label: 'Sports Facility', icon: Trophy },
      { id: 'fitness-other', label: 'Other', icon: PlusCircle, isOther: true },
    ],
  },
];

function CategorySelectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Read industry from URL query param or localStorage
  const [industry, setIndustry] = useState<string>('mixed');

  useEffect(() => {
    const param = searchParams.get('industry');
    if (param) {
      setIndustry(param.toLowerCase());
    } else {
      const stored = localStorage.getItem('selectedIndustry');
      if (stored) {
        setIndustry(stored.toLowerCase());
      }
    }
  }, [searchParams]);

  // Determine which groups to show
  const isSingleIndustry = industry === 'beauty' || industry === 'wellness' || industry === 'fitness';
  const displayedGroups = isSingleIndustry
    ? ALL_CATEGORY_GROUPS.filter((g) => g.id === industry)
    : ALL_CATEGORY_GROUPS;

  const [primaryCategory, setPrimaryCategory] = useState<string | null>(null);
  const [relatedCategories, setRelatedCategories] = useState<string[]>([]);
  const [otherInputs, setOtherInputs] = useState<Record<string, string>>({});
  const [otherErrors, setOtherErrors] = useState<Record<string, string>>({});
  const [errorMessage, setErrorMessage] = useState<string>('');

  const totalSelected = (primaryCategory ? 1 : 0) + relatedCategories.length;
  const isMaxReached = totalSelected >= 4;

  const handleCardClick = (id: string) => {
    setErrorMessage('');

    // If clicking primary category, remove it
    if (primaryCategory === id) {
      if (relatedCategories.length > 0) {
        const [nextPrimary, ...rest] = relatedCategories;
        setPrimaryCategory(nextPrimary);
        setRelatedCategories(rest);
      } else {
        setPrimaryCategory(null);
      }
      if (otherErrors[id]) {
        setOtherErrors((prev) => ({ ...prev, [id]: '' }));
      }
      return;
    }

    // If clicking a related category, remove it
    if (relatedCategories.includes(id)) {
      setRelatedCategories(relatedCategories.filter((catId) => catId !== id));
      if (otherErrors[id]) {
        setOtherErrors((prev) => ({ ...prev, [id]: '' }));
      }
      return;
    }

    // Requirement: If any "Other" card is already selected but its input is still empty,
    // do not allow selecting another category until they fill in the Other service type!
    const otherIds = ['beauty-other', 'wellness-other', 'fitness-other'];
    const activeEmptyOtherId = otherIds.find(
      (otherId) =>
        (primaryCategory === otherId || relatedCategories.includes(otherId)) &&
        !otherInputs[otherId]?.trim()
    );

    if (activeEmptyOtherId) {
      setOtherErrors((prev) => ({
        ...prev,
        [activeEmptyOtherId]: 'Please fill in this Other service type before selecting another category.',
      }));
      setErrorMessage('Please fill in the Other service type field before selecting more categories.');
      return;
    }

    // If max reached, warn user
    if (isMaxReached) {
      setErrorMessage(
        'Maximum 4 categories selected (1 primary and up to 3 related). Deselect one to choose another.'
      );
      return;
    }

    // If no primary is selected yet, make this primary
    if (!primaryCategory) {
      setPrimaryCategory(id);
      return;
    }

    // Add to related
    setRelatedCategories([...relatedCategories, id]);
  };

  const handleOtherInputChange = (id: string, value: string) => {
    // Max 12 letters / characters
    const trimmed = value.slice(0, 12);
    setOtherInputs((prev) => ({ ...prev, [id]: trimmed }));
    if (otherErrors[id]) {
      setOtherErrors((prev) => ({ ...prev, [id]: '' }));
    }
    if (errorMessage.includes('Other service type')) {
      setErrorMessage('');
    }
  };

  const handleNext = () => {
    if (!primaryCategory) {
      setErrorMessage('Please choose at least 1 primary category to continue.');
      return;
    }

    // Check if any selected item is an "Other" option
    const otherIds = ['beauty-other', 'wellness-other', 'fitness-other'];
    const selectedOtherIds = otherIds.filter(
      (id) => primaryCategory === id || relatedCategories.includes(id)
    );

    let hasOtherError = false;
    const newErrors: Record<string, string> = {};

    for (const otherId of selectedOtherIds) {
      const val = otherInputs[otherId]?.trim() || '';
      if (!val) {
        newErrors[otherId] = 'Please fill in this Other service type before continuing.';
        hasOtherError = true;
      } else if (val.length > 12) {
        newErrors[otherId] = 'Maximum 12 letters allowed.';
        hasOtherError = true;
      }
    }

    if (hasOtherError) {
      setOtherErrors(newErrors);
      setErrorMessage('Please fill in the Other service type field before continuing.');
      return;
    }

    // Store in localStorage or session if needed
    try {
      localStorage.setItem(
        'businessCategories',
        JSON.stringify({
          industry,
          primary: primaryCategory,
          related: relatedCategories,
          otherServices: otherInputs,
        })
      );
    } catch {
      // ignore
    }

    // Proceed to next step: team size selection
    router.push('/account-type/create/team-size');
  };

  return (
    <div className={styles.container}>
      {/* Top 5-segment Progress Bar: Step 1 filled, Step 2 100% filled */}
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={styles.progressSegment} />
        <div className={styles.progressSegment} />
        <div className={styles.progressSegment} />
      </div>

      {/* Header Navigation with Back and Next */}
      <div className={styles.headerNav}>
        <button
          type="button"
          className={styles.backBtn}
          onClick={() => router.push('/account-type/create/industry')}
          aria-label="Go back to Industry selection"
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
        <h1 className={styles.title}>Select categories that best describe your business</h1>
        <p className={styles.description}>
          Choose your primary and up to 3 related service type
        </p>

        {/* Counter & Error */}
        <div className={styles.selectionPillBar}>
          <div className={styles.selectionCount}>
            Selected: {totalSelected} / 4 {totalSelected >= 4 ? '• Max reached' : ''}
          </div>
          {errorMessage && <div className={styles.limitNotice}>{errorMessage}</div>}
        </div>

        {/* Categories container: Single Industry Centered (3 columns) OR Mixed (6 columns) */}
        <div className={isSingleIndustry ? styles.singleSectionWrapper : styles.sectionsWrapper}>
          {displayedGroups.map((group) => {
            const otherItem = group.items.find((i) => i.isOther);
            const isOtherSelected =
              otherItem &&
              (primaryCategory === otherItem.id ||
                relatedCategories.includes(otherItem.id));

            return (
              <div key={group.name} className={styles.categorySection}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>{group.name}</span>
                  <span className={styles.sectionBadge}>{group.badge}</span>
                </div>

                {/* Cards Grid: 3 columns if single industry, 2 columns if mixed */}
                <div className={isSingleIndustry ? styles.cardsGridThreeCol : styles.cardsGrid}>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    const isPrimary = primaryCategory === item.id;
                    const isRelated = relatedCategories.includes(item.id);
                    const isSelected = isPrimary || isRelated;
                    const isDisabled = !isSelected && isMaxReached;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        className={`${styles.card} ${
                          isSelected ? styles.cardSelected : ''
                        } ${isPrimary ? styles.cardPrimary : ''} ${
                          isDisabled ? styles.cardDisabled : ''
                        }`}
                        onClick={() => handleCardClick(item.id)}
                      >
                        <div className={styles.cardTop}>
                          <div className={styles.iconWrapper}>
                            <Icon size={24} />
                          </div>
                          {isPrimary && (
                            <span className={`${styles.badge} ${styles.primaryBadge}`}>
                              Primary
                            </span>
                          )}
                          {isRelated && (
                            <span className={`${styles.badge} ${styles.relatedBadge}`}>
                              Related
                            </span>
                          )}
                        </div>
                        <div className={styles.cardLabel}>
                          {item.isOther && otherInputs[item.id]
                            ? `Other: ${otherInputs[item.id]}`
                            : item.label}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Other Service Type Input Box */}
                {isOtherSelected && otherItem && (
                  <div
                    className={`${styles.otherInputBox} ${
                      otherErrors[otherItem.id] ? styles.otherInputBoxError : ''
                    }`}
                  >
                    <div className={styles.otherInputHeader}>
                      <span className={styles.otherInputLabel}>Other service type</span>
                      <span className={styles.otherInputCounter}>
                        {(otherInputs[otherItem.id] || '').length}/12 letters
                      </span>
                    </div>
                    <input
                      type="text"
                      className={`${styles.otherInput} ${
                        otherErrors[otherItem.id] ? styles.otherInputError : ''
                      }`}
                      placeholder="e.g. Specialized"
                      maxLength={12}
                      value={otherInputs[otherItem.id] || ''}
                      onChange={(e) =>
                        handleOtherInputChange(otherItem.id, e.target.value)
                      }
                      autoFocus
                    />
                    {otherErrors[otherItem.id] && (
                      <div className={styles.otherErrorText}>
                        {otherErrors[otherItem.id]}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function CategorySelectionPage() {
  return (
    <Suspense fallback={<div className={styles.container} style={{ padding: '40px', textAlign: 'center' }}>Loading categories...</div>}>
      <CategorySelectionContent />
    </Suspense>
  );
}
