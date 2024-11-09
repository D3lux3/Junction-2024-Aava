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
JOIN companywellbeingvalues wb ON wbc.name = wb.name AND wb.company_id = c.id
JOIN companies c ON c.id = wb.company_id
WHERE
    a.id = $1
GROUP BY
    c.id
ORDER BY
    distance;
`;