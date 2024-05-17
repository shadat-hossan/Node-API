const router = require("express").Router();

const {createProduct, getProduct, getSingalProduct, updateProduct, deleteProduct} = require("../controllars/product.controllars.js")

// Create a Product
router.post("/", createProduct);
// Get all Product
router.get("/", getProduct);
// Get a Singal Product
router.get("/:id", getSingalProduct);
// Update a Product
router.put("/:id", updateProduct);
// Delete a Product
router.delete("/:id", deleteProduct);



module.exports = router;