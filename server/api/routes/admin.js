const Events = require('../models/events')

module.exports = function(router) {

    router.get('/admin', async(req, res) => {
        const tickets = await Events.getEventList({})
        if (tickets) {
            res.status(200).json(tickets)
        } else {
            res.status(400).json({
                message: 'could not load events'
            })
        }

    })
    router.post('/admin', async(req, res) => {
        const order = await Order.create(req.body)
        if (order) {
            res.status(200).json(order)
        } else {
            res.status(400).json({ message: "Order is not created" })
        }

    })
}