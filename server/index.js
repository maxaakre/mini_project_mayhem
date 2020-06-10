const express = require('express');
const bodyParser = require('body-parser')
const cors = require('core-js')
const app = express();

//assigning const value for port
const port = 6100;
const api = require('./api')

// routes tha handle requests

// const eventsRoutes = require('./routes/events')
// const ticketsRoutes = require('./routes/tickets')
// const ordersRoutes = require('./routes/buy')
// const staffList = require('./routes/staff')
// const adminPage = require('./routes/admin')

//middleware functions
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', api)
    // app.use('/api/events', eventsRoutes)
    // app.use('/api/tickets', ticketsRoutes)
    // app.use('/api/buy', ordersRoutes)
    // app.use('/api/staff', staffList)
    // app.use('/api/admin', adminPage)


app.use(function(req, res) {
    const err = new Error('Not found ');
    err.status = 404;
    res.json(err);
})
app.listen(port, () => {
    console.log('Server is started on port :' + port)
});