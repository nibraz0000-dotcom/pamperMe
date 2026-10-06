import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Martial Arts School & Dojo Software | pamperMe",
  description: "Rank tracking, automated memberships, and simple class scheduling built for modern martial arts studios.",
};

export default function MartialArtsPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The dojo software that empowers your martial arts school."
      heroSubtitle="Rank tracking, automated memberships, and simple class scheduling built for modern martial arts studios."
    />
  );
}
