const express = require("express");
const Product = require("./ProductModel");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const Connection = require("./db");
const Cloudinary = require("./canfig");
app.use(cors());

app.use(express.json({ limit: "10mb" }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 9000;
app.get("/", (req, res) => {
  res.json({ message: true });
});

// Get Routes
app.get("/api/getProduct", async (req, res) => {
  try {
    const product = await Product.find({});
    res.json(product);
  } catch (error) {
    console.log("Error in GetProduct Route");
    res.json({ message: "fatch data " });
  }
});
// categoryproduct

app.get("/api/categoryproduct", async (req, res) => {
  try {
    const { category } = req.params;
    const product = await Product.find({ category });
    res.json(product);
  } catch (error) {
    console.log("Error in GetProduct Route");
    res.json({ message: "fatch data " });
  }
});

app.post("/api/create-product", async (req, res) => {
  try {
    const { productName, image, category } = req.body;
    console.log(productName, image, category);

    let cloudinaryImages = null;
    if (image) {
      cloudinaryImages = await Cloudinary.uploader.upload(image, {
        folder: "products",
      });
    }

    const product = await Product.create({
      productName,
      image : cloudinaryImages?.secure_url ||  "" ,
      category,
    });
    res.json({
      message: "SuccessFully acount create ",
      product,
      success: true,
    });
  } catch (error) {
    console.log("Error in Create Route ", error.message);
    res.json({ message: "", success: false });
  }
});

app.delete("/api/delete/:product", async (req, res) => {
  try {
    const { product } = req.params;
    console.log(product);
    const productID = await Product.findById(product);
    const productDelete = await Product.findByIdAndDelete(productID);
    res.json({
      productDelete,
      message: "SuccessFully product delete",
      success: true,
    });
  } catch (error) {
    console.log("Error in delete routes Route ", error.message);
    res.json({ message: "", success: false });
  }
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
  Connection();
});
