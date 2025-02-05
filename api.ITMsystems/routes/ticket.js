const express = require('express'); //this is validation, when you send to the server it need to validate data.
const { body } = require('express-validator'); 
const ticketsController = require('../controllers/tickets');
const router = express.Router();


// ENDPOINT ---- for all posted tickets ...router.get('/help-desk', ) 
router.get('/', ticketsController.fetchAll)

// ENDPOINT ---- posting the actual ticket
router.post(
    '/',
    [ 
        body('title').trim().isLength({min: 5}).not().isEmpty(),
        body('description').trim().isLength({min: 5}).not().isEmpty(),
        body('status').trim().not().isEmpty(),
        body('level').trim().isNumeric().not().isEmpty(),
        body('userId').trim().isNumeric().not().isEmpty()
    ], ticketsController.postTicket
);

//ENDPOINT -- delete ticket 
router.delete( '/:id', ticketsController.deleteTicket);

module.exports = router;