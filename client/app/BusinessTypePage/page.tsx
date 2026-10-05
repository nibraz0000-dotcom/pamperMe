import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Salon Booking & Management Software | pamperMe",
  description: "The all-in-one salon software built for salon owners and hair stylists. 24/7 online booking, contactless POS, marketing, and team management.",
};

export default function SalonPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The salon software that keeps your chairs full."
      heroSubtitle="Smart 24/7 online booking, contactless payments, and effortless salon management built for modern stylists and owners."
    />
  );
}
