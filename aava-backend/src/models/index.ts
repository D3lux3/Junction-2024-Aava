import Applicant from "./Applicant";
import JobExperience from "./JobExperience";
import { sequelize } from '../utils/database';
import Education from "./Education";
import ApplicantWellbeingValue from "./ApplicantWellbeingValues";

Applicant.hasMany(JobExperience);
Applicant.hasOne(Education);
Applicant.hasMany(ApplicantWellbeingValue);

JobExperience.belongsTo(Applicant);
Education.belongsTo(Applicant);
ApplicantWellbeingValue.belongsTo(Applicant);

const syncModels = async () => {
  const transaction = await sequelize.transaction();
  try {
    await Applicant.sync({ alter: true, force: true });
    await JobExperience.sync({ alter: true, force: true });
    await Education.sync({ alter: true, force: true });
    await ApplicantWellbeingValue.sync({ alter: true, force: true });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

syncModels().catch(error => {
  console.error('Failed to sync models:', error);
});

export { Applicant, JobExperience, Education, ApplicantWellbeingValue };