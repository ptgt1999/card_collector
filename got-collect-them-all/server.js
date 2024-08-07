import express from 'express';
const app = express()

app('/', (req, res) => {
    console.log('Here')
    res.send('Hi')
})

app.listen(3333)
