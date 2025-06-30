-- 1 :
select * from language
-- 2 :
select f.title,f.description,l.name from film f inner join  language l  on f.film_id = l.language_id
-- 3 :
select f.title,f.description,l.name from film f left join language l on f.film_id = l.language_id

-- 4 :
create table new_film (id SERIAL primary key ,name varchar(100))
insert into new_film(name)values('prison break') ,
                                 ('see')
								 select * from new_film
-- 5 :
select * from new_film
create table customer_review (review_id SERIAL primary key not null ,
                              film_id int ,
							  language_id int ,
							  titre varchar(100),
							  score int check (score between 1 and 10),
							  review_text varchar(255),
							  last_update date ,
							  foreign key(film_id)references new_film (id)on delete cascade,
							  foreign key (language_id) references language (language_id) on delete cascade)

-- 6 :
insert into customer_review(film_id,language_id,
titre , score,review_text ,last_update) values (2,1,'see',9,'Très bon film','15-04-2025'),
                                               (1,2,'prison break',10,'Très bon film' ,'20-06-2019')
-- 7 :
delete from new_film where id =1
select * from customer_review
-- Grâce à ON DELETE CASCADE, toutes les lignes de customer_review liées à ce film seront supprimées automatiquement.

