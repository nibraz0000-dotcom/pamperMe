import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Pilates Studio Software & Class Booking | pamperMe",
  description: "Flexible class booking, waitlist management, and automated memberships for modern Pilates studios.",
};

export default function PilatesPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The studio software that strengthens your Pilates business."
      heroSubtitle="Flexible class booking, waitlist management, and automated memberships for modern Pilates studios."
    />
  );
}
