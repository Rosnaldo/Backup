const express = require('express');
const rescue = require('express-rescue');

const { Product, User } = require('../models');

const products = express.Router();

products.post('/', rescue(async (req, res) => {
  const { name, description, price } = req.body;

  const product = await Product.create({ name, description, price });
  res.status(201).json(product);
}));

products.get('/', rescue(async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
}));

products.get('/:id', rescue(async (req, res) => {
  const product = await Product.findByPk(req.params.id);

  if (!product) return res.status(404).json({ message: 'Produto não encontrado' });

  res.status(200).json(product);
}));

products.put('/:id', rescue(async (req, res) => {
  const { name, description, price } = req.body;

  const updateResult = await Product.update(
    { name, description, price },
    { where: { id: req.params.id } }
  );

  const product = await Product.findByPk(req.params.id);

  res.status(200).json(product);
}));

products.delete('/:id', rescue(async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } });
  res.status(204).end();
}));

module.exports = products;
