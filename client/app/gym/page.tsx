import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Gym Management Software & Member Booking | pamperMe",
  description: "Powerful membership management, class bookings, and automated billing built for growing fitness centers.",
};

export default function GymPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The gym software that keeps your members moving."
      heroSubtitle="Powerful membership management, class bookings, and automated billing built for growing fitness centers."
    />
  );
}
