import { CaptureResponseSchema } from '@/entities/anomaly/types';

export async function captureAnomaly(id: string): Promise<{ success: boolean }> {
  const response = await fetch(`/api/capture/${id}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}),
  });
  if (!response.ok) {
    throw new Error('Failed to capture anomaly');
  }
  const data = await response.json();
  return CaptureResponseSchema.parse(data);
}