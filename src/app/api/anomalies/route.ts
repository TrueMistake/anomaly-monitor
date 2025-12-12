import { NextResponse } from 'next/server';
import { mockAnomalies } from '@/shared/lib/mock-anomalies';

export async function GET() {
  return NextResponse.json(mockAnomalies);
}