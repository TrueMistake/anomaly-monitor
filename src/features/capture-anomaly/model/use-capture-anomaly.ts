'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { captureAnomaly } from '../api/capture-anomaly';
import type { Anomaly } from '@/entities/anomaly/types';

export function useCaptureAnomaly() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: captureAnomaly,
    
    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ['anomalies'] });
      
      const previousAnomalies = queryClient.getQueryData<Anomaly[]>(['anomalies']);
      
      queryClient.setQueryData<Anomaly[]>(['anomalies'], (old = []) =>
        old.map((a) => (a.id === id ? { ...a, status: 'Captured' as const } : a))
      );
      
      return { previousAnomalies };
    },
    
    onError: (_err, _id, context) => {
      if (context?.previousAnomalies !== undefined) {
        queryClient.setQueryData(['anomalies'], context.previousAnomalies);
      }
    },
  });
}