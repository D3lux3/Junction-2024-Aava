import { string, number, object } from 'yup';

export const applicantSchema = object({
    firstName: string().required(),
    lastName: string().required(),
    email: string().email().required(),
    bio: string().required(),
});

export const jobExperienceSchema = object({
    companyName: string().required(),
    field: string().required(),
    startDate: number().required(), // Unix timestamp
    endDate: number().required(), // Unix timestamp
    applicantId: string().required(),
});

export interface JobExperience {
    companyName: string;
    field: string;
    startDate: number;
    endDate: number;
    applicantId: string;
}

export interface JobExperienceWithId extends JobExperience {
    id: string;
}

export interface Applicant {
    firstName: string;
    lastName: string;
    email: string;
    bio: string;
}

export interface ApplicantWithId extends Applicant {
    id: string;
}