export interface Feedback {
  firstname: string;
  lastname: string;
  telNumber: number;
  email: string;
  agree: boolean;
  contactType: string;
  message: string;
}

export const CONTACT_TYPES: string[] = ['None', 'Tel', 'Email'];
