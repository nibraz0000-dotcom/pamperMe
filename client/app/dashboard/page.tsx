"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./dashboard.module.css";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";
import { getStoredUser, UserSession } from "../../utils/auth";

interface PendingRequest {
  id: string;
  name: string;
  locations: string;
  owner?: string;
  logoText?: string;
  logoSubtext?: string;
  imageSrc?: string;
  status: string;
}

export default function WorkspacesDashboardPage() {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<UserSession | null>(null);
  const [showActionsDropdown, setShowActionsDropdown] = useState(false);
  const [showResendSuccessToast, setShowResendSuccessToast] = useState(false);

  // Resend Animation Stages
  const [isResending, setIsResending] = useState(false);
  const [resendStage, setResendStage] = useState<"transferring" | "confirmed" | "exiting">("transferring");

  const [pendingRequest, setPendingRequest] = useState<PendingRequest>({
    id: "tereika-garden",
    name: "Tereika Garden",
    locations: "2 Locations",
    owner: "Tereika G.",
    logoText: "AKM",
    logoSubtext: "ALON",
    status: "Pending request"
  });

  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      setCurrentUser(user);
    }

    try {
      const stored = localStorage.getItem("pamperme_pending_workspace_request");
      if (stored) {
        const parsed = JSON.parse(stored);
        setPendingRequest({
          id: parsed.id || "tereika-garden",
          name: parsed.name || "Tereika Garden",
          locations: parsed.locations || "2 Locations",
          owner: parsed.owner || "Tereika G.",
          logoText: parsed.logoText || "AKM",
          logoSubtext: parsed.logoSubtext || "ALON",
          imageSrc: parsed.imageSrc,
          status: "Pending request"
        });
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleCancelRequest = () => {
    try {
      localStorage.removeItem("pamperme_pending_workspace_request");
    } catch (e) {
      console.error(e);
    }
    setShowActionsDropdown(false);
    // Redirect directly to /account-type
    router.push("/account-type");
  };

  const handleResendRequest = () => {
    setShowActionsDropdown(false);
    setIsResending(true);
    setResendStage("transferring");

    // Phase 1 -> Phase 2 (Center & Confirmed) after 1.2s
    setTimeout(() => {
      setResendStage("confirmed");
    }, 1200);

    // Phase 2 -> Phase 3 (Exit) after 2.3s
    setTimeout(() => {
      setResendStage("exiting");
    }, 2300);

    // Complete and return to Dashboard after 2.7s
    setTimeout(() => {
      setIsResending(false);
      setShowResendSuccessToast(true);
      setTimeout(() => setShowResendSuccessToast(false), 4000);
    }, 2750);
  };

  return (
    <div className={styles.layout}>
      {/* Sidebar with active "Workspaces" and "Personal settings" */}
      <DashboardSidebar activeTab="workspaces" />

      {/* ---------------- Main Content ---------------- */}
      <main className={styles.main}>
        {/* Top Bar with user avatar badge */}
        <header className={styles.topBar}>
          <div className={styles.userBadgeCircle}>
            {currentUser?.avatarText || "RT"}
          </div>
        </header>

        <div className={styles.contentWrapper}>
          {/* Resend Confirmation Banner */}
          {showResendSuccessToast && (
            <div className={styles.toastBanner}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Workspace join request reminder has been successfully resent to {pendingRequest.name}!</span>
            </div>
          )}

          <div className={styles.contentHeader}>
            <div className={styles.headerLeft}>
              <h1 className={styles.pageTitle}>Workspaces</h1>
              <p className={styles.pageSubtitle}>
                Create, join or leave businesses on pamperMe.{" "}
                <a href="#learn-more" onClick={(e) => e.preventDefault()}>
                  Learn more.
                </a>
              </p>
            </div>

            <Link href="/account-type/join" className={styles.addBtn}>
              Add
            </Link>
          </div>

          {/* Pending Section */}
          <section className={styles.pendingSection}>
            <div className={styles.pendingHeading}>Pending</div>

            <div className={styles.pendingCard}>
              <div className={styles.cardLeft}>
                <div className={styles.cardLogoBox}>
                  {pendingRequest.imageSrc ? (
                    <img
                      src={pendingRequest.imageSrc}
                      alt={pendingRequest.name}
                      className={styles.cardImg}
                    />
                  ) : (
                    <div style={{ textAlign: "center", lineHeight: "1.1" }}>
                      <div>{pendingRequest.logoText || "AKM"}</div>
                      <div style={{ fontSize: "9px" }}>{pendingRequest.logoSubtext || "ALON"}</div>
                    </div>
                  )}
                </div>

                <div className={styles.cardInfo}>
                  <div className={styles.cardTitle}>{pendingRequest.name}</div>
                  <div className={styles.cardLocations}>{pendingRequest.locations}</div>
                  <div className={styles.statusPending}>Pending request</div>
                </div>
              </div>

              <div className={styles.actionsContainer}>
                <button
                  type="button"
                  className={styles.actionsBtn}
                  onClick={() => setShowActionsDropdown(!showActionsDropdown)}
                  aria-haspopup="true"
                  aria-expanded={showActionsDropdown}
                >
                  <span>Actions</span>
                  <span className={`${styles.actionsChevron} ${showActionsDropdown ? styles.actionsChevronOpen : ""}`}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </button>

                {showActionsDropdown && (
                  <div className={styles.actionsDropdown}>
                    <button
                      className={styles.dropdownItem}
                      onClick={handleResendRequest}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                      <span>Resend request</span>
                    </button>
                    <button
                      className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`}
                      onClick={handleCancelRequest}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="15" y1="9" x2="9" y2="15"></line>
                        <line x1="9" y1="9" x2="15" y2="15"></line>
                      </svg>
                      <span>Cancel request</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Full-Screen Resend Animation Overlay */}
      {isResending && (
        <div className={`${styles.resendOverlay} ${resendStage === "exiting" ? styles.zoomOutExit : ""}`}>
          <div className={styles.resendStageArea}>
            {resendStage === "transferring" ? (
              <>
                <div className={styles.transferStage}>
                  {/* Node 1: User Profile */}
                  <div className={styles.userNodeCircle}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>

                  {/* Transfer Track */}
                  <div className={styles.transferTrackLine}>
                    <div className={styles.transferDotPulse} />
                  </div>

                  {/* Node 2: Shop Storefront */}
                  <div className={styles.shopNodeCircle}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                </div>

                <h2 className={styles.confirmedTitle} style={{ fontSize: "20px" }}>
                  Resending request to {pendingRequest.name}...
                </h2>
                <p className={styles.confirmedSubtitle}>
                  Transmitting reminder notification to the workspace owner
                </p>
              </>
            ) : (
              <div className={styles.centeredConfirmedStage}>
                <div className={styles.confirmedShopCircle}>
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>

                  <div className={styles.checkBadgeOverlay}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                </div>

                <h2 className={styles.confirmedTitle}>
                  Reminder sent to {pendingRequest.name}
                </h2>
                <p className={styles.confirmedSubtitle}>
                  Notification successfully delivered to workspace administrator.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
