import type { Language } from "../shared/Language";

export interface LandingModule {
  number: string;
  title: string;
  description: string;
}

export interface LandingContent {
  nav: string[];
  eyebrow: string;
  title: string;
  intro: string;
  primaryAction: string;
  secondaryAction: string;
  status: string;
  liveLabel: string;
  sectionLabel: string;
  sectionTitle: string;
  sectionText: string;
  modules: LandingModule[];
  quote: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaText: string;
  ctaAction: string;
  fieldNote: string;
  scrollStatus: string;
}

export type LandingContentByLanguage = Record<Language, LandingContent>;
