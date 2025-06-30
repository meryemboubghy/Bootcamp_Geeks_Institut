-- Part 1 :
-- 1 :
create table customer (id SERIAL primary key ,first_name varchar(200),
                       last_name varchar(200) not null)
create table Customer_profile (id SERIAL primary key ,isLoggedIn BOOLEAN DEFAULT FALSE,
                               customer_id INT NOT NULL UNIQUE , 
							   FOREIGN KEY (customer_id) REFERENCES customer(id))

-- 2 :
insert into customer (first_name,last_name) values ('John','Doe'),
                      ('Jerome','Lalu'),
					  ('Lea','Rive')
-- 3 :
insert into customer_profile (isLoggedIn, customer_id)
values (
    TRUE,
    (select id from customer where first_name = 'John' AND last_name = 'Doe')
);
insert into customer_profile (customer_id)
values (
    (select id from customer WHERE first_name = 'Jerome' AND last_name = 'Lalu')
);
-- 4 :
select c.first_name
from customer c
inner join customer_profile cp ON c.id = cp.customer_id
where cp.isLoggedIn = true;

select  c.first_name,
      cp.isLoggedIn
from customer c
left join customer_profile cp ON c.id = cp.customer_id;

select count(*) AS not_logged_in_count
from customer c
left join customer_profile cp ON c.id = cp.customer_id
where cp.isLoggedIn IS distinct from true;

-- Part 2 :
create table Book (
    book_id SERIAL primary key,
    title VARCHAR(255) not null,
    author VARCHAR(255) not null
);
-- 2 : 
insert into Book (title, author)
values
  ('Alice In Wonderland', 'Lewis Carroll'),
  ('Harry Potter', 'J.K Rowling'),
  ('To kill a mockingbird', 'Harper Lee');

-- 3 :
create table Student (
    student_id SERIAL primary key,
    name VARCHAR(100) not null unique,
    age INT check (age <= 15)
);

-- 4 :

insert into Student (name, age)
values 
  ('John', 12),
  ('Lera', 11),
  ('Patrick', 10),
  ('Bob', 14);

-- 5 :
CREATE TABLE Library (
    book_fk_id INT,
    student_fk_id INT,
    borrowed_date DATE DEFAULT CURRENT_DATE,
    PRIMARY KEY (book_fk_id, student_fk_id),
    FOREIGN KEY (book_fk_id) REFERENCES Book(book_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    FOREIGN KEY (student_fk_id) REFERENCES Student(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
-- 6 :
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'John'),
    '2022-02-15'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-03-03'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
    (SELECT student_id FROM Student WHERE name = 'Lera'),
    '2021-05-23'
);

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date)
VALUES (
    (SELECT book_id FROM Book WHERE title = 'Harry Potter'),
    (SELECT student_id FROM Student WHERE name = 'Bob'),
    '2021-08-12'
);

-- 7 :

select * from Library;

SELECT 
    s.name AS student_name,
    b.title AS book_title,
    l.borrowed_date
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

SELECT 
    ROUND(AVG(s.age), 2) AS average_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

DELETE FROM Student
WHERE name = 'Bob';

select * from student 
