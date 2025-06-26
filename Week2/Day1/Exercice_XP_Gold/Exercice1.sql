-- Methode 1 :
select last_name , first_name , birth_date  from students 
                   where id IN(1,2,3,4) ORDER BY last_name DESC
-- Methode 2 : 
select last_name , first_name , birth_date from students order by last_name ASC limit 4

SELECT * FROM students WHERE birth_date = 
                   (SELECT MIN(birth_date) 
                    FROM students
                      );
 -- Methode 1 :
select * from students where id IN(3,4,5)
-- Methode 2 :
select * from students order by id OFFSET 2 limit 3

