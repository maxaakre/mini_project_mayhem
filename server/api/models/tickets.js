const dataStore = require('nedb-promise')
const bw
const ticketDb = new dataStore({ filename: '../data/ticketsList.db', autoload: true })

module.exports = {
    async createTicket(body) {
        const newTicket = {

        }

        const updateTicket = await ticketDb.insert(newTicket)
    }

}