const Events = require('../models/events')

module.exports = function(router) {

    router.get('/events', async(req, res) => {

        const events = await Events.getEventList()
        if (events) {
            res.status(200).json(events)
        } else {
            res.status(400).json({
                message: 'events are not Listed'
            })
        }
        // const events = fs.createReadstream('data/eventList.db')
        // events.pipe(res);

    })
    router.post('/events', async(req, res) => {

    })
}

//middleware