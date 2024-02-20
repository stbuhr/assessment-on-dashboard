export type AssessmentModuleType =
  | 'Unknown'
  | 'CompetenceProfile'
  | 'CompetenceAtlas'
  | 'TeamRoles'
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

export type CompetenceAtlasInfo = {
  assessmentId: string;
  content: string;
};

export const defaultCompetenceAtlasInfo: CompetenceAtlasInfo = {
  assessmentId: '',
  content: '',
};

export type TeamRolesInfo = {
  assessmentId: string;
  content: string;
};

export const defaultTeamRolesInfo: TeamRolesInfo = {
  assessmentId: '',
  content: '',
};
