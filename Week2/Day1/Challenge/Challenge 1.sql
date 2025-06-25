create table actors(id SERIAL primary key , nom VARCHAR(30),prenom VARCHAR (30))
insert into actors (nom , prenom ) values ('meryem' ,'boubghy'),
                                           ('Aziza','cheraqqi'),
										   ('Benichou','Marc')
select count(*) as "le nombre des acteurs " from actors
insert into actors (nom , prenom ) values ('','')
-- Query returned successfully . parceque les champs nom et prenom ne sont pas NULL ,
-- Puisqu’il n’y a pas de contrainte pour interdire les valeurs vides ou NULL, l’insertion réussira

