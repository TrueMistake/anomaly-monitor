import type { Metadata } from 'next';
import { QueryClientProviderWrapper } from '@/shared/lib/query-client-provider';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Anomaly Monitoring',
  description: 'Real-time spirit & anomaly monitoring system',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
    <body>
    <QueryClientProviderWrapper>
      {children}
    </QueryClientProviderWrapper>
    </body>
    </html>
  );
}