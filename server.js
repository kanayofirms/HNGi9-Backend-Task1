const express = require('express')
const app = express()
const importData = require('./data.json')
let port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Hello, World!')
})

//api endpoint route
app.get('/api', (req, res) => {
    res.send(importData)
})

app.listen(port, () => {
    console.log(`Listenin on port ${4000}`)
})

