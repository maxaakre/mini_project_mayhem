const express = require('express')

const router = express.Router()

require('./routes/admin')(router)
require('./routes/buy')(router)
require('./routes/events')(router)
require('./routes/staff')(router)
require('./routes/tickets')(router)


module.exports = router