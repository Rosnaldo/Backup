const jwt = require('jsonwebtoken');
const User = require('../../models/user');

const { JWT_SECRET } = require('../../config');

module.exports = async (req, res, next) => {

  const token = req.headers['authorization'];

  if (!token)
    return res.status(401).json({ message: 'missing auth token' })
  
  try {
    const payload = jwt.verify(token, JWT_SECRET);

    const user = await User.findOne({ username: payload.data.username });

    if (!user) {
      return res.status(401).json({ message: 'user not found' });
    }

    req.user = user.toObject();

    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}