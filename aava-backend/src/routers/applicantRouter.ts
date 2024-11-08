import express from 'express';
import { Applicant, JobExperience } from '../models';
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

router.post('/', async (req, res) => {

});

export default router;