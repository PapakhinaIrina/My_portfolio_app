const User = require("./models/User")
const Role = require("./models/Role")
const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const { sectet } = require("./config")

const generateAccessToken = ({id, roles}) => {
  const payload = {
    id,
    roles
  }
  return jwt.sign(payload, sectet, {expiresIn: "24h"})
}

class Controller {
  
  async registration(req, res) {
    try {
      const errors = validationResult(req)
      if(!errors.isEmpty()) {
        return res.status(400).json({message: 'Something wrong', errors})
      }
      
      const { username, password } = req.body
      const canditate = await User.findOne({username})
        if( canditate ) {
          return res.status(400).json({message: 'User already exists'})
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value: 'USER'});
        const user = new User ({username, password: hashPassword, roles: [userRole.value] });
        await user.save();
        return res.json({message: 'User was created'})
    }
      catch (error) {
        res.status(400).json({message: 'Something wrong', error})
    }
  }

  async login(req, res) {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
      return res.status(400).json({message: 'Something wrong', errors}) 
    }
    try {
      const { username, password } = req.body
      const user = await User.findOne({username})
      if(!user) {
        return res.status(400).json({message: `User ${username} not found`})
      }
      const validPassword = bcrypt.compareSync(password, user.password)
      if(!validPassword) {
        return res.status(400).json({message: 'Invalid password'})    
      }
      const token = generateAccessToken(user._id, user.roles)
      return res.json({token})
      }catch (error) {
      res.status(400).json({message: 'Something wrong', errors})
    }
  }

  async getUsers(req, res) {
    try {
      const getUsers = await User.find()
      res.json(getUsers)
    } catch (error) {
      res.status(400).json({message: 'Something wrong'})
    }
  }
};

module.exports = new Controller()