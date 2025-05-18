export interface ProfileTranslations {
  INTRODUCTION: string;
  CREATIVE_ROLE: string;
  DOWNLOAD_CV: string;
  TALK_TO_ME: string;
}

export interface InfoData {
  name: string;
  profession: string;
  age: string;
  author: string;
  location: string;
  description: string;
}

export interface Translations {
  PROFILE: ProfileTranslations;
  info: InfoData;
}

export interface LayoutContextProps {
  translations: Translations;
  isRTL: boolean;
}
