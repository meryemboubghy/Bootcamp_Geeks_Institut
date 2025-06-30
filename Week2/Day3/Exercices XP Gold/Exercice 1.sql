-- 1 :
select * from rental
select * from film
select * from customer
select distinct f.* from film f  
join inventory i on f.film_id=i.film_id 
join rental r on r.inventory_id=i.inventory_id
where r.return_date is null

-- 2 :
select * from customer
select  c.customer_id, c.first_name, c.last_name from customer c inner join  rental r on c.customer_id=r.customer_id
where r.return_date is null group by  c.customer_id, c.first_name, c.last_name

-- 3 :
select f.* from film f inner join film_actor fa on fa.film_id=f.film_id inner join actor a on a.actor_id=fa.actor_id 
inner join film_category fc on fc.film_id=f.film_id inner join category c on c.category_id=fc.category_id where a.first_name='Joe' and a.last_name='Swank'