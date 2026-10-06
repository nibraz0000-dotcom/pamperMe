import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Nutritionist & Dietitian Practice Software | pamperMe",
  description: "Secure client tracking, easy consultation scheduling, and automated billing for nutrition professionals.",
};

export default function NutritionistPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The practice software that nourishes your consulting business."
      heroSubtitle="Secure client tracking, easy consultation scheduling, and automated billing for nutrition professionals."
    />
  );
}
