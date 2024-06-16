interface Intro {
  name: string;
  nickname: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  website: string;
}

interface Technology {
  section: string;
  details: string;
}

interface Language {
  language: string;
  level: string;
}

interface WorkExperience {
  position: string;
  company: string;
  url?: string; // optional, as not all entries have it
  years: [string, string];
  details: string[];
}

interface Education {
  head: string;
  details: string;
}

interface Certificate {
  name: string;
}

type TData = {
  intro: Intro;
  technologies: Technology[];
  languages: Language[];
  workExperiences: WorkExperience[];
  educations: Education[];
  interests: string[];
  certificates: Certificate[];
};
