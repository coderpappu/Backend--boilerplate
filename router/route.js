const ProductModel = require("../model/proudctModel");
let Router = require("express");

const router = Router();

// Get Method
router.get("/productView", async (req, res) => {
  const productData = await ProductModel.find({});
  res.status(200).json({ Products: productData });
});

router.post("/productAdd", async (req, res) => {
  const {
    productName,
    prodType,
    prodColor,
    prodWeight,
    prodPrice,
    prodDiscPrice,
  } = req.body;

  if (
    !productName ||
    !prodType ||
    !prodColor ||
    !prodWeight ||
    !prodPrice ||
    !prodDiscPrice
  ) {
    return res.status(422).json({ error: "Please Fill all required filed." });
  }

  const product = new ProductModel({
    productName,
    prodType,
    prodColor,
    prodWeight,
    prodPrice,
    prodDiscPrice,
  });

  await product.save();
  res.status(200).json({ message: "Registration Successful! " });
});

module.exports = router;
