import express from 'express';

const app = express();
app.get('/', (req, res) => {
    return res.send('hello2');
})

app.listen(3000);