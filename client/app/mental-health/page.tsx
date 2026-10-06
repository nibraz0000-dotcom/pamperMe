import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Mental Health & Therapy Practice Software | pamperMe",
  description: "Private and secure bookings, client management, and seamless billing for therapists and counselors.",
};

export default function MentalHealthPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The practice software that supports your mental health clinic."
      heroSubtitle="Private and secure bookings, client management, and seamless billing for therapists and counselors."
    />
  );
}
