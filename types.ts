
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClinicLocation {
  name: string;
  address: string;
  phone: string;
  hours: string;
  affiliations: string[];
}
