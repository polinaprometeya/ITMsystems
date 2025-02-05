const db = require('../util/database');
module.exports = class Ticket 
{
    //this is an object that sets what we need and then method that has the actions that we need
    constructor(title, description, status, level, userId)
    {
        this.title = title;
        this.description = description;
        this.status = status;
        this.level = level;
        this.userId = userId;
    }

    //gets the whole table from sql
    static fetchAll()
    {
    return db.execute('SELECT * FROM tickets');
    }

    //when we make a new user the questionmarks prevent melicious code deleting the database etc. it is security.
    static save(ticket)
    {
    return db.execute(
        'INSERT INTO tickets (title, description, status, level, userId) VALUES (?,?,?,?,?)', 
        [ticket.title, ticket.description, ticket.status, ticket.level, ticket.userId  ]);
    }

    static delete(id)
    {
    return db.execute('DELETE FROM tickets WHERE id = ?', [id]);
    }


};