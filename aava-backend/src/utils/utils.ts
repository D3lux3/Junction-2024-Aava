import { Applicant, JobExperience, Education, ApplicantWellbeingValue, Company, CompanyWellbeingValues } from "../models";
import { v4 as uuidv4 } from 'uuid';

export const populateDatabase = async () => {
    try {
      const applicant = await Applicant.create({
        id: "123",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        bio: "A highly motivated software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success."
      });
  
      await JobExperience.create({
        id: uuidv4(),
        companyName: "Tech Solutions Inc.",
        field: "Software Development",
        startDate: 20200101,
        endDate: 20211231,
        applicantId: applicant.id
      });
  
      await Education.create({
        id: uuidv4(),
        schoolName: "University of Helsinki",
        educationLevel: 5,
        studyState: "Graduated",
        applicantId: applicant.id
      });
  
      await ApplicantWellbeingValue.create({
        id: uuidv4(),
        name: "Work-Life Balance",
        weight: 1.5,
        applicantId: applicant.id
      });

      await ApplicantWellbeingValue.create({
        id: uuidv4(),
        name: "Workplace Safety",
        weight: 2,
        applicantId: applicant.id
      });
  
  
      const company = await Company.create({
        id: uuidv4(),
        companyName: "Tech Solutions Oy",
        email: "test@company.com",
        bio: "A software company that develops innovative programs.",
        industry: "Software Development",
        city: "Helsinki",
        size: 100
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Work-Life Balance",
        weight: 2.5,
        companyId: company.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Workplace Safety",
        weight: 3,
        companyId: company.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Mental Health Support",
        weight: 1,
        companyId: company.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Diversity and Inclusion",
        weight: 5,
        companyId: company.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Flexible Working Conditions",
        weight: 4,
        companyId: company.id
      });
  
      console.log('Database populated with mock values.');
    } catch (error) {
      console.error('Failed to populate database:', error);
    }
  };

