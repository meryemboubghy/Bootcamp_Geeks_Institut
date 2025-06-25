CREATE table students (id SERIAL primary key,
                       last_name VARCHAR(50),
					   first_name VARCHAR(50),
					   birth_date date)

insert into students (last_name, first_name , birth_date)
            values ('Benichou' ,'Marc','02/11/1998'),
                   ('Cohen' ,'Yoan','03/12/2010'),
                   ('Benichou' ,'Lea','27/07/1987'),
                   ('Dux' ,'Amelia','07/04/1996'),
                   ('Grez' ,'David','14/06/2003'),
                   ('Simpson' ,'Omer','03/10/1980')

select * from students
select last_name , first_name from students
select last_name , first_name from students where id=2
select * from students where last_name='Benichou' and first_name='Marc'
select * from students where last_name='Benichou' or first_name='Marc'
select * from students where first_name ILIKE '%a%'
select * from students where first_name ILIKE 'a%'
select * from students where first_name ILIKE '%a'
select * from students where first_name ILIKE '%a_'
select * from students where id IN (1,3)
select * from students where id= 1 or id = 3
select * from students where id IN (1,3)
select * from students where birth_date >='01/01/2000'


