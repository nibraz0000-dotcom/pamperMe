import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Professional Coaching Software & Booking | pamperMe",
  description: "Seamless session booking, progress tracking, and secure payments built for professional coaches.",
};

export default function CoachingPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The coaching software that drives your clients' success."
      heroSubtitle="Seamless session booking, progress tracking, and secure payments built for professional coaches."
    />
  );
}
