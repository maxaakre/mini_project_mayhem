const fs = require('fs');

module.exports = function(router) {

    router.get('/events', async(req, res) => {
        const events = fs.createReadstream('data/eventList.db')
        events.pipe(res);

    })
    router.post('/events', async(req, res) => {

    })
}

//middleware