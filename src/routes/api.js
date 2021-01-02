var express = require('express')
var router = express.Router()


router.get('/', function (req, res) {
  res.send('main page')
})

router.get('/temp', function (req, res) {
  res.send('temp')
})

module.exports = router