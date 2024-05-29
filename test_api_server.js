
const express = require('express')
const app = express()
const port = 3001

app.get('/api/myapi', (req, res) => {
  res.send(`This is /api/myapi on port ${port}! ts=${(new Date()).toISOString()}`)
})

app.get('/', (req, res) => {
  res.send(`This is / on port ${port}! ts=${(new Date()).toISOString()}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})