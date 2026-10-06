import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Pet Grooming Business Software & Booking | pamperMe",
  description: "Easy appointment scheduling, pet profile management, and seamless payments for pet groomers.",
};

export default function PetGroomingPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The grooming software that keeps your furry clients looking sharp."
      heroSubtitle="Easy appointment scheduling, pet profile management, and seamless payments for pet groomers."
    />
  );
}
