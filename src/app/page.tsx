import { AnomalyDashboard } from '@/widgets/anomaly-dashboard/ui/anomaly-dashboard';

export default function HomePage() {
  return <AnomalyDashboard />;
}

export const metadata = {
  title: 'Anomaly Monitoring — Spirit Capture System',
  description: 'Real-time monitoring and capture of paranormal entities',
};