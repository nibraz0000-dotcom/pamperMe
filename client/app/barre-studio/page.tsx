import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Barre Studio Software & Class Management | pamperMe",
  description: "Seamless class scheduling, client engagement, and easy membership management for barre studios.",
};

export default function BarreStudioPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The barre software that raises the bar for your studio."
      heroSubtitle="Seamless class scheduling, client engagement, and easy membership management for barre studios."
    />
  );
}
