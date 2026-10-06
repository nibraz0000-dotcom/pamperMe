import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Med Spa Software & Clinical Practice Management | pamperMe",
  description: "Secure patient records, easy appointment booking, and seamless checkout built for medical spas.",
};

export default function MedSpaPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The med spa software that streamlines your clinical workflow."
      heroSubtitle="Secure patient records, easy appointment booking, and seamless checkout built for medical spas."
    />
  );
}
