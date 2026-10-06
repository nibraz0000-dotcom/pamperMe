import { Metadata } from 'next';
import BusinessTypeTemplate from '../../components/businessType';

export const metadata: Metadata = {
  title: "Cross Training Gym & Box Software | pamperMe",
  description: "Workout tracking, class scheduling, and automated member billing built for cross-training gyms.",
};

export default function CrossTrainingPage() {
  return (
    <BusinessTypeTemplate
      heroTitle="The box software that powers your functional fitness community."
      heroSubtitle="Workout tracking, class scheduling, and automated member billing built for cross-training gyms."
    />
  );
}
