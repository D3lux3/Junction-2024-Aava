import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import { Company, CompanyWellbeingValues, Employee, SurveyAnswer } from '../models/';
import { surveyAnswerRequestSchema, companySchema, companyWellbeingValueSchema, employeeSchema, arrayOfSurveyAnswerSchema } from '../types';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const companies = await Company.findAll({
      include: [CompanyWellbeingValues, Employee, SurveyAnswer]
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * GET /companies/:id
 * Returns a single company with the given id.
 */
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id, {
      include: [CompanyWellbeingValues, Employee, SurveyAnswer]
    });
    res.json(company);
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
    const validatedRequestBody = await companySchema.validate(req.body);
    const CompanyWithId = { ...validatedRequestBody, id: uuidv4(), size: String(validatedRequestBody.size) };
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

/**
 * POST /companies/:id/employee
 * Creates a new employee for a company.
 * Example request body:
 * 
 {
  "email": "employee@example.com"
 }
 */
router.post('/employee/:id', async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);

    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    const validatedRequestBody = await employeeSchema.validate({ ...req.body, companyId: company.id });
    const employeeWithId = { ...validatedRequestBody, id: uuidv4() };
    const savedEmployee = await Employee.create(employeeWithId);
    res.status(201).json(savedEmployee);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

/**
 * POST /companies/:id/employee/:employeeid
 * Takes in a ARRAY of survey answers for an employee of a company.
 * POST to this endpoint in when the survey ends.
 */
router.post('/:id/employee/:employeeid', async (req, res) => {
  try {
    const company = await Company.findByPk(req.params.id);
    const employee = await Employee.findByPk(req.params.employeeid);

    if (!company) {
      res.status(404).json({ error: 'Company not found' });
      return;
    }

    if (!employee) {
      res.status(404).json({ error: 'Employee not found' });
      return;
    }

    const validatedRequestBody = await arrayOfSurveyAnswerSchema.validate(req.body);
    if (!validatedRequestBody) {
      res.status(400).json({ error: 'Invalid request body' });
      return;
    }
    const surveyAnswersToCreate = validatedRequestBody.map((surveyAnswer) => ({ ...surveyAnswer, id: uuidv4(), companyId: company.id, employeeId: employee.id }));
    const savedSurveyAnswers = await SurveyAnswer.bulkCreate(surveyAnswersToCreate);
    res.status(201).json(savedSurveyAnswers);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

export default router;