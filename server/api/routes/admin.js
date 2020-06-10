const Events = require('../models/events')

module.exports = function(router) {

    router.get('/admin', async(req, res) => {
        const eventList = await Events.getEventList({})
        if (eventList) {
            res.status(200).json(eventList)
        } else {
            res.status(400).json({
                message: 'could not load events'
            })
        }

    })
    router.post('/admin', async(req, res) => {
        const event = await Events.createEvent(req.body)
        if (event) {
            res.status(200).json(event)
        } else {
            res.status(400).json({ message: "Order is not created" })
        }

    })
}