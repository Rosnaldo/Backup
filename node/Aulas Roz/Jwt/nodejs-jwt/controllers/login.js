const jwt = require('jsonwebtoken');

const User = require('../models/user');

const { JWT_SECRET } = require('../config');

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.status(401).json(false);

  const user = await User.findOne({ username });

  if (!user || user.password !== password) res.status(401).json(false);

  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256'
  };

  const { password: _, ...userWithoutPassword } = user.toObject();

  const token = jwt.sign({ data: userWithoutPassword }, JWT_SECRET, jwtConfig);

  res.status(200).json({ token });
};
