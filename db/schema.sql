-- the code below is checking if a database exists if it does, drop it and create a new one
-- we are creating a new database called bookmarks_dev whether it exists or not
DROP DATABASE IF EXISTS bookmarks_dev;
CREATE DATABASE bookmarks_dev;

-- connect to the database call bookmarks_dev
\c bookmarks_dev;

CREATE TABLE bookmarks (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    url TEXT,
    category TEXT,
    is_favorite BOOLEAN
)