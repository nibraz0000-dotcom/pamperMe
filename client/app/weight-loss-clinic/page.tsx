import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Weight Loss Clinic Software & Client Management | pamperMe",
  description: "Secure progress tracking, flexible scheduling, and automated billing built for weight loss professionals.",
};

export default function WeightLossClinicPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The clinic software that supports your clients' journeys."
      heroSubtitle="Secure progress tracking, flexible scheduling, and automated billing built for weight loss professionals."
    />
  );
}
