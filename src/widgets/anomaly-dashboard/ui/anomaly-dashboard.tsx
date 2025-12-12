'use client';

import { useState } from 'react';
import { useAnomalies } from '@/features/anomaly-monitoring/model/use-anomalies';
import { useCaptureAnomaly } from '@/features/capture-anomaly/model/use-capture-anomaly';
import styles from './anomaly-dashboard.module.scss';

export function AnomalyDashboard() {
  const { data: anomalies, isLoading } = useAnomalies();
  const captureMutation = useCaptureAnomaly();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  if (isLoading) return <div className={styles.loader}>Loading...</div>;
  
  const handleCapture = (id: string) => {
    setErrorMessage(null);
    captureMutation.mutate(id, {
      onError: () => {
        setErrorMessage('Failed to capture the anomaly. Please try again.');
      },
    });
  };
  
  const getThreatColor = (level: string) => {
    switch (level) {
      case 'Low': return styles.low;
      case 'Medium': return styles.medium;
      case 'High': return styles.high;
      case 'Critical': return styles.critical;
      default: return '';
    }
  };
  
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.title}>Anomaly Monitoring</h1>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <div className={styles.cards}>
        {anomalies?.map((anomaly) => (
          <div key={anomaly.id} className={styles.card}>
            <h2>{anomaly.name}</h2>
            <p className={getThreatColor(anomaly.threatLevel)}>
              Threat: {anomaly.threatLevel}
            </p>
            <p>Location: {anomaly.location}</p>
            <p>Status: {anomaly.status}</p>
            {anomaly.status === 'Active' && (
              <button
                className={styles.button}
                onClick={() => handleCapture(anomaly.id)}
                disabled={captureMutation.isPending}
              >
                Capture
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}