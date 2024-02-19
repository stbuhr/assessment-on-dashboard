export type AssessmentModuleType =
  | 'Unknown'
  | 'CompetenceProfile'
  | 'CompetenceAtlas'
  | 'Teamrole'
  | 'CompetenceDevelopment'
  | 'Strengths';

export interface AssessmentModuleInfo {
  title: string;
  type: AssessmentModuleType;
}

export const defaultAssessmentModuleInfo: AssessmentModuleInfo = {
  title: 'Modul wird geladen ...',
  type: 'Unknown',
};

export interface AssessmentInfo {
  id: string;
  title: string;
  subtitle: string;
  modules: AssessmentModuleInfo[];
}

export const defaultAssessmentInfo: AssessmentInfo = {
  id: '',
  title: '',
  subtitle: '',
  modules: [],
};

export type CompetenceProfileInfo = {
  assessmentId: string;
  content: string;
};

export const defaultCompetenceProfileInfo: CompetenceProfileInfo = {
  assessmentId: '',
  content: '',
};
