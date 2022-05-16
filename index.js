const express = require("express");
const { Product } = require("./models");

// A global variable that doesn't change at all
// Learn more: https://www.youtube.com/shorts/qADaSdE3sqE
const PORT = 8080;

const app = express();

app.use(express.json());

// GET all product
app.get("/products", (req, res) => {
  Product.findAll().then((products) => {
    res.status(200).json(products);
  });
});

// GET product by ID
app.get("/products/:id", (req, res) => {
  Product.findOne({
    where: { id: req.params.id },
  }).then((product) => {
    res.status(200).json(product);
  });
});

// POST Product
app.post("/products", (req, res) => {
  Product.create({
    nama_produk: req.body.nama_produk,
    harga: req.body.harga,
    kategori: req.body.kategori,
    detail_produk: req.body.detail_produk,
    nama_toko: req.body.nama_toko,
  })
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((err) => {
      res.status(422).json("Produk gagal dibuat");
    });
});

// PUT Product
app.put("/products/:id", (req, res) => {
  Product.update(
    {
    nama_produk: req.body.nama_produk,
    harga: req.body.harga,
    kategori: req.body.kategori,
    detail_produk: req.body.detail_produk,
    nama_toko: req.body.nama_toko,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(() => {
      res.status(200).json({ message: "Produk berhasil diupdate" });
    })
    .catch((err) => {
      res.status(422).json("Produk gagal diupdate");
    });
});

// Delete Product
app.delete("/products/:id", (req, res) => {
  Product.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      // 204 = "no content"
      // It means success but returns nothing
      // Because why do we need to return data if those data are deleted, right?
      res.sendStatus(204);
    })
    .catch((err) => {
      res.status(422).json("Produk gagal dihapus");
    });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});