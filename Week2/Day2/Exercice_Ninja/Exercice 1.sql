select * from customers
select * from Achats
-- 1 :
select first_name , last_name from customers order by last_name ASC , first_name ASC
limit 2 OFFSET (SELECT COUNT(*) - 2 FROM customers)
-- 2 :
delete from Achats a using customers c where a.customer_id =c.id
and c.first_name='Scott'
-- 3 :
SELECT * FROM customers
WHERE first_name = 'Scott'
-- 4 :
SELECT 
  CASE WHEN c.first_name = 'Scott' THEN '' ELSE c.first_name END AS first_name,
  CASE WHEN c.last_name = 'Scott' THEN '' ELSE c.last_name END AS last_name,
  a.*
FROM Achats a
JOIN customers c ON a.customer_id = c.id;

-- 5 :
select c.first_name , c.last_name ,a.*
from Achats a 
join customers c on a.customer_id=c.id
where c.first_name!= 'Scott'