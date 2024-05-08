const jwt = require('jsonwebtoken');
const { secret } = require('../config');

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      next();
    }
    try {
      const token = req.headers.authorization.split(' ')[1];
      if (!token) {
        return res.status(403).json({ message: 'User is not authorized' });
      }
      const { roles: userRoles } = jwt.verify(token, secret);
      let hasRole = false;
      for (const role of userRoles) {
        if (roles.include(role)) {
          hasRole = true;
        }
      }
      if (!hasRole) {
        return res.status(403).json({ message: "You don't have access" });
      }
      next();
    } catch (error) {
      return res.status(403).json({ message: 'User is not authorized' });
    }
  };
};
