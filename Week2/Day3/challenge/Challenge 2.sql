create table product_orders(orders_id serial primary key)
create table items(item_id serial primary key,prix float,orders_id int ,foreign key (orders_id) references product_orders(orders_id))