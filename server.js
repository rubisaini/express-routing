import express from 'express';
import path from 'path';

const PORT = 3004;
const app = express();

app.listen(PORT, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${PORT}`);
});

// Routing using express.Route method
app.use('/api/v1', require('./router'));



// Send normal Text
app.get('/', (req, res) => {
    res.send('Hello Ninja! Created a express server');
});

// Send html as text
app.get('/dashboard', (req, res) => {
    res.send("<!DOCTYPE html> <html><head lang='en'><meta charset='UTF-8'><title></title></head><body><h1>Hey its a post request</1h></body></html>");
});

// Send html file
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname + '/view/home.html'));
});

// Regex based routing case 1
app.get('/ab?c?d', (req, res) => {
    res.send('ab?cd'); // b and c optional
});

// Regex based routing case 2
app.get('/ab+cd', (req, res) => {
    res.send('ab+cd'); // add many b after b and before c
});


// Regex based routing case 3
app.get('/ab*cd', (req, res) => {
    res.send('ab*cd'); //  add many char after b and before c
});

// Regex based routing case 4
app.get(/a/, (req, res) => {
    res.send('routing having a'); //Route having a
});

// Regex based routing case 5
app.get(/.*full$/, (req, res) => {
    res.send('Route ends with full'); //Route ends with full
});
