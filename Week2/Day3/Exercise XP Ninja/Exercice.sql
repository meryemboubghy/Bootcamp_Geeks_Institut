select * from film
select * from rental
select * from inventory
-- 1 :
SELECT DISTINCT f.title
FROM film f
JOIN inventory i ON i.film_id = f.film_id
LEFT JOIN rental r ON r.inventory_id = i.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL;

  -- 2 :

CREATE TABLE children_waiting_list (
    wait_id SERIAL PRIMARY KEY,
    child_name VARCHAR(100) NOT NULL,
    inventory_id INT NOT NULL,
    request_date TIMESTAMP DEFAULT NOW(),
    FOREIGN KEY (inventory_id) REFERENCES inventory(inventory_id)
);

INSERT INTO children_waiting_list (child_name, inventory_id)
VALUES
  ('meryem', 120),
  ('Sara', 120),
  ('aziza', 121),
  ('Rania', 122),
  ('Meryem', 122)

SELECT 
    cw.inventory_id,
    f.title,
    COUNT(*) AS number_of_children_waiting
FROM children_waiting_list cw
JOIN inventory i ON cw.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Children'
GROUP BY cw.inventory_id, f.title
ORDER BY number_of_children_waiting DESC;