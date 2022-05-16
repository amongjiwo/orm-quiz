const { Product } = require("./models");

Product.update(
  {
    harga: "120000",
  },
  {
    where: {
      id: 1,
    },
  }
)
  .then(() => {
    console.log("Produk berhasil diupdate");
    process.exit();
  })
  .catch((err) => {
    console.log("Produk gagal diupdate");
  });