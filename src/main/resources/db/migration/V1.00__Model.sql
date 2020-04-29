CREATE SCHEMA diet;

CREATE TABLE diet.product (
    id            BIGSERIAL PRIMARY KEY,
    name          VARCHAR(255) NOT NULL UNIQUE,
    calories      INT   DEFAULT 0,
    proteins      FLOAT4 DEFAULT 0,
    fat           FLOAT4 DEFAULT 0,
    carbohydrate  FLOAT4 DEFAULT 0,
    dietary_fiber FLOAT4 DEFAULT 0,
    salt          FLOAT4 DEFAULT 0,
    carbon        FLOAT4 DEFAULT 0
);

CREATE TABLE diet.portion (
    id     BIGSERIAL PRIMARY KEY,
    name   VARCHAR(255) NOT NULL UNIQUE,
    weight FLOAT4
);

CREATE TABLE diet.meal (
    id   BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE diet.consumption (
    id         BIGSERIAL PRIMARY KEY,
    date       DATE NOT NULL,
    product_id BIGINT REFERENCES diet.product,
    portion_id BIGINT REFERENCES diet.portion,
    meal_id    BIGINT REFERENCES diet.meal,
    amount     FLOAT4 DEFAULT 1
);
