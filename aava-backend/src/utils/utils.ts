import { Applicant, JobExperience, Education, ApplicantWellbeingValue, Company, CompanyWellbeingValues, Employee, SurveyAnswer, JobListing } from "../models";
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
        email: "stech@company.com",
        bio: "A software company that develops innovative programs.",
        industry: "Software Development",
        city: "Helsinki",
        size: "500+"
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

      const employee1 = await Employee.create({
        id: uuidv4(),
        email: "employee1@example.com",
        companyId: company.id
      });

      const employee2 = await Employee.create({
        id: uuidv4(),
        email: "employee2@example.com",
        companyId: company.id
      });

      await SurveyAnswer.create({
        id: uuidv4(),
        wbName: "Work-Life Balance",
        answerValue: 2.9,
        employeeId: employee1.id,
        companyId: company.id
      });

      await SurveyAnswer.create({
        id: uuidv4(),
        wbName: "Workplace Safety",
        answerValue: 3.8,
        employeeId: employee1.id,
        companyId: company.id
      });

      await SurveyAnswer.create({
        id: uuidv4(),
        wbName: "Mental Health Support",
        answerValue: 4.2,
        employeeId: employee1.id,
        companyId: company.id
      });

      await SurveyAnswer.create({
        id: uuidv4(),
        wbName: "Diversity and Inclusion",
        answerValue: 5.0,
        employeeId: employee1.id,
        companyId: company.id
      });

      await SurveyAnswer.create({
        id: uuidv4(),
        wbName: "Flexible Working Conditions",
        answerValue: 4.7,
        employeeId: employee1.id,
        companyId: company.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Software Developer",
        jobDescription: "Develop innovative programs that expedite the efficiency and effectiveness of organizational success.",
        companyId: company.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Data Engineer",
        jobDescription: "Develop and maintain scalable data pipelines and build out new API integrations to support continuing increases in data volume and complexity.",
        companyId: company.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Product Manager",
        jobDescription: "Lead the ideation, technical development, and launch of innovative products.",
        companyId: company.id
      });
      
      const company2 = await Company.create({
        id: uuidv4(),
        companyName: "Health Solutions Oy",
        email: "healthtec@company.com",
        bio: "Healthcare company that provides innovative solutions.",
        industry: "Healthcare",
        city: "Vantaa",
        size: "50-100"
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Work-Life Balance",
        weight: 4.2,
        companyId: company2.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Workplace Safety",
        weight: 5,
        companyId: company2.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Mental Health Support",
        weight: 4,
        companyId: company2.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Diversity and Inclusion",
        weight: 3.3,
        companyId: company2.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Flexible Working Conditions",
        weight: 3.7,
        companyId: company2.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Healthcare Specialist",
        jobDescription: "Provide healthcare services to patients in need.",
        companyId: company2.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Storeroom Clerk",
        jobDescription: "Maintain inventory levels and perform inventory audits.",
        companyId: company2.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Research Scientist",
        jobDescription: "Investigate the natural world, conduct experiments, and develop theories",
        companyId: company2.id
      });
      
      const company3 = await Company.create({
        id: uuidv4(),
        companyName: "Construction Oy",
        email: "construction@company.com",
        bio: "Construction company that provides innovative solutions.",
        industry: "Construction",
        city: "Oulu",
        size: "500+"
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Work-Life Balance",
        weight: 3.1,
        companyId: company3.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Workplace Safety",
        weight: 1.6,
        companyId: company3.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Mental Health Support",
        weight: 3.2,
        companyId: company3.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Diversity and Inclusion",
        weight: 4.2,
        companyId: company3.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Flexible Working Conditions",
        weight: 2.0,
        companyId: company3.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Electrician",
        jobDescription: "Install and maintain electrical systems in homes, businesses, and factories.",
        companyId: company3.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Building Inspector",
        jobDescription: "Inspect buildings to ensure they meet local and national building codes",
        companyId: company3.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Construction Worker",
        jobDescription: "Perform tasks involving physical labor at construction sites.",
        companyId: company3.id
      });

      const company4 = await Company.create({
        id: uuidv4(),
        companyName: "Finance and Investments Oy",
        email: "fai@company.com",
        bio: "Finance company that provides innovative solutions.",
        industry: "Finance",
        city: "Tampere",
        size: "100-500"
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Work-Life Balance",
        weight: 2.2,
        companyId: company4.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Workplace Safety",
        weight: 4.8,
        companyId: company4.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Mental Health Support",
        weight: 2.8,
        companyId: company4.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Diversity and Inclusion",
        weight: 3.7,
        companyId: company4.id
      });

      await CompanyWellbeingValues.create({
        id: uuidv4(),
        name: "Flexible Working Conditions",
        weight: 4.9,
        companyId: company4.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Financial Analyst",
        jobDescription: "Analyze financial data and create financial models for decision-making.",
        companyId: company4.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Accountant",
        jobDescription: "Prepare financial records and ensure compliance with laws and regulations.",
        companyId: company4.id
      });

      await JobListing.create({
        id: uuidv4(),
        jobName: "Investment Banker",
        jobDescription: "Advise clients on financial transactions, such as mergers and acquisitions.",
        companyId: company4.id
      });

      console.log('Database populated with mock values.');
    } catch (error) {
      console.error('Failed to populate database:', error);
    }
    
  };

