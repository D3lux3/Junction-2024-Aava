import { string, number, object, array } from 'yup';

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

export const educationSchema = object({
    schoolName: string().required(),
    educationLevel: number().required(),
    studyState: string().required(),
    applicantId: string().required(),
});

export const applicantWellbeingValueSchema = object({
    name: string().required(),
    weight: number().min(1).max(5).required(),
    applicantId: string().required()
});

export const companyWellbeingValueSchema = object({
    name: string().required(),
    weight: number().min(1).max(5).required(),
    companyId: string().required()
});

export const companySchema = object({
    companyName: string().required(),
    email: string().required(),
    bio: string().required(),
    industry: string().required(),
    city: string().required(),
    size: number().min(50).required()
});

export const employeeSchema = object({
    email: string().email().required(),
    companyId: string().required()
});


export const surveyAnswerSchema = object({
    wbName: string().required(),
    answerValue: number().required(),
});

export const arrayOfSurveyAnswerSchema = array(surveyAnswerSchema);

export const surveyAnswerRequestSchema = object({
    companyId: string().required(),
    employeeId: string().required(),
    surveyAnswers: array(surveyAnswerSchema)
});

export interface SurveyAnswer {
    wbName: string;
    answerValue: number;
    employeeId: string;
    companyId: string;
}

export interface Company {
    companyName: string;
    email: string;
    bio: string;
    industry: string;
    city: string;
    size: number;
}

export interface CompanyWithId extends Company {
    id: string;
}

export interface Education {
    schoolName: string;
    educationLevel: number;
    studyState: string;
    applicantId: string;
}

export interface EducationWithId extends Education {
    id: string;
}

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