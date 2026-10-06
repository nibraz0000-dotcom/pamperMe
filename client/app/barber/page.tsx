import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Barbershop Booking & Management Software | pamperMe",
  description: "Fast walk-in management, online booking, and contactless payments built for modern barbers and shops.",
};

export default function BarberPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The barbershop software that keeps your chairs turning."
      heroSubtitle="Fast walk-in management, online booking, and contactless payments built for modern barbers and shops."
    />
  );
}
