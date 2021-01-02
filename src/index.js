var express = require('express')
const ejs = require("ejs");
const path = require('path')
const app = express()
const port = 3000

var routesLinks = require('./routes/links'), routesAPI = require('./routes/api');

app.use('/static', express.static(path.join(__dirname, 'public')))
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

const dataDir = path.resolve(`${process.cwd()}${path.sep}src`); // The absolute path of current this directory.
const templateDir = path.resolve(`${dataDir}${path.sep}templates`); // Absolute path of ./templates directory.

const renderTemplate = (res, req, template, data = {}) => {
    const baseData = {
      path: req.path
    };
    res.render(path.resolve(`${templateDir}${path.sep}${template}`), Object.assign(baseData, data));
  };

app.get('/', (req, res) => {
    renderTemplate(res, req, "index.ejs")
})

app.use('/links', routesLinks);
app.use('/api', routesAPI);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})