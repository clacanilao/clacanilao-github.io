/**
 ** Name: Clarence Lacanilao
 ** Date: November 16, 2022
 **/

CREATE VIEW Department_Locations
AS
	SELECT l.city 
	FROM locations l
	WHERE l.location_id IN 
			(SELECT d.location_id
			FROM departments d);
			
SELECT * FROM Department_Locations;

CREATE VIEW Management_Employee_Counts
("First Name", "Last Name", "Employee Count")
AS
	SELECT m.first_name, m.last_name,
			(SELECT COUNT(*)
			FROM employees e  
			WHERE m.employee_id = e.manager_id)
	FROM employees m
	ORDER BY COUNT DESC;

SELECT * FROM Management_Employee_Counts;


