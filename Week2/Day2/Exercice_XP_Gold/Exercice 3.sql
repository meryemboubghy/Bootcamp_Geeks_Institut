CREATE TABLE Achats ( id SERIAL PRIMARY KEY,
                      customer_id INT,
                       item_id INT  ,
                       quantity_purchased INT,
                        FOREIGN KEY (customer_id) REFERENCES customers(id),
                        FOREIGN KEY (item_id) REFERENCES items(id)
                         );

select * from items
select * from customers
INSERT INTO Achats(customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name = 'Scott' AND last_name = 'Scott'),
  (SELECT id FROM items WHERE name ILIKE '%ventilateur%'),
  1
);
INSERT INTO Achats (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name = 'Melanie' AND last_name = 'Johnson'),
  (SELECT id FROM items WHERE name ILIKE '%bureau%' AND name ILIKE '%grand%'),
  10
);
INSERT INTO Achats (customer_id, item_id, quantity_purchased)
VALUES (
  (SELECT id FROM customers WHERE first_name = 'Greg' AND last_name = 'Jones'),
  (SELECT id FROM items WHERE name ILIKE '%bureau%' AND name ILIKE '%petit%'),
  2
);
select * from customers
 -- partie 2>>>>>>
-- 1 :
select * from Achats
select * from items
select * from customers
-- 2 :
select a.id AS id ,c.first_name ,c.last_name AS Name_Items ,
       a.id , a.quantity_purchased FROM Achats a JOIN customers c ON a.customer_id = c.id;
-- 3 :
select * from Achats where customer_id=5
-- 4 :
select customer_id from Achats a
   join items i on a.item_id=i.id
   where i.name ILIKE '%Desk%'
   GROUP BY customer_id
HAVING 
  COUNT(CASE WHEN i.name ILIKE '%Large%' THEN 1 END) > 0
  AND
  COUNT(CASE WHEN i.name ILIKE '%Small%' THEN 1 END) > 0;

select c.last_name AS prenom , c.first_name as nome ,
       i.name as nom_article from Achats a 
	   join customers c on a.customer_id=c.id
	   join items i on a.item_id=i.id
 
