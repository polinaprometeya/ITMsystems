const db = require('../util/database');
module.exports = class User 
{
    //this is an object that sets what we need and then method that has the actions that we need
    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    static find(email)
    {
        return db.execute(
            'SELECT * FROM users WHERE email = ?', 
            [email]);
    }

    //when we make a new user the questionmarks prevent melicious code deleting the database etc. it is security.
    static save(user)
    {
    return db.execute(
        'INSERT INTO users (name, email, password) VALUES (?,?,?)', 
        [user.name, user.email, user.password]);
    }

};