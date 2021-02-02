--query postgre terkait definition table--

--query membuat table
CREATE TABLE users (
	id INT,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	gender VARCHAR(6),
	date_of_birth TIMESTAMP
);


--query edit datatype column
ALTER TABLE users
ALTER COLUMN id TYPE VARCHAR(12);


--query hapus column
ALTER TABLE users
DROP COLUMN data_of_birth;


--kueri add column
ALTER TABLE users
ADD COLUMN full_name VARCHAR(100);

--kueri edit, delete dan add column jadi satu
ALTER TABLE users
ALTER COLUMN id TYPE VARCHAR(12),
DROP COLUMN data_of_birth,
ADD COLUMN full_name VARCHAR(100);

--hapus table
DROP TABLE users;


--create table with constraint
CREATE TABLE users (
	id BIGSERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL UNIQUE,
	last_name VARCHAR(50) NOT NULL,
	gender VARCHAR(6) NOT NULL,
	date_of_birth TIMESTAMP
);


--edit constraint
ALTER TABLE users
ALTER COLUMN gender DROP NOT NULL;

ALTER TABLE users
ALTER COLUMN gender SET NOT NULL;


--insert data into table
INSERT INTO users (first_name, last_name, gender, date_of_birth)
VALUES ('nanda', 'nugraha', 'male', '1999-01-31');

--get data
SELECT * FROM users;

--insert data without column name
INSERT INTO users
VALUES (123, 'budi', 'nugraha');

--edit data
UPDATE users
SET date_of_birth = '1999-01-31 23:30:21'
WHERE id = 1;

--delete data
DELETE FROM users
WHERE id = 123;

--implementasi relation : membuat foreign key di tabel pets
--yang mereferensi ke tabel users
CREATE TABLE pets (
	id BIGSERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	user_id BIGSERIAL,
	FOREIGN KEY (user_id) REFERENCES users(id);
	--untuk menghapus pets ketika user nya dihapus juga
	--FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE DELETE;
);

INSERT INTO pets (name, user_id)
VALUES ('ming', 1);

SELECT * FROM pets;

--menampilkan data tabel users dan pets
SELECT * FROM pets;
JOIN users ON users.id = pets.user_id;

--menampilkan kolom tertentu
SELECT pets.name, users.first_name FROM pets
JOIN users ON users.id = pets.user_id;

--membuat alias
SELECT pets.name AS hewan, users.first_name AS pemilik FROM pets
JOIN users ON users.id = pets.user_id;


