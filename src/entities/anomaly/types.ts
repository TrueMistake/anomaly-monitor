import { z } from 'zod';

export const ThreatLevelEnum = z.enum(['Low', 'Medium', 'High', 'Critical']);

export const StatusEnum = z.enum(['Active', 'Captured']);

export const AnomalySchema = z.object({
  id: z.string(),
  name: z.string(),
  threatLevel: ThreatLevelEnum,
  location: z.string(),
  status: StatusEnum,
});

export type Anomaly = z.infer<typeof AnomalySchema>;

export const AnomaliesResponseSchema = z.array(AnomalySchema);

export const CaptureResponseSchema = z.object({
  success: z.boolean(),
});