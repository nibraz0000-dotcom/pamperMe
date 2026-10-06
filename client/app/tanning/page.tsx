import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Tanning Salon Software & Membership Booking | pamperMe",
  description: "Effortless package tracking, automated memberships, and online booking designed for tanning salons.",
};

export default function TanningPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The salon software that keeps your tanning beds booked."
      heroSubtitle="Effortless package tracking, automated memberships, and online booking designed for tanning salons."
    />
  );
}
