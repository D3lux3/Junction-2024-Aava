import Applicant from "./Applicant";
import JobExperience from "./JobExperience";
import Employee from "./Employee";
import Education from "./Education";
import Company from "./Company";
import ApplicantWellbeingValue from "./ApplicantWellbeingValues";
import SurveyAnswer from "./SurveyAnswer";
import CompanyWellbeingValues from "./CompanyWellbeingValues";
import { sequelize } from '../utils/database';
import { populateDatabase } from "../utils/utils";

Applicant.hasMany(JobExperience);
Applicant.hasOne(Education);
Applicant.hasMany(ApplicantWellbeingValue);

Company.hasMany(CompanyWellbeingValues);
Company.hasMany(Employee);
Company.hasMany(SurveyAnswer);

Employee.hasMany(SurveyAnswer);

SurveyAnswer.belongsTo(Employee);
SurveyAnswer.belongsTo(Company);
Employee.belongsTo(Company);
JobExperience.belongsTo(Applicant);
Education.belongsTo(Applicant);
ApplicantWellbeingValue.belongsTo(Applicant);
CompanyWellbeingValues.belongsTo(Company);

const syncModels = async () => {
    const transaction = await sequelize.transaction();
    try {
        await Applicant.sync({ alter: true, force: true });
        await JobExperience.sync({ alter: true, force: true });
        await Education.sync({ alter: true, force: true });
        await Company.sync({ alter: true, force: true });
        await ApplicantWellbeingValue.sync({ alter: true, force: true });
        await CompanyWellbeingValues.sync({ alter: true, force: true });
        await Employee.sync({ alter: true, force: true });
        await SurveyAnswer.sync({ alter: true, force: true });
        await transaction.commit();
        await populateDatabase();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
};

syncModels().catch(error => {
    console.error('Failed to sync models:', error);
});

export { Applicant, JobExperience, Education, ApplicantWellbeingValue, Company, CompanyWellbeingValues, Employee, SurveyAnswer };