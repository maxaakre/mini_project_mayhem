const { generateTicketNr, generateETA } = require('../utility/utility')
const TicketList = require('../models/tickets')
module.exports = function(router) {

    //middleware

    router.get('/tickets/:id', async(req, res) => {

        const ticket = await TicketList.getTicket(_id)
        if (ticket) {
            res.status(200).json(ticket)
        } else {
            res.status(400).json(err => {
                console.log(err)
            })
        }

    })
    router.post('/tickets/:id', async(req, res) => {

        const ticket = await TicketList.createTicket(req.body)
        if (ticket) {
            res.status(200).json(ticket)
        } else {
            res.status(400).json(err => {
                console.log(err)
            })
        }


    })
}