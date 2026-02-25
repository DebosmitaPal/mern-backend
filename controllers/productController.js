import productModel from "../models/productModel.js";
import jwt from "jsonwebtoken";
const addProduct = async (req, res) => {
  const body = req.body;
  const result = await productModel.create(body);
  res.json(result);
};
const showProducts = async (req, res) => {
  const result = await productModel.find();
  res.json(result);
};
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const result = await productModel.findByIdAndDelete(id);
  res.json(result);
};
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product=req.body;
  const result = await productModel.findByIdAndUpdate(id.product);
  res.json(result);
};
export { addProduct, showProducts, deleteProduct,updateProduct};