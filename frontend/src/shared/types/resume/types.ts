import type { ResumeKeys } from './keys';

export type IResumeSummary = string;

export interface IResumeEducation {
  specialty: string;
  degree: string;
  university: string;
  location: string;
  since: string;
  until: string;
  details: string[];
}

export interface IResumeExperience {
  name: string;
  location: string;
  position: string;
  stack: string[];
  since: string;
  until: string;
  details: string[];
}

export type IResumeSkills = Record<string, string[]>;

export interface IResume {
  [ResumeKeys.summary]: IResumeSummary;
  [ResumeKeys.education]: IResumeEducation[];
  [ResumeKeys.experience]: IResumeExperience[];
  [ResumeKeys.skills]: Record<string, IResumeSkills>;
}
