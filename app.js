const express = require("express");
const productsRoutes = require("./api/routes/products");
const orderRoutes = require('./api/routes/order')

const app = express();

app.use("/products", productsRoutes);
app.use("/order", orderRoutes);

module.exports = app;
