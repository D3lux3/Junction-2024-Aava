export const GET_COMPANY_DISTANCES = `
SELECT
    c.id AS company_id,
    SQRT(
        SUM(POWER(wbc.weight - wb.weight, 2))
    ) AS distance,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'name', wbc.name,
            'applicant_weight', wbc.weight,
            'company_weight', wb.weight
        )
    ) AS weights
FROM
    applicants a
JOIN applicantwellbeingvalues wbc ON a.id = wbc.applicant_id
JOIN companywellbeingvalues wb ON wbc.name = wb.name
JOIN companies c ON c.id = wb.company_id
WHERE
    a.id = '123'
GROUP BY
    c.id
ORDER BY
    distance
`;

export const GET_COMPANY_JOB_AND_INFO = `
SELECT
    c.id AS company_id,
    c.size,
    c.industry,
    c.city AS location,
    JSON_AGG(
        JSON_BUILD_OBJECT(
            'job_name', j.job_name,
            'job_description', j.job_description
        )
    ) AS jobs
FROM
    companies c
LEFT JOIN joblistings j ON c.id = j.company_id
WHERE
    c.id = $1
GROUP BY
    c.id
`;