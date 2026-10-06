'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../free-trial/freeTrial.module.css';
import { getStoredUser, loginUser, UserSession, AUTH_EVENT_NAME } from '../../utils/auth';
import { COUNTRIES, DEFAULT_COUNTRY, Country } from '../../utils/countries';

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="#000000" width="20" height="20">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.96c.66-.82 1.11-1.96.99-3.1-.96.04-2.18.65-2.87 1.47-.61.71-1.14 1.87-1 2.98 1.07.08 2.21-.53 2.88-1.35z" />
  </svg>
);

const MicrosoftIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20">
    <path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="#1877F2" width="20" height="20">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const businessClips = [
  '/videos/clip_42867.mp4',   // Salon Hair Wash & Care
  '/videos/barber_40124.mp4', // Barber Grooming
  '/videos/spa_42458.mp4',    // Med Spa & Facial Treatment
  '/videos/spa_42459.mp4',    // Luxury Spa Massage
  '/videos/clip_42865.mp4',   // Salon Styling
  '/videos/barber_40120.mp4', // Barber Cut & Style
];

const brickRows = [
  ['Barbershop', 'Spa', 'Yoga Studio'],
  ['Med Spa', 'Brow & Lash'],
  ['Gym & Fitness', 'Salon', 'Hair Removal'],
  ['Massage Studio', 'Nail Salon'],
  ['Aesthetic Clinic', 'Personal Trainer', 'Acupuncture'],
];

type AuthProvider = 'Google' | 'Apple' | 'Microsoft' | 'Facebook';

