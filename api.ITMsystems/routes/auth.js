const express = require('express'); //this is validation, when you send to the server it need to validate data.
const { body } = require('express-validator'); 
const router = express.Router();
const User = require('../models/user');
const authController = require('../controllers/auth');

router.post(
    '/signup',
    [ 
        body('name').trim().not().isEmpty(),
        body('email').isEmail().withMessage('Please enter a valid email.')
        .custom(async (email) => 
            {
            const user = await User.find(email);
            if(user[0].length > 0)
                {
                    return Promise.reject('Email adress already exist.');
                }
            })
        .normalizeEmail(),
        body('password').trim().isLength({min: 7}),

    ], authController.signup
);

router.post( '/login', authController.login);

module.exports = router;