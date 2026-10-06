import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Makeup Artist Booking & Studio Software | pamperMe",
  description: "Smart 24/7 scheduling, portfolio integration, and easy payments built for professional makeup artists.",
};

export default function MakeupPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The booking software that highlights your makeup artistry."
      heroSubtitle="Smart 24/7 scheduling, portfolio integration, and easy payments built for professional makeup artists."
    />
  );
}
