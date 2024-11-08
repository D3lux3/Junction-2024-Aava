import express from 'express';
import { Applicant, JobExperience } from '../models';
import { applicantSchema, jobExperienceSchema } from '../types';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const applicants = await Applicant.findAll({
      include: JobExperience
    });
    res.json(applicants);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * POST /applicants
 * Creates a new applicant.
 * Example request body:
 * {
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "bio": "A highly motivated software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success."
}
 */
router.post('/', async (req, res) => {
  try {
    const validatedRequestBody = await applicantSchema.validate(req.body);
    const applicantWithId = { ...validatedRequestBody, id: uuidv4() };
    const applicant = await Applicant.create(applicantWithId);
    res.status(201).json(applicant);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * POST /applicants/experience/:id
 * Creates new job experience for an applicant.
 * id is the id of the applicant.
 * Example request body:
 * {
  "companyName": "Tech Solutions Inc.",
  "field": "Software Development",
  "startDate": 20200101,
  "endDate": 20211231
}
 */
router.post('/experience/:id', async (req, res) => {
  try {
    const applicant = await Applicant.findByPk(req.params.id);

    if (!applicant) {
      res.status(404).json({ error: 'Applicant not found' });
      return;
    }

    const validatedRequestBody = await jobExperienceSchema.validate({ ...req.body, applicantId: applicant.id });

    const jobExperienceWithId = { ...validatedRequestBody, id: uuidv4() };
    const savedJobExperience = await JobExperience.create(jobExperienceWithId);
    res.status(201).json(savedJobExperience);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;