const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/users', (req, res) => {
    res.json({ msg: "Hello" })
})

app.listen(3000, () => console.log(`running on 3000`))