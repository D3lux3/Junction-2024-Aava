import Applicant from "./Applicant";
import JobExperience from "./JobExperience";

Applicant.hasMany(JobExperience);
JobExperience.belongsTo(Applicant);

Applicant.sync({ force: true, alter: true });
JobExperience.sync({ force: true, alter: true });

export { Applicant, JobExperience };