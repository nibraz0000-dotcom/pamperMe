import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Physical Therapy Practice Management Software | pamperMe",
  description: "Secure patient records, easy session scheduling, and streamlined billing built for physical therapists.",
};

export default function PhysicalTherapyPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The therapy software that accelerates your clinic's workflow."
      heroSubtitle="Secure patient records, easy session scheduling, and streamlined billing built for physical therapists."
    />
  );
}
