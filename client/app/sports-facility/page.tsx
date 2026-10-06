import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Sports Facility Software & Court Reservations | pamperMe",
  description: "Smart court reservations, membership management, and easy payments for busy sports facilities.",
};

export default function SportsFacilityPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The facility software that manages your courts and fields."
      heroSubtitle="Smart court reservations, membership management, and easy payments for busy sports facilities."
    />
  );
}
