const dataStore = require('nedb-promise')
const { generateTicketNr, generateETA } = require('../utility/utility')
const ticketDb = new dataStore({ filename: '../data/ticketsList.db', autoload: true })

module.exports = {
    async createTicket(body) {
        const newTicket = {
            eta: generateETA(),
            orderNr: generateTicketNr(),
            description: req.body.description,
            location: req.body.location,
            date: body.date,
            start_time: body.start_time
        }

        const updateTicket = await ticketDb.insert(newTicket)
    },
    async getTicket(_id) {
        const ticket = await ticketDb.findById(_id)
    }

}