const  { validationResult } = require('express-validator'); //getting a library
const bcrypt = require('bcryptjs'); //encryption stuff. hashing // getting this librery that does hashing 
const User = require('../models/user'); //save the details of the user

//this shares the signup rout 
exports.signup = async (req , res , next) => {
    //look at request and see if there are any errors
    const error = validationResult(req);
    if(!errors.isEmpty()) return;

    const name = req.body.name;
    const email =  req.body.email;
    const password = req.body.password;

    try{
        const hashedPassword = await bcrypt.hash(password, 12);
        const userDetails  = 
        {
            name: name,
            email: email,
            password: hashedPassword
        }

        const result = await User.save(userDetails);

        res.status(201).json({ message: 'User registered.'})

    } catch (err){
        if(!err.statusCode){
            err.statusCOde = 500;
        }
        next(err);
    }
}