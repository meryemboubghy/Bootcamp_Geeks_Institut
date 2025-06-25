SELECT version();
create table items(id SERIAL primary key ,
                   name VARCHAR(50),
				   price int)
insert into items( name , price)
            VALUES('Small Desk' , 100),
	               ('Large Desk',300),
				   ('Fan',80)
create table customers(id SERIAL primary key ,first_name VARCHAR(50),last_name VARCHAR(50))
insert into customers (first_name , last_name)
            values('Greg' ,'Jones'),
			       ('Meryem','Jones'),
				   ('Scott','Scott'),
				   ('Trevor','Green')
				   
-- Pour recuperer les donnees de la base donnees :
  select * from items 
  select * from items where price>80
  select * from items where price < 300
  select * from customers where last_name ='Smith'
  select * from customers where last_name ='Jones'
  select * from customers where first_name != 'Scott'
  