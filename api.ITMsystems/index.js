const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const errorController = require('./controllers/error');
const app = express();
const ports = process.env.PORT  || 3000;
//|| 3306  || 4200 || 3000


app.use(bodyParser.json());

//constant request sending
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization');
    next();
});

//handling the routes
app.use('/auth', authRoutes);

//error controlling, 500 is for everything else.
app.use(errorController.get404);
app.use(errorController.get500);

app.listen(ports, () => console.log(`listening on ports ${ports}`));