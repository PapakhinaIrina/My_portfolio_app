const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { register, login, update, deleteUser, getUsers, getUser } = require('../controller/ControllerAuth');
const { adminAuth } = require('../controller/ControllerAuth');

router
  .route('/register', [
    check('username', 'Uncorrect username').notEmpty().isLength({ min: 1, max: 12 }),
    check('userLastName', 'Uncorrect username').notEmpty().isLength({ min: 1, max: 20 }),
    check('email', 'Uncorrect email').isEmail(),
    check('password', 'Password must be longer than 3 and shorter than 12').isLength({ min: 3, max: 12 }),
  ])
  .post(register);
router.route('/users').get(getUsers);
router.route('/users/:id').get(getUser);
router.route('/login').post(login);
router.route('/update').put(update);
router.route('/update').put(adminAuth, update);
router.route('/delete').delete(deleteUser);
router.route('/delete').delete(adminAuth, deleteUser);

module.exports = router;
