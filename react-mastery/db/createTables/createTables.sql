-- Certain datatypes react and handle inputs differently. SERIAL PRIMARY KEY will auto increment and is a unique identifier (I usually put this in every table).
-- VARCHAR uses less memory than a TEXT input so I usually use VARCHAR where I can. MONEY handles money and it is nice because it is pretty intuitive (know when and when not to add $ or .00)

CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
username VARCHAR(180),
email VARCHAR(180),
img VARCHAR(200)
);

CREATE TABLE products (
product_id SERIAL PRIMARY KEY,
productName VARCHAR(180),
productDescription VARCHAR(500),
imgs TEXT,
price MONEY
);
