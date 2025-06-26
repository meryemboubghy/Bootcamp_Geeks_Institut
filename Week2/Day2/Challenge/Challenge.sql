-- Creation de la table , il contien deux colonnes id et name
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

-- Insertion de donnees dans la table on insere 4 lignes
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

-- Affichier le table 
-- id  name
-- 5   Pawan
-- 6   Shatlee
-- 7  Krish
-- null Avataar
SELECT * FROM FirstTab

-- Creation de la table , il contien une seule colonne id 
CREATE TABLE SecondTab (
    id integer 
)

-- Insertion de donnees dans la table 
INSERT INTO SecondTab VALUES
(5),
(NULL)

SELECT * FROM SecondTab

-- Q1 : 0
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
-- Q2 : 2
 SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- Q3 : 0
  SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
-- Q4 : 2
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )