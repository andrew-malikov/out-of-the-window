-- SQL sample
CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, email) VALUES
  (1, 'a@example.com'),
  (2, 'b@example.com');

SELECT id, email
FROM users
WHERE email LIKE '%@example.com'
ORDER BY created_at DESC;
