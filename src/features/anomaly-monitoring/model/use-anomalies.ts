'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchAnomalies } from '../api/fetch-anomalies';

export function useAnomalies() {
  return useQuery({
    queryKey: ['anomalies'],
    queryFn: fetchAnomalies,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
    staleTime: 0,
  });
}