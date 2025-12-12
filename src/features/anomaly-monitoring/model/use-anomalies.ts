'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchAnomalies } from '../api/fetch-anomalies';

export function useAnomalies() {
  return useQuery({
    queryKey: ['anomalies'],
    queryFn: fetchAnomalies,
    refetchInterval: 5000,        // ← каждые 5 секунд автоматически
    refetchIntervalInBackground: true, // работает даже если вкладка неактивна
    staleTime: 0,                 // всегда считаем данные устаревшими сразу
  });
}