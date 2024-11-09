export const GET_COMPANY_DISTANCES = `
  SELECT
      c.id AS company_id,
      SQRT(
          SUM(POWER(wbc.weight - wb.weight, 2))
      ) AS distance
  FROM
      applicants a
  JOIN applicantWellbeingValues wbc ON a.id = wbc.applicant_id
  JOIN companies c ON c.id = wb.company_id
  JOIN companyWellbeingValues wb ON c.id = wb.company_id AND wbc.name = wb.name
  WHERE
      a.id = $1
  GROUP BY
      c.id
  ORDER BY
      distance;
`;