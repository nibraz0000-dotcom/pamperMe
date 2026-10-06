export interface Country {
  name: string;
  code: string;
  flag: string;
  dialCode: string;
  placeholder: string;
}

export const COUNTRIES: Country[] = [
  { name: 'India', code: 'IN', flag: '🇮🇳', dialCode: '+91', placeholder: '00000 00000' },
  { name: 'United States', code: 'US', flag: '🇺🇸', dialCode: '+1', placeholder: '(000) 000-0000' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧', dialCode: '+44', placeholder: '0000 000000' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪', dialCode: '+971', placeholder: '00 000 0000' },
  { name: 'Saudi Arabia', code: 'SA', flag: '🇸🇦', dialCode: '+966', placeholder: '00 000 0000' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦', dialCode: '+1', placeholder: '(000) 000-0000' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺', dialCode: '+61', placeholder: '000 000 000' },
  { name: 'Qatar', code: 'QA', flag: '🇶🇦', dialCode: '+974', placeholder: '0000 0000' },
  { name: 'Kuwait', code: 'KW', flag: '🇰🇼', dialCode: '+965', placeholder: '0000 0000' },
  { name: 'Oman', code: 'OM', flag: '🇴🇲', dialCode: '+968', placeholder: '0000 0000' },
  { name: 'Bahrain', code: 'BH', flag: '🇧🇭', dialCode: '+973', placeholder: '0000 0000' },
  { name: 'Singapore', code: 'SG', flag: '🇸🇬', dialCode: '+65', placeholder: '0000 0000' },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾', dialCode: '+60', placeholder: '00-000 0000' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪', dialCode: '+49', placeholder: '000 0000000' },
  { name: 'France', code: 'FR', flag: '🇫🇷', dialCode: '+33', placeholder: '0 00 00 00 00' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹', dialCode: '+39', placeholder: '000 000 0000' },
  { name: 'Spain', code: 'ES', flag: '🇪🇸', dialCode: '+34', placeholder: '000 00 00 00' },
  { name: 'Netherlands', code: 'NL', flag: '🇳🇱', dialCode: '+31', placeholder: '0 00000000' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭', dialCode: '+41', placeholder: '00 000 00 00' },
  { name: 'Ireland', code: 'IE', flag: '🇮🇪', dialCode: '+353', placeholder: '00 000 0000' },
  { name: 'New Zealand', code: 'NZ', flag: '🇳🇿', dialCode: '+64', placeholder: '00 000 0000' },
  { name: 'South Africa', code: 'ZA', flag: '🇿🇦', dialCode: '+27', placeholder: '00 000 0000' },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰', dialCode: '+92', placeholder: '000 0000000' },
  { name: 'Bangladesh', code: 'BD', flag: '🇧🇩', dialCode: '+880', placeholder: '0000-000000' },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰', dialCode: '+94', placeholder: '00 000 0000' },
  { name: 'Nepal', code: 'NP', flag: '🇳🇵', dialCode: '+977', placeholder: '000-0000000' },
  { name: 'Philippines', code: 'PH', flag: '🇵🇭', dialCode: '+63', placeholder: '000 000 0000' },
  { name: 'Indonesia', code: 'ID', flag: '🇮🇩', dialCode: '+62', placeholder: '000-0000-0000' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵', dialCode: '+81', placeholder: '00-0000-0000' },
  { name: 'China', code: 'CN', flag: '🇨🇳', dialCode: '+86', placeholder: '000 0000 0000' },
  { name: 'Brazil', code: 'BR', flag: '🇧🇷', dialCode: '+55', placeholder: '(00) 00000-0000' },
];

export const DEFAULT_COUNTRY: Country = COUNTRIES[0]; // India (+91)
