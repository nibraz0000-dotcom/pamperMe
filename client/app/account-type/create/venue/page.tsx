"use client";

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import styles from './venue.module.css';
import { ArrowLeft, MapPin, Link2, X, AlertCircle, ChevronDown, Play } from 'lucide-react';

interface LocationDetails {
  address: string;
  aptSuite: string;
  village: string;
  district: string;
  city: string;
  county: string;
  state: string;
  postcode: string;
  country: string;
  directions: string;
  lat?: number;
  lon?: number;
}



export default function VenueLocationPage() {
  const router = useRouter();

  // Step 1 = Initial search & Google Maps URL (25% progress)
  // Step 2 = Map Pin & Edit business location form (50% progress)
  const [subStep, setSubStep] = useState<1 | 2>(1);

  // --- Step 1 State ---
  const [mapsUrl, setMapsUrl] = useState('');
  const [mapsError, setMapsError] = useState('');
  const [isMapsValid, setIsMapsValid] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [isListedOnMaps, setIsListedOnMaps] = useState<boolean | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);

  // --- Step 2 Form & Modal State ---
  const [showEditModal, setShowEditModal] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof LocationDetails, boolean>>>({});

  const [formData, setFormData] = useState<LocationDetails>({
    address: '',
    aptSuite: '',
    village: '',
    district: '',
    city: '',
    county: '',
    state: '',
    postcode: '',
    country: 'India',
    directions: '',
    lat: 11.2588,
    lon: 75.7804,
  });

  // Map drag offset simulation
  const [mapOffset, setMapOffset] = useState({ x: 0, y: 0 });
  const [isDraggingMap, setIsDraggingMap] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Validate Google Maps URL format
  const validateGoogleMapsUrl = (url: string): boolean => {
    if (!url || !url.trim()) return false;
    const trimmed = url.trim();
    const regex = /^(https?:\/\/)?(www\.)?(maps\.app\.goo\.gl|goo\.gl\/maps|(?:[a-zA-Z0-9-]+\.)?google\.[a-z.]+\/maps|maps\.google\.[a-z.]+)\/.+/i;
    return regex.test(trimmed);
  };

  const handleMapsUrlChange = (value: string) => {
    setMapsUrl(value);
    setIsVerified(false);
    if (!value.trim()) {
      setMapsError('');
      setIsMapsValid(false);
      return;
    }

    if (validateGoogleMapsUrl(value)) {
      setMapsError('');
      setIsMapsValid(true);
    } else {
      setIsMapsValid(false);
      setMapsError('Please enter a valid Google Maps link (e.g., https://maps.app.goo.gl/... or https://maps.google.com/...)');
    }
  };

  const handleVerify = () => {
    if (!validateGoogleMapsUrl(mapsUrl)) {
      setMapsError('Please enter a valid Google Maps link (e.g., https://maps.app.goo.gl/...)');
      setIsMapsValid(false);
      setIsVerified(false);
      return;
    }
    
    setIsVerifying(true);
    setMapsError('');
    setIsMapsValid(true);
    
    // Mocking an API call to verify and fetch data
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        address: 'Mavoor Road',
        village: 'Kottooli',
        city: 'Kozhikode',
        district: 'Kozhikode',
        state: 'Kerala',
        postcode: '673004',
        country: 'India',
        lat: 11.2612,
        lon: 75.7950,
      }));
      setIsVerified(true);
      setIsVerifying(false);
    }, 800);
  };

  // Move from Step 1 to Step 2
  const handleStep1Next = () => {
    if (!mapsUrl.trim() || !validateGoogleMapsUrl(mapsUrl)) {
      setMapsError('Please enter a valid Google Maps link (e.g. https://maps.app.goo.gl/...)');
      return;
    }

    if (!isVerified) {
      setMapsError('Please verify the link before proceeding.');
      return;
    }

    // Transition to Step 2 and immediately open the "Edit business location" modal
    setSubStep(2);
    setShowEditModal(true);
    setFieldErrors({});
  };

  // Save changes inside "Edit business location" modal
  const handleSaveModal = () => {
    const newErrors: Partial<Record<keyof LocationDetails, boolean>> = {};
    let hasError = false;

    if (!formData.address.trim()) { newErrors.address = true; hasError = true; }
    if (!formData.village.trim()) { newErrors.village = true; hasError = true; }
    if (!formData.district.trim()) { newErrors.district = true; hasError = true; }
    if (!formData.city.trim()) { newErrors.city = true; hasError = true; }
    if (!formData.state.trim()) { newErrors.state = true; hasError = true; }
    if (!formData.postcode.trim()) { newErrors.postcode = true; hasError = true; }
    if (!formData.country.trim()) { newErrors.country = true; hasError = true; }

    setFieldErrors(newErrors);

    if (hasError) {
      return;
    }

    setFieldErrors({});
    setShowEditModal(false);

    // Persist in localStorage
    try {
      localStorage.setItem(
        'venueLocation',
        JSON.stringify({
          ...formData,
          mapsUrl: mapsUrl.trim(),
          source: isMapsValid ? 'google_maps' : 'search',
        })
      );
    } catch {
      // ignore
    }
  };

  // Final Continue from Step 2
  const handleStep2Continue = () => {
    const newErrors: Partial<Record<keyof LocationDetails, boolean>> = {};
    let hasError = false;

    if (!formData.address.trim()) { newErrors.address = true; hasError = true; }
    if (!formData.village.trim()) { newErrors.village = true; hasError = true; }
    if (!formData.district.trim()) { newErrors.district = true; hasError = true; }
    if (!formData.city.trim()) { newErrors.city = true; hasError = true; }
    if (!formData.state.trim()) { newErrors.state = true; hasError = true; }
    if (!formData.postcode.trim()) { newErrors.postcode = true; hasError = true; }
    if (!formData.country.trim()) { newErrors.country = true; hasError = true; }

    setFieldErrors(newErrors);

    if (hasError) {
      setShowEditModal(true);
      return;
    }

    // Persist and navigate to the next step
    try {
      localStorage.setItem(
        'venueLocation',
        JSON.stringify({
          ...formData,
          mapsUrl: mapsUrl.trim(),
          source: isMapsValid ? 'google_maps' : 'search',
        })
      );
    } catch {
      // ignore
    }

    router.push('/account-type/create/source');
  };

  // Dragging simulation for map pin
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDraggingMap(true);
    dragStartRef.current = { x: e.clientX - mapOffset.x, y: e.clientY - mapOffset.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingMap) return;
    setMapOffset({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDraggingMap(false);
  };

  return (
    <div className={styles.container}>
      {/* Top 5-segment Progress Bar:
          - If subStep === 1: 5th segment is 25% filled (Part 1 of 4)
          - If subStep === 2: 5th segment is 50% filled (Part 2 of 4) */}
      <div className={styles.topBar}>
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        <div className={`${styles.progressSegment} ${styles.progressSegmentActive}`} />
        {subStep === 1 ? (
          <div className={styles.progressSegmentQuarter} />
        ) : (
          <div className={styles.progressSegmentHalf} />
        )}
      </div>

      {/* Header Navigation with Back, Title, Close, and Next / Continue */}
      <div className={styles.headerNav}>
        <div className={styles.headerLeft}>
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => {
              if (subStep === 2) {
                setSubStep(1);
              } else {
                router.push('/account-type/create/location');
              }
            }}
            aria-label="Go back"
          >
            <ArrowLeft size={20} />
          </button>
          {subStep === 2 && (
            <span className={styles.headerTitle}>Set your venue's physical location</span>
          )}
        </div>

        <div className={styles.navActions}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => router.push('/user-account/workspace')}
          >
            Close
          </button>

          {subStep === 1 ? (
            <button type="button" className={styles.nextBtn} onClick={handleStep1Next}>
              Next <span>→</span>
            </button>
          ) : (
            <button type="button" className={styles.nextBtn} onClick={handleStep2Continue}>
              Continue <span>→</span>
            </button>
          )}
        </div>
      </div>

      {/* SUB-STEP 1: Initial Location Search & Google Maps URL */}
      {subStep === 1 && (
        <div className={styles.content}>
          <div className={styles.subtitle}>Account setup</div>
          <h1 className={styles.title}>Set your venue's physical location</h1>
          <p className={styles.description}>
            Add your primary business location so your clients can easily find you. Additional locations can be added later.
          </p>

          <h2 className={styles.sectionTitle}>Business location</h2>

          {/* Is business listed on Google Maps? */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Is your business listed on Google Maps?</label>
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <button 
                type="button"
                className={isListedOnMaps === true ? styles.btnSelected : styles.btnOutline}
                onClick={() => { setIsListedOnMaps(true); setShowTutorial(true); }}
              >
                Yes
              </button>
              <button 
                type="button"
                className={isListedOnMaps === false ? styles.btnSelected : styles.btnOutline}
                onClick={() => { setIsListedOnMaps(false); setShowTutorial(true); }}
              >
                No
              </button>
            </div>
          </div>

          {isListedOnMaps === false && (
             <div className={styles.hintText} style={{ marginBottom: '20px' }}>
               Please <a href="https://business.google.com/create" target="_blank" rel="noreferrer" style={{ color: '#a855f7', textDecoration: 'underline' }}>list your business on Google Maps</a>, and then paste the link below.
             </div>
          )}

          {isListedOnMaps !== null && (
            <div className={styles.formGroup}>
              <label className={styles.label}>Google Maps link</label>
              <div
                className={`${styles.inputWrapper} ${
                  mapsError ? styles.inputWrapperError : ''
                }`}
              >
                <Link2 size={20} className={styles.inputIcon} />
                <input
                  type="url"
                  className={styles.input}
                  placeholder="https://maps.app.goo.gl/... or https://maps.google.com/..."
                  value={mapsUrl}
                  onChange={(e) => handleMapsUrlChange(e.target.value)}
                />
                <button
                  type="button"
                  style={{
                    backgroundColor: '#9333ea',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    fontSize: '13px',
                    fontWeight: 600,
                    cursor: isVerifying || !mapsUrl.trim() ? 'not-allowed' : 'pointer',
                    opacity: isVerifying || !mapsUrl.trim() ? 0.6 : 1,
                    marginLeft: '8px',
                    whiteSpace: 'nowrap'
                  }}
                  onClick={handleVerify}
                  disabled={isVerifying || !mapsUrl.trim()}
                >
                  {isVerifying ? 'Verifying...' : isVerified ? 'Verified' : 'Verify'}
                </button>
                {mapsUrl && (
                  <button
                    type="button"
                    className={styles.clearBtn}
                    onClick={() => {
                      setMapsUrl('');
                      setMapsError('');
                      setIsMapsValid(false);
                      setIsVerified(false);
                    }}
                    aria-label="Clear Google Maps URL"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {mapsError && (
                <div className={styles.errorText} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <AlertCircle size={14} />
                  <span>{mapsError}</span>
                </div>
              )}

              {isVerified && (
                <div style={{ marginTop: '24px' }}>
                  <div
                    className={styles.mapWrapper}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                  >
                    <div
                      className={styles.mapCanvas}
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, #20242d 0%, #111317 100%)`,
                        transform: `translate(${mapOffset.x}px, ${mapOffset.y}px)`,
                      }}
                    >
                      {/* Grid lines and roads styling for dark map appearance */}
                      <svg width="100%" height="100%" style={{ opacity: 0.25 }}>
                        <defs>
                          <pattern id="mapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4a5568" strokeWidth="1" />
                            <circle cx="30" cy="30" r="1.5" fill="#a855f7" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#mapGrid)" />
                        <path
                          d="M0,180 Q300,120 600,240 T1200,200"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="8"
                        />
                        <path
                          d="M100,0 Q180,300 240,600"
                          fill="none"
                          stroke="#4b5563"
                          strokeWidth="6"
                        />
                        <path
                          d="M450,0 Q500,250 620,600"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="10"
                        />
                      </svg>
                    </div>

                    {/* Centered Map Pin */}
                    <div className={styles.mapPinCenter}>
                      <div className={styles.mapPinIconWrapper}>
                        <div className={styles.mapPinInnerDot} />
                      </div>
                      <div className={styles.mapPinShadow} />
                    </div>

                    {/* Bottom floating hint */}
                    <div className={styles.mapHint}>Drag the map to adjust the pin position</div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* SUB-STEP 2: Location Summary */}
      {subStep === 2 && (
        <div className={styles.step2Container}>

          {/* Address Details Card below the map */}
          <div className={styles.step2CardContainer}>
            <div className={styles.addressDetailsCard}>
              <div className={styles.addressDetailsInfo}>
                <MapPin size={22} className={styles.addressIcon} />
                <div>
                  <div className={styles.addressName}>
                    {formData.address || formData.city || 'Business Venue'}
                  </div>
                  <div className={styles.addressSub}>
                    {[
                      formData.aptSuite ? `Apt/Suite: ${formData.aptSuite}` : null,
                      formData.village,
                      formData.district,
                      formData.city,
                      formData.state,
                      formData.country,
                      formData.postcode,
                    ]
                      .filter(Boolean)
                      .join(', ')}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className={styles.editAddressBtn}
                onClick={() => {
                  setShowEditModal(true);
                  setFieldErrors({});
                }}
              >
                Edit address
              </button>
            </div>

            {/* Static Map View for Step 2 */}
            <div className={styles.step2MapWrapper}>
              <div
                className={styles.mapCanvas}
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, #20242d 0%, #111317 100%)`,
                  transform: `translate(${mapOffset.x}px, ${mapOffset.y}px)`,
                }}
              >
                <svg width="100%" height="100%" style={{ opacity: 0.25 }}>
                  <defs>
                    <pattern id="mapGrid2" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#4a5568" strokeWidth="1" />
                      <circle cx="30" cy="30" r="1.5" fill="#a855f7" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid2)" />
                  <path
                    d="M0,180 Q300,120 600,240 T1200,200"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="8"
                  />
                  <path
                    d="M100,0 Q180,300 240,600"
                    fill="none"
                    stroke="#4b5563"
                    strokeWidth="6"
                  />
                  <path
                    d="M450,0 Q500,250 620,600"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="10"
                  />
                </svg>
              </div>

              {/* Centered Map Pin */}
              <div className={styles.mapPinCenter}>
                <div className={styles.mapPinIconWrapper}>
                  <div className={styles.mapPinInnerDot} />
                </div>
                <div className={styles.mapPinShadow} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODAL: "Edit business location" (Matches user reference screenshots exactly) */}
      {showEditModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Edit business location</h2>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={() => {
                  setShowEditModal(false);
                  setFieldErrors({});
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form Fields */}
            <div className={styles.modalBody}>
              {/* Row 1: Address & Apt./Suite etc */}
              <div className={styles.modalGridRow}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Address</label>
                  <input
                    type="text"
                    className={`${styles.modalInput} ${fieldErrors.address ? styles.modalInputError : ''}`}
                    value={formData.address}
                    placeholder="Enter street address"
                    onChange={(e) => {
                      setFormData({ ...formData, address: e.target.value });
                      if (fieldErrors.address) setFieldErrors({ ...fieldErrors, address: false });
                    }}
                    autoFocus
                  />
                </div>

                <div className={styles.modalField}>
                  <div className={styles.modalFieldHeader}>
                    <label className={styles.modalLabel}>Apt./Suite etc</label>
                    <span className={styles.charCounter}>{formData.aptSuite.length}/100</span>
                  </div>
                  <input
                    type="text"
                    maxLength={100}
                    className={styles.modalInput}
                    value={formData.aptSuite}
                    placeholder=""
                    onChange={(e) => setFormData({ ...formData, aptSuite: e.target.value })}
                  />
                </div>
              </div>

              {/* Row 2: Village & City */}
              <div className={styles.modalGridRow}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Village</label>
                  <input
                    type="text"
                    className={`${styles.modalInput} ${fieldErrors.village ? styles.modalInputError : ''}`}
                    value={formData.village}
                    placeholder=""
                    onChange={(e) => {
                      setFormData({ ...formData, village: e.target.value });
                      if (fieldErrors.village) setFieldErrors({ ...fieldErrors, village: false });
                    }}
                  />
                </div>

                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>City</label>
                  <input
                    type="text"
                    className={`${styles.modalInput} ${fieldErrors.city ? styles.modalInputError : ''}`}
                    value={formData.city}
                    placeholder=""
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (fieldErrors.city) setFieldErrors({ ...fieldErrors, city: false });
                    }}
                  />
                </div>
              </div>

              {/* Row 3: District & State */}
              <div className={styles.modalGridRow}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>District</label>
                  <input
                    type="text"
                    className={`${styles.modalInput} ${fieldErrors.district ? styles.modalInputError : ''}`}
                    value={formData.district}
                    placeholder=""
                    onChange={(e) => {
                      setFormData({ ...formData, district: e.target.value });
                      if (fieldErrors.district) setFieldErrors({ ...fieldErrors, district: false });
                    }}
                  />
                </div>

                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>State</label>
                  <input
                    type="text"
                    className={`${styles.modalInput} ${fieldErrors.state ? styles.modalInputError : ''}`}
                    value={formData.state}
                    placeholder=""
                    onChange={(e) => {
                      setFormData({ ...formData, state: e.target.value });
                      if (fieldErrors.state) setFieldErrors({ ...fieldErrors, state: false });
                    }}
                  />
                </div>
              </div>

              {/* Row 4: Postcode & Country */}
              <div className={styles.modalGridRow}>
                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Postcode</label>
                  <input
                    type="text"
                    className={`${styles.modalInput} ${fieldErrors.postcode ? styles.modalInputError : ''}`}
                    value={formData.postcode}
                    placeholder=""
                    onChange={(e) => {
                      setFormData({ ...formData, postcode: e.target.value });
                      if (fieldErrors.postcode) setFieldErrors({ ...fieldErrors, postcode: false });
                    }}
                  />
                </div>

                <div className={styles.modalField}>
                  <label className={styles.modalLabel}>Country</label>
                  <div className={styles.modalSelectWrapper}>
                    <select
                      className={`${styles.modalSelect} ${fieldErrors.country ? styles.modalInputError : ''}`}
                      value={formData.country}
                      onChange={(e) => {
                        setFormData({ ...formData, country: e.target.value });
                        if (fieldErrors.country) setFieldErrors({ ...fieldErrors, country: false });
                      }}
                    >
                      <option value="India">India</option>
                      <option value="United Arab Emirates">United Arab Emirates</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Oman">Oman</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                    <ChevronDown size={16} className={styles.selectChevron} />
                  </div>
                </div>
              </div>

              {/* Row 5: Directions */}
              <div className={styles.modalField}>
                <div className={styles.modalFieldHeader}>
                  <label className={styles.modalLabel}>Directions</label>
                  <span className={styles.charCounter}>{formData.directions.length}/200</span>
                </div>
                <textarea
                  className={styles.modalTextarea}
                  maxLength={200}
                  placeholder="Add details to help clients find your location"
                  value={formData.directions}
                  onChange={(e) => setFormData({ ...formData, directions: e.target.value })}
                />
              </div>
            </div>

            {/* Modal Footer with Cancel & Save */}
            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.modalCancelBtn}
                onClick={() => {
                  setShowEditModal(false);
                  setFieldErrors({});
                }}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.modalSaveBtn}
                onClick={handleSaveModal}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Popup Component */}
      {isListedOnMaps !== null && showTutorial && (
        <div className={styles.tutorialPopup}>
          <button className={styles.closePopupBtn} onClick={() => setShowTutorial(false)}>
            <X size={16} />
          </button>
          <div className={styles.tutorialTitle}>
            {isListedOnMaps 
              ? "How to get your Google Maps link" 
              : "How to list your business on Google"}
          </div>
          <div className={styles.tutorialThumbnail}>
            <div className={styles.playIcon}>
              <Play size={24} fill="currentColor" />
            </div>
            <div style={{ position: 'absolute', bottom: '8px', right: '8px', backgroundColor: 'rgba(0,0,0,0.7)', padding: '2px 6px', borderRadius: '4px', fontSize: '12px', color: '#fff' }}>
              2:15
            </div>
          </div>
          <div style={{ fontSize: '13px', color: '#a3a3a3' }}>
            Watch this quick tutorial to {isListedOnMaps ? 'find and copy your link' : 'get your business listed'}.
          </div>
        </div>
      )}
    </div>
  );
}
