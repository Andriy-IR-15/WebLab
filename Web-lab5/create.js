const express = require("express");
const router = express.Router();
const database = require("./database");

router.post("/create", async (req, res) => {
  // Отримайте дані з create-modal
  const brand = req.body.brand;
  const name = req.body.name;
  const price = req.body.price;
  const volume = req.body.volume;
  const strength = req.body.strength;
  const country = req.body.country;
  const image = req.body.image;

  // Створіть новий об'єкт Alcohol
  const newAlcohol = new Alcohol(brand, name, price, volume, strength, country, image);

  // Вставте новий об'єкт Alcohol у базу даних
  const connection = database.connection;
  const query = `INSERT INTO products (brand, name, price, volume, strength, country, image)
  VALUES ('${brand}', ${name}, ${price}, ${volume}, ${strength}, '${country}', '${image}')`;

  await connection.query(query);

  // Поверніть результат
  res.send({
    message: "Товар успішно додано"
  });
});

module.exports = router;
