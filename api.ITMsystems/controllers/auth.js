const  { validationResult } = require('express-validator'); //getting a library
const bcrypt = require('bcryptjs'); //encryption stuff. hashing // getting this librery that does hashing 
const jwt = require('jsonwebtoken'); //jason web token packadge import
const User = require('../models/user'); //save the details of the user

//this shares the signup rout 
exports.signup = async (req , res , next) => {
    //look at request and see if there are any errors
    const error = validationResult(req);
    if(!error.isEmpty()) return;

    //remamber to make id field not nullable, unique and set it to auto increment
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

        res.status(201).json({ message: 'User registered.'}); 

    } catch (error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

//this is for login rout
exports.login = async (req , res , next) => {
const email = req.body.email; //extract email
const password = req.body.password; //extract password

//it is an async function, so good to have a try catch

try{
    const user = await User.find(email); //pass email to user 
    //check if user exists
    if(user[0].length !== 1){
        const error = new Error ('A user with this email is not found');
        error.statusCode = 401;
        throw error;
    }

    const storedUser = user[0][0]; //number to 0 is for the details.
    const isEqual = await bcrypt.compare(password, storedUser.password); //does the hashed password matched the password that been stashed

    if(!isEqual){
        const error = new Error ('Wrong password');
        error.statusCode = 402;
        throw error;
    }

    const token = jwt.sign(
        {
            //creates a cookie jason token with data on a client side
            email: storedUser.email,
            userId: storedUser.id
        },
        'secretfortoken',{expiresIn: '1h'}
    ); //now send it to client

    //status "all good". here is your jason data token
    res.status(200).json({token: token, userId:storedUser.id});

}catch (error){
    if(!error.statusCode){
        error.statusCode = 500;
    }
    next(error);
}

};