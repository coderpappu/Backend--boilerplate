const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: {
    type: String,
    require: [true, "Please Add Your Product Name"],
  },
  prodType: {
    type: String,
    require: [true, "Please Add Your Product Type"],
  },
  prodColor: {
    type: String,
    require: [true, "Please Add Your Product Color"],
  },
  prodWeight: {
    type: String,
    require: [true, "Please Add Your Product Price"],
  },
  prodPrice: {
    type: Number,
    require: [true, "Please Add Your Product Price"],
  },
  prodDiscPrice: {
    type: Number,
    require: [true, "Please Add Your Discount Product Price"],
  },
});

// if the model does not exist or there's a typo in the model name . mongoose.model('User', UserSchema) is an attempt to define a new Mongoose model named "User" based on the "UserSchema" that you defined earlier. This line creates a Mongoose model with the name "User" and associates it with the "UserSchema."

module.exports =
  mongoose.model.Products || mongoose.model("Product", ProductSchema);
