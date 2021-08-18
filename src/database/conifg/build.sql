BEGIN;

DROP TABLE IF EXISTS users cascade;
DROP TABLE IF EXISTS books cascade;
DROP TABLE IF EXISTS booking cascade;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  location TEXT NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY NOT NULL,
  book_name VARCHAR(100) NOT NULL,
  book_image VARCHAR(10000) NOT NULL,
  author TEXT NOT NULL,
  state TEXT NOT NULL
);

CREATE TABLE booking (
  id SERIAL PRIMARY KEY NOT NULL,
  book_id integer not null references books(id),
  user_id integer not null references users(id)
);  


INSERT INTO users (name, location) VALUES
  ('Ali', 'Gaza'),
  ('Mo', 'Canada'),
  ('John', 'USA');

COMMIT;