INSERT INTO products
(productName, productDescription, imgs, price)
VALUES
($1, $2, $3, $4)
RETURNING *;