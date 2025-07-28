CREATE DATABASE db;

\c db
CREATE TABLE blog (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    summary TEXT NOT NULL,
    text TEXT NOT NULL,
);
