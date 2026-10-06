import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Tattoo Studio Software & Appointment Booking | pamperMe",
  description: "Smart consultation booking, deposit management, and digital consent forms for tattoo artists and shops.",
};

export default function TattooPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The studio software that leaves a lasting impression."
      heroSubtitle="Smart consultation booking, deposit management, and digital consent forms for tattoo artists and shops."
    />
  );
}
