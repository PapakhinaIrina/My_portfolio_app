const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports = function (req, res, next) {
  if( req.method === 'OPTIONS' ) {
    res.sendStatus(200)
    next()
  }
  try {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader?.split(' ')[1]
    if(!token) {
      return res.sendStatus(401).json({message: 'User is not authorized'})
    }
    const decodeData = jwt.verify(token, secret)
    req.user = decodeData
    next()
  } catch (error) {
    console.log(error)
    return res.sendStatus(403).json({message: 'User is not authorized'})  
  }
};
