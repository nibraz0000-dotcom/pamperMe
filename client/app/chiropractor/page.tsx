import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Chiropractic Practice Management Software | pamperMe",
  description: "Secure patient intake, easy appointment scheduling, and automated billing built for chiropractors.",
};

export default function ChiropractorPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The clinic software that aligns your practice perfectly."
      heroSubtitle="Secure patient intake, easy appointment scheduling, and automated billing built for chiropractors."
    />
  );
}
