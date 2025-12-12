'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export function QueryClientProviderWrapper({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 10, // 10 секунд
          },
        },
      })
  );
  
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}