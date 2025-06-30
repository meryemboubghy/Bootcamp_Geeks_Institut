-- 1 :
update film set language_id =2 where film_id= 2
update film set language_id =4 where film_id= 3
update film set language_id =6 where film_id= 4
select * from film
select * from language
-- 2 :
select * from customer
-- store_id ,address_id
--foreign key (store_id)references store(store_id)
--foreign key (address_id)references address(address_id)
-- 3 :
drop table customer_review
--Oui car il y a aucune autre table ne référence customer_review par une clé étrangère, la suppression est simple et directe.
-- 4 :
select * from rental
select count (*) as "Nombre de rental is " from rental where return_date is null 
-- 5 :
select * from film 
select * from rental
select f.rental_rate from film f
join inventory i on f.film_id = i.film_id
join rental r on i.inventory_id = r.inventory_id
where r.return_date is null
order by f.rental_rate desc
limit 30;
-- 6 :
-- 6.1 :
select * from payment
select * from film
select * from rental
select * from inventory
select * from customer

select f.* from film f join film_actor a on a.film_id=f.film_id join actor ac on a.actor_id=ac.actor_id 
where ac.first_name='Penelope' and ac.last_name='Monroe' and f.description like '%The film is about a sumo wrestler%'
-- 6.2 :
select * from film where length<60 and rating='R'
-- 6.3 :
select f.* from film f 
join inventory i on i.film_id=f.film_id
join rental r on r.inventory_id=i.inventory_id 
join customer c on c.customer_id=r.customer_id
join payment p on p.rental_id=r.rental_id
where c.last_name='Matthew' 
and c.first_name='Mahan'
and p.amount>4 
and r.return_date between '2005/07/28'and '2005/08/01' 

--6-4
select f.* from film f 
join inventory i on i.film_id=f.film_id
join rental r on r.inventory_id=i.inventory_id 
join customer c on c.customer_id=r.customer_id
where c.last_name='Matthew' 
and c.first_name='Mahan'
and (f.description like '%bateau%' or f.title like '%bateau%')
order by f.replacement_cost desc
limit 1

