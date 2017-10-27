UPDATE products
SET productName = $1, productDescription = $2, imgs = $3
WHERE product_id = $4
RETURNING *;