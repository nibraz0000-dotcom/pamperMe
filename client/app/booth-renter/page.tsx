import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Booth Renter Software & Booking App | pamperMe",
  description: "Simple 24/7 self-booking, seamless payments, and client management built for independent stylists and renters.",
};

export default function BoothRenterPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The software that runs your booth like an independent business."
      heroSubtitle="Simple 24/7 self-booking, seamless payments, and client management built for independent stylists and renters."
    />
  );
}
