// const Router = require('express')
// const router = new Router()
// const controller = require('./Controller')
// const { check } = require('express-validator')
// const authMiddleware = require('./middleware/authMiddleware')
// // const roleMiddleware = require('./middleware/roleMiddleware')

// router.post('/registration', [
//     check('username', 'Uncorrect username').notEmpty().isLength({min: 1, max: 12}),
//     check('userLastName', 'Uncorrect username').notEmpty().isLength({min: 1, max: 20}),
//     check('email', 'Uncorrect email').isEmail(),
//     check('password', 'Password must be longer than 3 and shorter than 12').isLength({min: 3, max: 12})
//   ], 
//       controller.registration)
// router.post('/login', controller.login)
// router.get('/users', authMiddleware(['USER']), controller.getUsers)
// router.get('/users/:id', authMiddleware(['USER']), controller.getOneUser)
// router.put('/users/:id', authMiddleware(['USER']), controller.updateUser)
// router.delete('/users/:id', authMiddleware(['USER']), controller.deleteUser)


// module.exports = router
