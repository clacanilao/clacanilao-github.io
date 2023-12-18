/**
 ** Name: Clarence Lacanilao
 ** Date: November 16, 2022
 **/

--1
SELECT (first_name || ' ' || last_name || ' ' || 'can be contacted at' || ' ' || phone_number) AS "employee can be contacted at phone_number"
FROM employees
WHERE POSITION ('515' IN phone_number) = 1;

--2
SELECT ABS(AVG(max_salary) - AVG(min_salary)) AS "difference between average max salary & average min salary" FROM Jobs;

--3
SELECT postal_code, REPLACE(city,' ', '_') AS "city" 
FROM locations
WHERE LENGTH(postal_code) = 5;

--4
SELECT 
	(SUBSTR(r.region_name, LENGTH(r.region_name) -2) || SUBSTR(c.country_name, LENGTH(c.country_name) -2)) AS "new format"
FROM regions r
JOIN countries c ON r.region_id = c.region_id
ORDER BY c.country_name ASC;

--5
SELECT j.job_id,
	COUNT(*) AS "# of employees"
FROM jobs j
JOIN employees e ON j.job_id = e.job_id
GROUP BY j.job_id
HAVING COUNT(*) = 1
ORDER BY job_id ASC; 

--6 
SELECT j.job_id,
	COUNT(*) AS "# of Employees", 
	CAST(ROUND((AVG(e.salary)), 0) AS text) AS "Average Pay",
	MAX(e.hire_date) AS "Last Hired"
FROM jobs j
JOIN employees e ON j.job_id = e.job_id
GROUP BY j.job_id
ORDER BY "# of Employees" DESC,
"Average Pay" DESC;

--7
SELECT 
	COUNT(*) AS "employee count",
	d.department_id, d.department_name
FROM employees e
JOIN departments d 
ON d.department_id = e.department_id
JOIN jobs j
ON j.job_id = e.job_id
WHERE j.job_id IN ('IT_PROG', 'SA_REP')
GROUP BY d.department_id, d.department_name
HAVING COUNT(*) < 3;