//the connection between the endpoint and frontend
const  { validationResult } = require('express-validator'); //getting a library
const Ticket = require('../models/ticket'); //save the details of the user

//this shares the the whole table from sql method route
exports.fetchAll = async (req , res , next) => {

    try{
        //we are waiting for some info and sending it off to client
        const [allTickets] = await Ticket.fetchAll();
        res.status(200).json(allTickets);

    } catch (error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

//this shares the posting ticket method route
exports.postTicket = async (req , res , next) => {
    //look at request and see if there are any errors
    const error = validationResult(req);
    if(!error.isEmpty()) return;

    //remamber to make id field not nullable, unique and set it to auto increment
    const title = req.body.title;
    const description =  req.body.description;
    const status = req.body.status;
    const level = req.body.level;
    const userId = req.body.userId;

    try{

        const ticketDetails  = 
        {
            title: title,
            description: description,
            status: status,
            level: level,
            userId: userId
        }

        const result = await Ticket.save(ticketDetails);
        res.status(201).json({ message: 'Succesfully Posted.'}); 

    } catch (error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};

//delete ticket method
exports.deleteTicket = async (req , res , next) => {

    try{
        //we are waiting for some info and sending it off to client
        const deleteResponse = await Ticket.delete(req.params.id);
        res.status(200).json(deleteResponse);

    } catch (error){
        if(!error.statusCode){
            error.statusCode = 500;
        }
        next(error);
    }
};
