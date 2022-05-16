const { Product } = require("./models");

Product.create({
    nama_produk: "OVICX Q850 Fitness Gloves Gym",
    harga: "99000",
    kategori: "Glove & Hand Wrap",
    detail_produk: "Ukuran: L/M/S L: 15x10 cm M: 14x9 cm S: 13x8 cm",
    nama_toko: "Ovicx official store",
  })
  .then((product) => {
    console.log(product);
  });