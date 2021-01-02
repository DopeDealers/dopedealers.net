var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
  res.send('links')
})

router.get('/about', function (req, res) {
  res.send('temp')
})

module.exports = router