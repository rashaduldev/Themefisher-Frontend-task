export interface Translations {
  PROFILE: ProfileTranslations;
  info: InfoData;
  education: EducationItem[];
  workHistory: WorkHistoryItem[];
  skills: Skill[];
  contactForm:FormData;
  pricing: {
    heading: string;
    month: string;
    button: string;
    plans: Plan[];
  };
}

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
export interface LayoutContextProps {
  translations: Translations;
  isRTL: boolean;
}

export interface EducationItem {
  period: string;
  university: string;
  degree: string;
  description: string;
}

export interface WorkHistoryItem {
  period: string;
  company: string;
  role: string;
  description: string;
}

export interface Skill {
  name: string;
  value: number;
}
export interface FormData  {
  heading: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  sendButton: string;
};

export interface Feature {
  label: string;
  available: boolean;
};

export interface Plan {
  title: string;
  price: string;
  features: Feature[];
  featured?: boolean;
};