export default function UserAccountPage() {
  const router = useRouter();
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [step, setStep] = useState<'social' | 'email' | 'phone'>('social');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentClipIndex, setCurrentClipIndex] = useState(0);
  const [authProvider, setAuthProvider] = useState<AuthProvider | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [signUpName, setSignUpName] = useState('Alex Rivera');
  const [signUpEmail, setSignUpEmail] = useState('alex.rivera@gmail.com');
  const [signUpPassword, setSignUpPassword] = useState('••••••••');
  const [selectedCountry, setSelectedCountry] = useState<Country>(DEFAULT_COUNTRY);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const countryPickerRef = useRef<HTMLDivElement | null>(null);

  // Sync session and redirect to workspace if logged in
  useEffect(() => {
    const user = getStoredUser();
    if (user) {
      router.replace('/user-account/workspace');
      return;
    }
    const handleAuthChange = () => {
      const u = getStoredUser();
      if (u) {
        router.replace('/user-account/workspace');
      }
    };
    window.addEventListener(AUTH_EVENT_NAME, handleAuthChange);
    return () => {
      window.removeEventListener(AUTH_EVENT_NAME, handleAuthChange);
    };
  }, [router]);

  // Click outside to close country dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (countryPickerRef.current && !countryPickerRef.current.contains(e.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };
    if (isCountryDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCountryDropdownOpen]);

  const filteredCountries = COUNTRIES.filter((c) =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.dialCode.includes(countrySearch)
  );

  const handleSocialClick = (provider: AuthProvider) => {
    setErrorMessage(null);
    setAuthProvider(provider);
  };

  const handleProviderLogin = () => {
    // If in login mode and no previous account exists, show warning and redirect to signup
    const existing = getStoredUser();
    if (authMode === 'login' && !existing) {
      setAuthProvider(null);
      setErrorMessage("⚠️ You don't have an existing account. Redirecting you to Create Account...");
      setTimeout(() => {
        setAuthMode('signup');
        setErrorMessage(null);
      }, 1800);
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      loginUser({
        name: 'Alex Rivera',
        email: 'alex.rivera@gmail.com',
        role: 'Business Owner',
        avatarText: 'AR',
        provider: (authProvider?.toLowerCase() as any) || 'google',
      });
      setIsAuthenticating(false);
      setAuthProvider(null);
      router.push('/user-account/workspace');
    }, 700);
  };

  const handleSendOtp = () => {
    if (!phoneNumber || phoneNumber.trim().length < 5) {
      setErrorMessage('Please enter a valid phone number.');
      return;
    }
    setErrorMessage(null);
    setOtpSent(true);
  };

  const handleVerifyOtp = () => {
    if (otpCode !== '123456' && otpCode.length < 4) {
      setErrorMessage('Please enter valid 6-digit OTP code (e.g. 123456).');
      return;
    }

    const existing = getStoredUser();
    if (authMode === 'login' && !existing) {
      setErrorMessage("⚠️ You don't have an existing account. Redirecting you to Create Account...");
      setTimeout(() => {
        setAuthMode('signup');
        setErrorMessage(null);
        setStep('social');
      }, 1800);
      return;
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      loginUser({
        name: 'Alex Rivera',
        email: `${selectedCountry.dialCode} ${phoneNumber}`,
        role: 'Business Owner',
        avatarText: 'AR',
        provider: 'phone',
      });
      setIsAuthenticating(false);
      router.push('/user-account/workspace');
    }, 700);
  };

  const handleEmailAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (authMode === 'login') {
      const existingUser = getStoredUser();
      if (!existingUser) {
        setErrorMessage("⚠️ You don't have an existing account. Redirecting you to Create Account...");
        setTimeout(() => {
          setAuthMode('signup');
          setErrorMessage(null);
        }, 1800);
        return;
      }
    }

    setIsAuthenticating(true);
    setTimeout(() => {
      loginUser({
        name: signUpName || 'Alex Rivera',
        email: signUpEmail || 'alex.rivera@gmail.com',
        role: 'Business Owner',
        avatarText: (signUpName || 'AR').substring(0, 2).toUpperCase(),
        provider: 'email',
      });
      setIsAuthenticating(false);
      router.push('/user-account/workspace');
    }, 700);
  };

  const handleVideoEnded = () => {
    setCurrentClipIndex((prevIndex) => (prevIndex + 1) % businessClips.length);
  };

  return (
    <div className={styles.loginLayout}>
      {/* Left Side: Video Box */}
      <div className={styles.loginBackground}>
        <video
          key={businessClips[currentClipIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
          className={styles.videoBackground}
        >
          <source src={businessClips[currentClipIndex]} type="video/mp4" />
        </video>

        <div className={styles.glassOverlay}>
          <h2>Built for businesses. Designed to help you grow.</h2>
          <div className={styles.brickGrid}>
            {brickRows.map((row, rIdx) => (
              <div key={rIdx} className={styles.brickRow}>
                {row.map((cat) => (
                  <span key={cat} className={styles.categoryText}>
                    {cat}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side: Authentication Sidebar */}
      <div className={styles.loginSidebar}>
        {/* Top Header */}
        <div className={styles.sidebarHeader}>
          <Link href="/" className={styles.loginBrand}>
            pamperMe
          </Link>
        </div>

        {/* Center Form Content */}
        <div className={styles.formContent}>
          <h1 className={styles.loginTitle}>
            {authMode === 'login' ? 'Log in to pamperMe' : 'Create your pamperMe account'}
          </h1>

          {errorMessage && (
            <div className={styles.credentialErrorBanner}>
              {errorMessage}
            </div>
          )}

          {authProvider && (
            <div className={styles.authPromptCard}>
              <div className={styles.authPromptHeader}>
                <div className={styles.authProviderBadge}>
                  {authProvider === 'Google' && <GoogleIcon />}
                  {authProvider === 'Apple' && <AppleIcon />}
                  {authProvider === 'Microsoft' && <MicrosoftIcon />}
                  {authProvider === 'Facebook' && <FacebookIcon />}
                  <span>Continue with {authProvider}</span>
                </div>
                <button
                  type="button"
                  className={styles.authPromptClose}
                  onClick={() => setAuthProvider(null)}
                  aria-label="Close prompt"
                >
                  ✕
                </button>
              </div>

              <div className={styles.authPromptAccount}>
                <div className={styles.authAvatar} style={{ backgroundColor: authProvider === 'Google' ? '#ea4335' : '#0f172a' }}>
                  AR
                </div>
                <div className={styles.authAccountDetails}>
                  <span className={styles.authAccountName}>Alex Rivera</span>
                  <span className={styles.authAccountEmail}>alex.rivera@gmail.com</span>
                </div>
              </div>

              <button
                type="button"
                className={styles.authContinueBtn}
                style={{ backgroundColor: authProvider === 'Google' ? '#1a73e8' : '#0f172a' }}
                onClick={handleProviderLogin}
                disabled={isAuthenticating}
              >
                {isAuthenticating ? (
                  <div className={styles.authLoadingSpinner} />
                ) : (
                  `Continue as Alex`
                )}
              </button>

              <div className={styles.authPromptFooter}>
                To continue, pamperMe will share your name, email address, and profile picture with {authProvider}.
              </div>
            </div>
          )}

          {step === 'social' && (
            <>
              <div className={styles.socialButtonsRow}>
                <button
                  type="button"
                  className={styles.socialBtn}
                  onClick={() => handleSocialClick('Google')}
                  aria-label="Continue with Google"
                >
                  <GoogleIcon />
                </button>
                <button
                  type="button"
                  className={styles.socialBtn}
                  onClick={() => handleSocialClick('Apple')}
                  aria-label="Continue with Apple"
                >
                  <AppleIcon />
                </button>
                <button
                  type="button"
                  className={styles.socialBtn}
                  onClick={() => handleSocialClick('Microsoft')}
                  aria-label="Continue with Microsoft"
                >
                  <MicrosoftIcon />
                </button>
                <button
                  type="button"
                  className={styles.socialBtn}
                  onClick={() => handleSocialClick('Facebook')}
                  aria-label="Continue with Facebook"
                >
                  <FacebookIcon />
                </button>
              </div>

              <div className={styles.divider}>
                <span>or</span>
              </div>

              <button
                type="button"
                className={styles.loginWithEmailBtn}
                onClick={() => { setStep('email'); setErrorMessage(null); }}
              >
                {authMode === 'login' ? 'Log in with email' : 'Sign up with email'}
              </button>

              <button
                type="button"
                className={styles.loginWithPhoneBtn}
                onClick={() => { setStep('phone'); setErrorMessage(null); setOtpSent(false); }}
              >
                {authMode === 'login' ? 'Log in with phone' : 'Sign up with phone'}
              </button>

              {authMode === 'login' ? (
                <div className={styles.toggleFormText}>
                  Don't have an account? <button type="button" className={styles.textLinkBtn} onClick={() => { setAuthMode('signup'); setErrorMessage(null); }}>Sign up</button>
                </div>
              ) : (
                <div className={styles.toggleFormText}>
                  Already have an account? <button type="button" className={styles.textLinkBtn} onClick={() => { setAuthMode('login'); setErrorMessage(null); }}>Log in</button>
                </div>
              )}
            </>
          )}

          {step === 'phone' && (
            <div className={styles.phoneStep}>
              <button
                type="button"
                className={styles.textLinkBtn}
                style={{ marginBottom: '1rem', textAlign: 'left', display: 'inline-block' }}
                onClick={() => { setStep('social'); setErrorMessage(null); setOtpSent(false); }}
              >
                ← Back to all options
              </button>

              {!otpSent ? (
                <>
                  <div className={styles.phoneInputRow}>
                    <div className={styles.countryPickerWrapper} ref={countryPickerRef}>
                      <button
                        type="button"
                        className={styles.countryPickerBtn}
                        onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                        aria-label="Select country code"
                      >
                        <span className={styles.countryFlag}>{selectedCountry.flag}</span>
                        <span className={styles.countryDialCode}>{selectedCountry.dialCode}</span>
                        <span className={`${styles.countryChevron} ${isCountryDropdownOpen ? styles.countryChevronOpen : ''}`}>▼</span>
                      </button>

                      {isCountryDropdownOpen && (
                        <div className={styles.countryDropdown}>
                          <div className={styles.countrySearchBox}>
                            <input
                              type="text"
                              placeholder="Search country or code..."
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              className={styles.countrySearchInput}
                              autoFocus
                            />
                          </div>
                          <ul className={styles.countryList}>
                            {filteredCountries.map((c) => (
                              <li
                                key={`${c.code}-${c.dialCode}`}
                                className={`${styles.countryItem} ${selectedCountry.code === c.code ? styles.countryItemActive : ''}`}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsCountryDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                              >
                                <span>{c.flag} {c.name}</span>
                                <span>{c.dialCode}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      placeholder={selectedCountry.placeholder}
                      className={styles.phoneInputField}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      autoFocus
                    />
                  </div>

                  <button
                    type="button"
                    className={styles.submitLoginBtn}
                    onClick={handleSendOtp}
                  >
                    Send Verification Code →
                  </button>
                </>
              ) : (
                <>
                  <p className={styles.otpNotice}>
                    We sent a 6-digit code to <strong>{selectedCountry.dialCode} {phoneNumber}</strong>.
                  </p>
                  <div className={styles.inputGroup}>
                    <input
                      type="text"
                      placeholder="000000"
                      maxLength={6}
                      className={`${styles.inputField} ${styles.otpInput}`}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      autoFocus
                    />
                  </div>

                  <button
                    type="button"
                    className={styles.submitLoginBtn}
                    onClick={handleVerifyOtp}
                    disabled={isAuthenticating}
                  >
                    {isAuthenticating ? 'Verifying...' : 'Verify & Continue →'}
                  </button>

                  <div className={styles.resendRow}>
                    <button
                      type="button"
                      className={styles.textLinkBtn}
                      onClick={() => { setOtpSent(false); setOtpCode(''); }}
                    >
                      Change phone number
                    </button>
                    <button
                      type="button"
                      className={styles.textLinkBtn}
                      onClick={() => alert('New OTP code sent: 123456')}
                    >
                      Resend code
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 'email' && (
            <form onSubmit={handleEmailAuthSubmit} style={{ width: '100%' }}>
              <button
                type="button"
                className={styles.textLinkBtn}
                style={{ marginBottom: '1rem', textAlign: 'left', display: 'inline-block' }}
                onClick={() => { setStep('social'); setErrorMessage(null); }}
              >
                ← Back to all options
              </button>

              {authMode === 'signup' && (
                <div className={styles.inputGroup}>
                  <input
                    type="text"
                    required
                    placeholder="Full Name (e.g. Alex Rivera)"
                    className={styles.inputField}
                    value={signUpName}
                    onChange={(e) => setSignUpName(e.target.value)}
                  />
                </div>
              )}

              <div className={styles.inputGroup}>
                <input
                  type="email"
                  required
                  placeholder="Email address (name@business.com)"
                  className={styles.inputField}
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
              </div>

              <div className={styles.inputGroup}>
                <div style={{ position: 'relative' }}>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className={styles.inputField}
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                  />
                  <span className={styles.eyeIcon}>
                    <EyeIcon />
                  </span>
                </div>
              </div>

              {authMode === 'login' && (
                <div className={styles.forgotPassword}>
                  <a href="#">Forgot password?</a>
                </div>
              )}

              <button
                type="submit"
                className={styles.submitLoginBtn}
                disabled={isAuthenticating}
              >
                {isAuthenticating
                  ? 'Please wait...'
                  : authMode === 'login' ? 'Log in' : 'Create Account'}
              </button>

              {authMode === 'login' ? (
                <div className={styles.toggleFormText} style={{ marginTop: '1.25rem' }}>
                  Don't have an account? <button type="button" className={styles.textLinkBtn} onClick={() => { setAuthMode('signup'); setErrorMessage(null); }}>Sign up</button>
                </div>
              ) : (
                <div className={styles.toggleFormText} style={{ marginTop: '1.25rem' }}>
                  Already have an account? <button type="button" className={styles.textLinkBtn} onClick={() => { setAuthMode('login'); setErrorMessage(null); }}>Log in</button>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Footer */}
        <div className={styles.sidebarFooter}>
          <p>By continuing, you agree to our <Link href="#">Terms of Use</Link> & <Link href="#">Privacy Policy</Link></p>
          <p>©2026 pamperMe. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
