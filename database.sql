-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data


CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	name VARCHAR(80) NOT NULL,
    quantity DECIMAL NOT NULL,
	unit VARCHAR(20) NULL,
	completed BOOLEAN DEFAULT FALSE
);

INSERT INTO groceries (name, quantity, unit)
VALUES ('banana', '3', 'lb'), 
('tomatoes', '1', 'kilo'), 
('onions', '1', 'lb');
