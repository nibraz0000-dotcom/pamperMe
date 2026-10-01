import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Salon Booking & Management Software | pamperMe",
  description: "The all-in-one salon software built for salon owners and hair stylists. 24/7 online booking, contactless POS, marketing, and team management.",
};

export default function SalonPage() {
  return (
    <BusinessTypeTemplate
      heroBadge="SALON SOFTWARE"
      heroTitle="The salon software that keeps your chairs full."
      heroSubtitle="Effortless 24/7 online booking, automated marketing, contactless salon POS, and team management built specifically for salon owners and independent stylists."
    />
  );
}
