import { NextResponse } from 'next/server';
import { mockAnomalies } from '@/shared/lib/mock-anomalies';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const randomFail = Math.random() < 0.3;
  
  if (randomFail) {
    return NextResponse.json({ error: 'Capture failed' }, { status: 500 });
  }
  
  const anomaly = mockAnomalies.find(a => a.id === id);
  if (anomaly) {
    anomaly.status = 'Captured';
  }
  
  return NextResponse.json({ success: true });
}