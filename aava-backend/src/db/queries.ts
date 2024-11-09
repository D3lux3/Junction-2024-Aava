export const GET_COMPANY_DISTANCES = `
SELECT
    c.id AS company_id,
    SQRT(
        SUM(POWER(wbc.weight - wb.weight, 2))
    ) AS distance
FROM
    applicants a
JOIN applicantwellbeingvalues wbc ON a.id = wbc.applicant_id
JOIN companywellbeingvalues wb ON wbc.name = wb.name
JOIN companies c ON c.id = wb.company_id
WHERE
    a.id = $1
GROUP BY
    c.id
ORDER BY
    distance;
`;