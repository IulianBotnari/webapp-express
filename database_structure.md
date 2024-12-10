## Films database

## movies table

- id | int, ai, unique
- title | varchar(50), not null
- director | varchar(50), not null
- genre | varchar(50), not null
- release_year | YEAR, not null
- abstract | TEXT(500), not null
- image | varchar(250), null
- created_at | DATE, not null
- updated_at | DATE, not null

## reviews table


- id | int, ai, unique
- movie_id | int, ai, unique FK
- name | varchar(50), not null
- vote | TINYINT, not null
- text | TEXT(500), not null
- created_at | DATE, not null
- updated_at | DATE, not null

