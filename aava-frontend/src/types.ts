export interface Company {
    id: string;
    companyName: string;
    email: string;
    bio: string;
    industry: string;
    city: string;
    size: number;
    companyWellbeingValues: CompanyWellbeingValue[];
    employees: Employee[];
    surveyAnswers: SurveyAnswer[];
}

export interface CompanyWellbeingValue {
    id: string;
    name: string;
    weight: number;
    companyId: string;
}

export interface Employee {
    id: string;
    email: string;
    companyId: string;
}

export interface SurveyAnswer {
    id: string;
    wbName: string;
    answerValue: number;
    companyId: string;
    employeeId: string;
}