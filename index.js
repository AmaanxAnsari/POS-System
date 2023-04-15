const express = require('express');
const app = express();
const port = 1000;

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})