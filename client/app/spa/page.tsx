import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Spa Management Software & Booking System | pamperMe",
  description: "Effortless online booking, staff scheduling, and relaxing checkout experiences designed for modern spas.",
};

export default function SpaPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The spa software that elevates every guest experience."
      heroSubtitle="Effortless online booking, staff scheduling, and relaxing checkout experiences designed for modern spas."
    />
  );
}
