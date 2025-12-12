import type { Anomaly } from '@/entities/anomaly/types';

export let mockAnomalies: Anomaly[] = [
  { id: '1', name: 'Kitsune', threatLevel: 'Low', location: 'Forest Shrine', status: 'Active' },
  { id: '2', name: 'Banshee', threatLevel: 'Medium', location: 'Abandoned Castle', status: 'Active' },
  { id: '3', name: 'Yurei', threatLevel: 'High', location: 'Old School', status: 'Active' },
  { id: '4', name: 'Oni', threatLevel: 'Critical', location: 'Mountain Temple', status: 'Active' },
  { id: '5', name: 'Tengu', threatLevel: 'Low', location: 'Sky Bridge', status: 'Active' },
];