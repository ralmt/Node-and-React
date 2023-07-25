const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./models/productModel');
const router = require('./routes/productRouter')(products);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", router);
const port = process.env.PORT || 5000;
const url = "mongodb+srv://berto:longpass@freecluster.bw7dzz1.mongodb.net/";
const db = mongoose.connect(url)


app.get("/", (req, res) => {
  res.send('Welcome to my Nodemon API');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})

app.post("/api/products", (req, res) => {
  console.log(req.body);
  const newProduct = new products(req.body[0]);
  console.log(newProduct);
  //newProduct.save();
  newProduct.save().then(newProduct => {
    console.log('Product has been saved to MongoDB!');
  }).catch(err => {
    console.log(err);
  });
  return res.status(201).send(newProduct);
}); 

