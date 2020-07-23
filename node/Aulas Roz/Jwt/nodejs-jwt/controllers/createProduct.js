module.exports = (req, res) => {
  if (!req.body.title || !req.body.price)
    return res.status(422).json({ message: 'Produto sem título e/ou preço' });

  const product = {
    ...req.body,
    user: req.user.username
  }
  
  res
    .status(200)
    .json({ message: 'Produto fake criado com sucesso', data: product });
};