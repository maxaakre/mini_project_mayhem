const Events = require('../models/events')
const Tickets = require('../models/tickets')

module.exports = function(router) {

    router.get('/buy/:eventId', async(req, res) => {
        const eventDetails = await Events.getEvent(req.params.eventId)
        if (eventDetails) {
            res.status(200).json(eventDetails)
        } else {
            res.status(400).json({
                message: 'event not found'
            })
        }

    })
    router.post('/buy', async(req, res) => {
        const ticket = await Tickets.createTicket(req.body)
        if (ticket) {
            res.status(200).json(ticket)
        } else {
            res.status(400).json({
                message: 'ticket is not generated'
            })
        }

    })
}