const express = require("express");
const morgan = require("morgan");
const app = express();

/* Routes */
const productsRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/order");

app.use(morgan("dev"));

/* Routes for handling of request */
app.use("/products", productsRoutes);
app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
