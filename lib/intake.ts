export type IntakeStage = 'new' | 'scoped' | 'in_progress' | 'delivered';

export interface IntakeRequest {
  id: string;
  clientName: string;
  contactEmail: string;
  company?: string;
  summary: string;
  source: 'lead_form' | 'manual';
  stage: IntakeStage;
  createdAt: string;
  updatedAt: string;
  notes?: string;
}

export const STAGES: { key: IntakeStage; label: string }[] = [
  { key: 'new', label: 'New' },
  { key: 'scoped', label: 'Scoped' },
  { key: 'in_progress', label: 'In progress' },
  { key: 'delivered', label: 'Delivered' },
];
