const authMiddleware = (req, res, next) => {
  if (req.headers.authorization) return next();

  return res.status(401).json({ message: 'Falta o token de autorização' });
};

module.exports = authMiddleware;
