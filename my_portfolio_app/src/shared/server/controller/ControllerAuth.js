const User = require('../models/UserSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config');

class Controller {
  async register(req, res, next) {
    const { name, lastName, sex, email, password } = req.body;
    bcrypt.hash(password, 10).then(async (hash) => {
      await User.create({
        name,
        lastName,
        sex,
        email,
        password,
      })
        .then((user) =>
          res.status(200).json({
            message: 'User created successfully',
            user,
          }),
        )
        .catch((error) =>
          res.status(400).json({
            message: 'Something wrong',
            error: error.message,
          }),
        );
    });
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        bcrypt.compare(password, user.password).then(function (result) {
          result
            ? res.status(200).json({
                message: 'Login successful',
                user,
              })
            : res.status(400).json({ message: 'Login not succesful' });
        });
      } else {
        return res.status(400).json({ message: 'Login not successful', error: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ message: 'Something wrong', error: error.message });
    }
  }

  async update(req, res, next) {
    const { role, id } = req.body;
    if (role && id) {
      if (role === 'admin') {
        await User.findById(id);
      } else {
        res.status(400).json({
          message: 'Role is not admin',
        });
      }
    } else {
      res.status(400).json({
        message: 'Role or Id not present',
      });
    }

    if (role && id && role === 'admin') {
      await User.findById(id)
        .then((user) => {
          if (user.roles === 'admin') {
            res.status(400).json({ message: 'User is already admin' });
          } else {
            user.roles = role;
            user.save((err) => {
              if (err) {
                res.status('400').json({ message: 'An error occurred', error: err.message });
                process.exit(1);
              }
              res.status('201').json({ message: 'User updated successfully', user });
            });
          }
        })
        .catch((error) => {
          res.status(400).json({ message: 'User not found', error: error.message });
        });
    }
  }

  async deleteUser(req, res, next) {
    const { id } = req.body;
    await User.findById(id)
      .then((user) => user.remove())
      .then((user) => res.status(201).json({ message: 'User successfully deleted', user }))
      .catch((error) => res.status(400).json({ message: 'User not found', error: error.message }));
  }

  adminAuth(req, res, next) {
    const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, secret, (err, decodeToken) => {
        if (err) {
          return res.status(401).json({ message: 'Not authorized' });
        } else {
          if (decodeToken.role === 'admit') {
            next();
          } else {
            return res.status(401).json({ message: 'Not authorized' });
          }
        }
      });
    } else {
      return res.status(401).json({ message: 'Not authorized' });
    }
  }

  userAuth(req, res, next) {
    const token = req.cookies.jwt;

    if (token) {
      jwt.verify(token, secret, (err, decodeToken) => {
        if (err) {
          return res.status(401).json({ message: 'Not authorized' });
        } else {
          if (decodeToken.role === 'Basic') {
            next();
          } else {
            return res.status(401).json({ message: 'Not authorized' });
          }
        }
      });
    } else {
      return res.status(401).json({ message: 'Not authorized' });
    }
  }

  async getUsers(req, res, next) {
    await User.find({})
      .then((users) => {
        const userFunction = users.map((user) => {
          const container = {};
          container.name = user.name;
          container.role = user.roles;
          return container;
        });
        res.status(200).json({ user: userFunction });
      })
      .catch((error) => res.status(400).json({ message: 'Something wrong' }));
  }

  async getUser(req, res, next) {
    try {
      const getUser = await User.findById(req.params.id);
      res.json(getUser);
    } catch (error) {
      res.status(400).json({ message: 'Something wrong' });
    }
  }
}

module.exports = new Controller();
