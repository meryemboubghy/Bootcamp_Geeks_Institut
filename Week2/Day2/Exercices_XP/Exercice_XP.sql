-- 1 :
select * from customer
-- 2 :
select first_name || ' ' || last_name AS full_name from customer
-- 3 :
select create_date from customer
-- 4 :
select * from customer order by first_name DESC
-- 5 :
select * from film
select film_id, title ,description ,release_year ,rental_rate from film order by rental_rate ASC
-- 6 :
select * from address
select address , phone from address where district='Texas'
-- 7 :
select * from film where film_id=15 or film_id=150
-- 8 :
select film_id ,title, description, length, rental_rate from film where title='prison break'
-- 9 :
select film_id, title, description , length , rental_rate from film where title='pr%'
-- 10 :
select * from film order by rental_rate ASC limit 10
-- 11 :
select * from film order by rental_rate ASC OFFSET 10 ROWS FETCH NEXT 10 ROWS ONLY
-- 12 :
select * from customer
select * from payment
select c.first_name, c.last_name, p.amount ,p.payment_date from customer AS c inner join payment AS p on c.customer_id=p.customer_id order by c.customer_id
-- 13 :
select * from inventory
select * from film where film_id not in (select film_id from inventory)
-- 14 :
select * from country
select * from city
select city.city , country.country from city join country on city.country_id= country.country_id
-- 15 :
SELECT 
    c.customer_id,
    c.first_name,
    c.last_name,
    p.amount,
    p.payment_date,
    p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;