import { ReactNode } from 'react';

export interface FeatureItem {
  id: string;
  title: string;
  titleEn?: string;
  icon: ReactNode;
  description: string;
  descriptionEn?: string;
  details: string;
  detailsEn?: string;
  chartType: 'bar' | 'pie' | 'line' | 'advanced';
  capabilities: string[];
  capabilitiesEn?: string[];
  uniqueFeature: string;
  uniqueFeatureEn?: string;
  aiInsight: string;
  aiInsightEn?: string;
}

export interface AIFeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
  chartType: 'bar' | 'pie' | 'line' | 'advanced';
  cardTitle: string;
  cardValue: string;
  insight: string;
  chartData: any; // This could be more specifically typed based on chart data structure
  detailedDescription: string;
}