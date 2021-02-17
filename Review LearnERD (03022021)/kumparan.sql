CREATE TABLE "publishers" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "image" varchar(255) NOT NULL
);

CREATE TABLE "news" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "publisher_id" int,
  "content" text NOT NULL,
  "image_video" varchar(255) NOT NULL,
  "publish_date" timestamp NOT NULL,
  "viewers" int NOT NULL,
  "category_id" int
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "kumparan_plus_id" int
);

CREATE TABLE "categories_news" (
  "id" int PRIMARY KEY,
  "news_id" int,
  "category_id" int
);

CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "image" varchar(255)
);

CREATE TABLE "comments" (
  "id" int PRIMARY KEY,
  "news_id" int,
  "content" text NOT NULL,
  "user_id" int,
  "comment_date" timestamp NOT NULL,
  "comment_like_id" int
);

CREATE TABLE "kumparan_plus" (
  "id" int PRIMARY KEY,
  "name" varchar(30) NOT NULL,
  "content_quantity" int NOT NULL
);

CREATE TABLE "user_likes" (
  "id" int PRIMARY KEY,
  "user_id" int,
  "news_id" int
);

ALTER TABLE "news" ADD FOREIGN KEY ("publisher_id") REFERENCES "publishers" ("id");

ALTER TABLE "news" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "categories" ADD FOREIGN KEY ("kumparan_plus_id") REFERENCES "kumparan_plus" ("id");

ALTER TABLE "categories_news" ADD FOREIGN KEY ("news_id") REFERENCES "news" ("id");

ALTER TABLE "categories_news" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("news_id") REFERENCES "news" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "comments" ADD FOREIGN KEY ("comment_like_id") REFERENCES "user_likes" ("id");

ALTER TABLE "user_likes" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_likes" ADD FOREIGN KEY ("news_id") REFERENCES "news" ("id");
