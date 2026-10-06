import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Acupuncture Practice Management Software | pamperMe",
  description: "Secure patient management, easy online scheduling, and streamlined billing built for acupuncturists.",
};

export default function AcupuncturePage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The practice software that keeps your clinic in perfect flow."
      heroSubtitle="Secure patient management, easy online scheduling, and streamlined billing built for acupuncturists."
    />
  );
}
