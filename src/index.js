var express = require('express')
var router = express.Router();
const path = require('path')
const app = express()
const port = 3000

var routesLinks = require('./routes/links'), routesAPI = require('./routes/api');

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/links', routesLinks);
app.use('/api', routesAPI);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})