import Applicant from "./Applicant";
import JobExperience from "./JobExperience";
import { sequelize } from '../utils/database';

Applicant.hasMany(JobExperience);
JobExperience.belongsTo(Applicant);

const syncModels = async () => {
  const transaction = await sequelize.transaction();
  try {
    await Applicant.sync({ alter: true, force: true });
    await JobExperience.sync({ alter: true, force: true });
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
};

syncModels().catch(error => {
  console.error('Failed to sync models:', error);
});

export { Applicant, JobExperience };