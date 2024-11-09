import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Company, CompanyWellbeingValues } from '../models/';
import { CompanySchema, companyWellbeingValueSchema } from '../types';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: [CompanyWellbeingValues]
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * POST /companies
 * Creates a new company.
 *  Example request body:
 * {
    "companyName": "Tech Innovators Inc.",
    "email": "contact@techinnovators.com",
    "bio": "Leading the way in tech innovation.",
    "industry": "Technology",
    "city": "San Francisco",
    "size": 100
    }
 * */
router.post('/', async (req, res) => {
  try {
    const validatedRequestBody = await CompanySchema.validate(req.body);
    const CompanyWithId = { ...validatedRequestBody, id: uuidv4() };
    const company = await Company.create(CompanyWithId);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

router.post('/wellbeing/:id', async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);

    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const validatedRequestBody = await companyWellbeingValueSchema.validate({ ...req.body, companyId: company.id });
    const companyWellBeingWithId = { ...validatedRequestBody, id: uuidv4() };
    const createdCompanyWellBeing = await CompanyWellbeingValues.create(companyWellBeingWithId);
    res.status(201).json(createdCompanyWellBeing);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;