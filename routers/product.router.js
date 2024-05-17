const router = require("express").Router();

const {createProduct, getProduct, getSingalProduct, updateProduct, deleteProduct} = require("../controllars/product.controllars.js")


router.post("/", createProduct);
router.get("/", getProduct);
router.get("/:id", getSingalProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);



module.exports = router;