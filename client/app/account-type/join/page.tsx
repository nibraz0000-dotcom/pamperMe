"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./join.module.css";
import { getStoredUser, UserSession } from "../../../utils/auth";
import { searchBusinesses, BusinessRecord } from "../../../data/mockBusinesses";

export default function JoinBusinessPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);

  // Step state: 1 = search, 2 = add message & send request, 3 = animated success confirmation
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessRecord | null>(null);
  const [requestMessage, setRequestMessage] = useState("");
  const [previewModalBusiness, setPreviewModalBusiness] = useState<BusinessRecord | null>(null);

  // Sending animation stages: 'transferring' -> 'confirmed' -> 'exiting'
  const [animationStage, setAnimationStage] = useState<'transferring' | 'confirmed' | 'exiting'>('transferring');

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  // Search results are only computed when search query has content
  const hasSearched = searchQuery.trim().length > 0;
  const filteredBusinesses = hasSearched ? searchBusinesses(searchQuery) : [];

  const handleSelectBusiness = (business: BusinessRecord) => {
    setSelectedBusiness(business);
  };

  const handleNextToStep2 = () => {
    if (selectedBusiness) {
      setCurrentStep(2);
    }
  };

  const handleSendRequest = () => {
    if (!selectedBusiness) return;

    // Save pending workspace request in localStorage for the dashboard
    try {
      const pendingItem = {
        id: selectedBusiness.id,
        name: selectedBusiness.name,
        locations: selectedBusiness.locations,
        owner: selectedBusiness.owner,
        logoText: selectedBusiness.logoText || "AKM",
        logoSubtext: selectedBusiness.logoSubtext || "ALON",
        imageSrc: selectedBusiness.imageSrc,
        message: requestMessage,
        status: "Pending request",
        date: new Date().toISOString(),
      };
      localStorage.setItem("pamperme_pending_workspace_request", JSON.stringify(pendingItem));
    } catch (e) {
      console.error(e);
    }

    // Step 3: Trigger full-screen plain transfer animation
    setCurrentStep(3);
    setAnimationStage('transferring');

    // Stage 1 -> Stage 2 (Shop Circle moves to Center & Confirms) after 1.2s
    setTimeout(() => {
      setAnimationStage('confirmed');
    }, 1200);

    // Stage 2 -> Stage 3 (Zoom out / exit boom) after 2.3s
    setTimeout(() => {
      setAnimationStage('exiting');
    }, 2300);

    // Navigate to workspaces dashboard after 2.7s total
    setTimeout(() => {
      router.push("/dashboard");
    }, 2750);
  };

  // ----------------------------------------------------
  // STEP 3: Plain Seamless Transfer & Success Animation
  // ----------------------------------------------------
  if (currentStep === 3 && selectedBusiness) {
    return (
      <div className={`${styles.plainAnimationContainer} ${animationStage === 'exiting' ? styles.zoomOutExit : ''}`}>
        <div className={styles.stageArea}>
          {animationStage === 'transferring' ? (
            <>
              {/* Transfer between User node and Shop node */}
              <div className={styles.transferStage}>
                {/* Node 1: User Profile */}
                <div className={styles.userNodeCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>

                {/* Connecting Transfer Track */}
                <div className={styles.transferTrackLine}>
                  <div className={styles.transferDotPulse} />
                </div>

                {/* Node 2: Shop / Business Storefront */}
                <div className={styles.shopNodeCircle}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
              </div>

              <h2 className={styles.confirmedTitle} style={{ fontSize: "20px" }}>
                Sending request to {selectedBusiness.name}...
              </h2>
              <p className={styles.confirmedSubtitle}>
                Connecting your profile with the workspace
              </p>
            </>
          ) : (
            /* Shop node centered and confirmed */
            <div className={styles.centeredConfirmedStage}>
              <div className={styles.confirmedShopCircle}>
                <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>

                {/* Check badge overlay */}
                <div className={styles.checkBadgeOverlay}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>

              <h2 className={styles.confirmedTitle}>
                Request sent to {selectedBusiness.name}
              </h2>
              <p className={styles.confirmedSubtitle}>
                Your request was delivered. Opening your workspaces...
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // STEP 1 & 2: Search & Send Request Flows
  // ----------------------------------------------------
  return (
    <div className={styles.container}>
      {/* Top 2-Segment Progress Bar */}
      <div className={styles.progressBarTrack}>
        <div
          className={`${styles.progressBarSegment} ${styles.progressBarSegmentActive}`}
        />
        <div
          className={`${styles.progressBarSegment} ${
            currentStep === 2 ? styles.progressBarSegmentActive : styles.progressBarSegmentInactive
          }`}
        />
      </div>

      {/* Header Navigation */}
      <header className={styles.header}>
        {currentStep === 1 ? (
          <Link
            href="/account-type"
            className={styles.backBtn}
            aria-label="Go back to account type"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Link>
        ) : (
          <button
            type="button"
            className={styles.backBtn}
            onClick={() => setCurrentStep(1)}
            aria-label="Go back to search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
        )}

        <div className={styles.headerActions}>
          <Link href="/user-account/workspace" className={styles.closeBtn}>
            Close
          </Link>

          {currentStep === 1 ? (
            <button
              type="button"
              className={styles.nextBtn}
              disabled={!selectedBusiness}
              onClick={handleNextToStep2}
            >
              Next →
            </button>
          ) : (
            <button
              type="button"
              className={styles.nextBtn}
              onClick={handleSendRequest}
            >
              Send request
            </button>
          )}
        </div>
      </header>

      {/* Main Form Content */}
      <main className={styles.mainContent}>
        {currentStep === 1 ? (
          <>
            <h1 className={styles.heading}>Search for a business</h1>
            <p className={styles.subHeading}>
              Find a business on pamperMe to request login access to their workspace
            </p>

            {/* Search Input Box */}
            <div className={styles.searchWrapper}>
              <div className={styles.searchIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search business name (e.g. Lakme, Tereika, Luxe...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            {/* If search query is empty, show clean helper prompt (no business profiles) */}
            {!hasSearched && (
              <div className={styles.searchPlaceholderPrompt}>
                <div className={styles.searchPromptIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className={styles.searchPromptText}>Search for your workplace</div>
                <p className={styles.searchPromptSubtext}>
                  Type a business or salon name above to find and request workspace access.
                </p>
              </div>
            )}

            {/* Businesses Results List (Only displayed when searching) */}
            {hasSearched && (
              <div className={styles.businessList}>
                {filteredBusinesses.map((business) => {
                  const isSelected = selectedBusiness?.id === business.id;
                  return (
                    <div
                      key={business.id}
                      className={`${styles.businessCard} ${
                        isSelected ? styles.businessCardActive : ""
                      }`}
                      onClick={() => handleSelectBusiness(business)}
                    >
                      <div className={styles.cardLeft}>
                        <div className={styles.thumbnailLogo}>
                          {business.logoType === "image" && business.imageSrc ? (
                            <img
                              src={business.imageSrc}
                              alt={business.name}
                              className={styles.thumbnailImg}
                            />
                          ) : (
                            <div style={{ textAlign: "center", lineHeight: "1.1" }}>
                              <div>{business.logoText || "AKM"}</div>
                              <div style={{ fontSize: "9px" }}>{business.logoSubtext || "ALON"}</div>
                            </div>
                          )}
                        </div>

                        <div className={styles.businessInfo}>
                          <div className={styles.businessName}>{business.name}</div>
                          <div className={styles.businessLocations}>{business.locations}</div>
                          <div className={styles.businessOwner}>Owner: {business.owner}</div>
                        </div>
                      </div>

                      <button
                        type="button"
                        className={styles.viewProfileBtn}
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewModalBusiness(business);
                        }}
                      >
                        View profile
                      </button>
                    </div>
                  );
                })}

                {filteredBusinesses.length === 0 && (
                  <div style={{ padding: "36px 0", textAlign: "center", color: "#64748b", fontSize: "14px" }}>
                    No businesses found matching &ldquo;{searchQuery}&rdquo;. Try another name.
                  </div>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <h1 className={styles.heading}>
              Send a request to join {selectedBusiness?.name}
            </h1>

            <div className={styles.messageLabelContainer}>
              <span className={styles.messageLabel}>Add a message (Optional)</span>
              <span className={styles.charCounter}>{requestMessage.length}/100</span>
            </div>

            <textarea
              className={styles.messageTextarea}
              placeholder="Tell them who you are or why you want to join this workspace..."
              maxLength={100}
              value={requestMessage}
              onChange={(e) => setRequestMessage(e.target.value)}
              autoFocus
            />
          </>
        )}
      </main>

      {/* Business Profile Preview Modal */}
      {previewModalBusiness && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setPreviewModalBusiness(null)}
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.modalCloseBtn}
              onClick={() => setPreviewModalBusiness(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <div style={{ display: "flex", gap: "16px", alignItems: "center", marginBottom: "16px" }}>
              <div className={styles.thumbnailLogo} style={{ width: "60px", height: "60px" }}>
                {previewModalBusiness.logoType === "image" && previewModalBusiness.imageSrc ? (
                  <img
                    src={previewModalBusiness.imageSrc}
                    alt={previewModalBusiness.name}
                    className={styles.thumbnailImg}
                  />
                ) : (
                  <div style={{ textAlign: "center", lineHeight: "1.1" }}>
                    <div>{previewModalBusiness.logoText || "AKM"}</div>
                    <div style={{ fontSize: "9px" }}>{previewModalBusiness.logoSubtext || "ALON"}</div>
                  </div>
                )}
              </div>
              <div>
                <h3 style={{ margin: "0 0 4px 0", fontSize: "17px", fontWeight: "700" }}>{previewModalBusiness.name}</h3>
                <p style={{ margin: "0 0 2px 0", color: "#64748b", fontSize: "13px" }}>{previewModalBusiness.locations} • {previewModalBusiness.address}</p>
                <p style={{ margin: 0, color: "#334155", fontSize: "13px" }}>Owner: {previewModalBusiness.owner}</p>
              </div>
            </div>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.5", margin: "0 0 20px 0" }}>
              {previewModalBusiness.description}
            </p>
            <button
              type="button"
              className={styles.nextBtn}
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => {
                setSelectedBusiness(previewModalBusiness);
                setPreviewModalBusiness(null);
                setCurrentStep(2);
              }}
            >
              Select & Continue to Join →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
