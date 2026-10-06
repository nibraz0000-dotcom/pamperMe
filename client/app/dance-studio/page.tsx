import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Dance Studio Management & Enrollment Software | pamperMe",
  description: "Easy class enrollment, parent portals, and automated billing designed for modern dance studios.",
};

export default function DanceStudioPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The studio software that keeps your dance classes in step."
      heroSubtitle="Easy class enrollment, parent portals, and automated billing designed for modern dance studios."
    />
  );
}
