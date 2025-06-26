select * from film
-- 1 :
select rating, count (*) as Nombre_de_films from film GROUP by rating
-- 2 :
select * from film where rating IN ('G','PG-13') and length <120 and
      rental_rate < 3.00 order by title ASC
-- 3 :
select * from customer where customer_id= 16
update customer set first_name ='Meryama' , last_name='Boubghy'
, email='meryemboubghy@gmail.com' where customer_id=16
-- 4:
select * from address where address_id=20
update  address set address ='09 KOM sale' where address_id=20