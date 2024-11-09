import { sequelize } from '../utils/database';
import { GET_COMPANY_DISTANCES } from './queries';

export const getCompanyDistances = async (empId: number) => {
  const [results] = await sequelize.query(GET_COMPANY_DISTANCES, {
    bind: [empId],
  });
  return results;
};
