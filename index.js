const express = require('express');
morgan = require('morgan');
const app = express( );

app.use(morgan('common'));

let topMovies = [
    {
        title: 'The Shawshank Redemption',
        year: '1994'
    },
    {
        title: 'Pulp Fiction',
        year: '1994'
    },
    {
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: '2001'
    },
    {
        title: 'Forrest Gump',
        year: '1994'
    },
    {
        title: 'The Silence of the Lambs',
        year: '1991'
    },
    {
        title: 'Life Is Beautiful',
        year: '1997'
    },
    {
        title: 'The Green Mile',
        year: '1999'
    },
    {
        title: 'Parasite',
        year: '2019'
    },
    {
        title: 'The Lion King',
        year: '1994'
    },
    {
        title: 'The Prestige',
        year: '2006'
    }
];

let myLogger = (req, res, next) => {
    console.log(req.url);
    next();
};

app.use(myLogger);

app.get('/', (req, res) => {
    res.send('Welcome to my top 10 movies!');
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});

app.use('/documentation', express.static('public', {index: 'documentation.html'}));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});