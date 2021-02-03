-- kueri buat table
CREATE TABLE users(
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	gender VARCHAR(7),
	date_of_birth TIMESTAMP
);
-- Kueri edit data type
ALTER TABLE users
ALTER COLUMN gender TYPE VARCHAR(1);
-- kueri edit column name
ALTER TABLE users
	RENAME COLUMN date_of_birth TO date_birth;
-- kueri add column
ALTER TABLE users
ADD COLUMN full_name VARCHAR(100);
-- kueri delete column
ALTER TABLE users DROP COLUMN full_name;
-- kueri edit, tambah, delete jadi satu
ALTER TABLE users
ALTER COLUMN gender TYPE varchar(1),
	RENAME COLUMN date_of_birth TO date_birth,
	ADD COLUMN full_name VARCHAR(100),
	DROP COLUMN full_name;
-- delete table
DROP TABLE users;
-- kueri table dengan constraint
CREATE TABLE users(
	id BIGSERIAL PRIMARY KEY,
	--BIGSERIAL merupakan tipe data auo increment
	first_name VARCHAR(50) NOT NULL UNIQUE,
	last_name VARCHAR(50) NOT NULL,
	gender VARCHAR(7) NOT NULL,
	date_of_birth TIMESTAMP
);
-- edit constraint
ALTER TABLE users
ALTER COLUMN gender DROP NOT NULL;
-- input data to table
INSERT INTO users (first_name, last_name, gender, date_of_birth)
VALUES (
		'Amar',
		'SETIYONO',
		'Male',
		'1999-10-25 15:02:35'
	);
-- see the data
SELECT *
FROM users;
-- see data in 1 column or more
SELECT first_name,
	gender
FROM users;
-- input data to table with the short way
INSERT INTO users
VALUES (13, 'Uhu', 'YONO'),
	(14, 'Aha', 'YONO'),
	(15, 'Asik', 'YONO');
-- edit data
UPDATE users
SET last_name = 'marga'
WHERE id = 1;
-- delete data
DELETE FROM users
WHERE id = 12;
-- create table with relation users
CREATE TABLE pets(
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	user_id BIGSERIAL,
	FOREIGN KEY(user_id) REFERENCES users(id)
);
-- insert data with relation
INSERT INTO pets(name, user_id)
VALUES('ming', 3)
SELECT *
FROM pets
	JOIN users ON users.id = pets.user_id;
SELECT pets.name AS nama_hewan,
	users.first_name AS nama_pemilik
FROM pets
	JOIN users ON users.id = pets.user_id;