select birth_date , first_name , last_name from  students where last_name ='Benichou'
select * from students
update students set birth_date ='02-11-1998' where last_name='Benichou'

-- 2 :
select * from students where first_name='David'
update students set last_name='Guez' where first_name='David'

-- Supprimer :
delete from students where first_name='Lea'
select * from students where last_name='Benichou' 
-- Compter :
select * from students
--  1:
select count (*) AS Nomber_Students from students
-- 2 :
select count(*) as Nomber_Stuents_apres_2000 from students where birth_date>'01/01/2000'

-- Insérer / Modifier :
-- 1 :Ajoutez Colonne :
ALTER table students ADD math_grade int
-- 2 :
update  students set math_grade = 80 where id=1
-- 3 :
update students set math_grade=90 where id IN(2,4)
-- 4 :
update students set math_grade=40 where id=6
-- 5 :
select count(*) As students_note_sup_a_83 from students where math_grade>83 
-- 6 :
insert into students (last_name,first_name,birth_date,math_grade)
   values ('Simpson','Omer','03-10-1980',70)
-- 7 :
select last_name , first_name , count(*) AS total_grade from students group by first_name,last_name
-- SOMME :
select last_name , first_name ,SUM(math_grade) as total_grade from students group by first_name,last_name

