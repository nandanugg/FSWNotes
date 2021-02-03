CREATE TABLE "payment_methods" (
  "id" int PRIMARY KEY,
  "name" varchar(12) NOT NULL
);

CREATE TABLE "cashiers" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL
);

CREATE TABLE "pos" (
  "id" int PRIMARY KEY,
  "name" varchar(8) NOT NULL
);

CREATE TABLE "transactions" (
  "id" int PRIMARY KEY,
  "cashier_id" int,
  "start_transaction" timestamp NOT NULL,
  "end_transaction" timestamp NOT NULL,
  "payment_methods_id" int,
  "pos" int
);

CREATE TABLE "transaction_items" (
  "id" int PRIMARY KEY,
  "item_id" int,
  "transactions_id" int,
  "quantity" int NOT NULL
);

CREATE TABLE "items" (
  "id" int,
  "name" varchar(120) NOT NULL,
  "price" int,
  PRIMARY KEY ("id", "price")
);

ALTER TABLE "transactions" ADD FOREIGN KEY ("cashier_id") REFERENCES "cashiers" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("payment_methods_id") REFERENCES "payment_methods" ("id");

ALTER TABLE "transactions" ADD FOREIGN KEY ("pos") REFERENCES "pos" ("id");

ALTER TABLE "transaction_items" ADD FOREIGN KEY ("item_id") REFERENCES "items" ("id");

ALTER TABLE "transaction_items" ADD FOREIGN KEY ("transactions_id") REFERENCES "transactions" ("id");

