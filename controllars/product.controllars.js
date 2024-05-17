// Create a Product
const Product = require("../models/product.model.js")


const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send({message: error.message})
    }
};

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const getSingalProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findById(id);
        if(products){
            res.status(200).json(products)
        }else{
            res.status(404).json({message: "Plese Enter valide product ID."})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const updateProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);
        if(products){
            const updatedProduct = await Product.findById(id);
            res.status(200).json(updatedProduct);
        }else{
            res.status(404).json({message: "Plese Enter valide product ID."})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const deleteProduct = async (req, res) => {
    try {
        const {id} = req.params;
        const products = await Product.findByIdAndDelete(id);
        if(products){
            res.status(200).json({message: "Producut delete succesfull"});
        }else{
            res.status(404).json({message: "Plese Enter valide product ID."})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    createProduct,
    getProduct,
    getSingalProduct,
    updateProduct,
    deleteProduct
}