const assets = require('connect-assets')
const app = require('express')()
const path = require('path')

app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'pug')

app.use(assets({ paths: ['app/assets/css', 'app/assets/js'] }))

app.get('/', (req, res) => res.render('index'))

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).send(err.stack)
})

module.exports = app

