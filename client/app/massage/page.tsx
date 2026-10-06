import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Massage Therapy Practice & Booking Software | pamperMe",
  description: "Simple appointment scheduling, digital intake forms, and seamless payments for massage therapists.",
};

export default function MassagePage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The massage software that takes the stress out of business."
      heroSubtitle="Simple appointment scheduling, digital intake forms, and seamless payments for massage therapists."
    />
  );
}
