const express = require('express');
const app = express();
const port = 2000

const cors = require('cors');
app.use(cors())

const phones = require('./phones.json');

app.get('/phones', (req, res) => {
    res.send(phones)
})

app.get('./phones/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log('i need data for id: ', id)
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

app.listen(port, () => {
    console.log(`phone post running: ${port}`)
})