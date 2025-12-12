import { AnomaliesResponseSchema } from '@/entities/anomaly/types';

export async function fetchAnomalies(): Promise<Anomaly[]> {
  const response = await fetch('/api/anomalies');
  if (!response.ok) {
    throw new Error('Failed to fetch anomalies');
  }
  const data = await response.json();
  return AnomaliesResponseSchema.parse(data);
}