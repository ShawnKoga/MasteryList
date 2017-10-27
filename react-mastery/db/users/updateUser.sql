UPDATE users
SET username = $1, email = $2, img = $3
WHERE user_id = $4
RETURNING *;