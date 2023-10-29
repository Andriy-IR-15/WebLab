const express = require("express");
const router = express.Router();
const database = require("./database");

router.put("/edit/:id", async (req, res) => {
  // Отримайте дані з edit-modal
  const id = req.params.id;
  const brand = req.body.brand;
  const name = req.body.name;
  const price = req.body.price;
  const volume = req.body.volume;
  const strength = req.body.strength;
  const country = req.body.country;
  const image = req.body.image;

  // Створіть новий об'єкт Alcohol
  const updatedAlcohol = new Alcohol(brand, name, price, volume, strength, country, image);

  // Оновіть об'єкт Alcohol у базі даних
  const connection = database.connection;
  const query = `UPDATE products
  SET brand = '${brand}', name = '${name}', price = ${price}, volume = ${volume}, strength = ${strength}, country = '${country}', image = '${image}'
  WHERE id = ${id}`;

  await connection.query(query);

  // Поверніть результат
  res.send({
    message: "Товар успішно оновлено"
  });
});

module.exports = router;
