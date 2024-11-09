import { sequelize } from '../utils/database';
import { GET_COMPANY_DISTANCES, GET_COMPANY_JOB_AND_INFO } from './queries';

export const getCompanyDistances = async (empId: string) => {
  const [results] = await sequelize.query(GET_COMPANY_DISTANCES, {
    bind: [empId],
  });
  return results;
};

export const getCompanyJobAndInfo = async (companyId: string) => {
  const [results] = await sequelize.query(GET_COMPANY_JOB_AND_INFO, {
    bind: [companyId],
  });
  return results;
}