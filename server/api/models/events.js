const dataStore = require('nedb-promise')
const eventDb = new dataStore({ filename: '../data/eventsList.db', autoload: true })

module.exports = {
    async createEvent(body) {

        return await eventDb.insert({
            date: body.date,
            price: body.price,
            description: body.description,
            location: body.location,
            start_time: body.start_time,
            end_time: body.end_time,
            tickets: body.tickets
        });

    }
}