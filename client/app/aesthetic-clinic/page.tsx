import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Aesthetic Clinic Software & Patient Booking | pamperMe",
  description: "Secure client records, intelligent scheduling, and seamless payments built for medical aesthetic professionals.",
};

export default function AestheticClinicPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The clinic software that powers your aesthetic practice."
      heroSubtitle="Secure client records, intelligent scheduling, and seamless payments built for medical aesthetic professionals."
    />
  );
}
