const express = require('express');
const mongoose = require('mongoose');

const korisnici = require('./routes/api/korisnici');
const profil = require('./routes/api/profil');
const objave = require('./routes/api/objave');

const app = express();

// DB konfiguracija
const db = require('./config/keys').mongoURI;

// Konektovanje prema MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB je konektovan'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello there'));

// use Routes
app.use('/api/korisnici', korisnici);
app.use('/api/profil', profil);
app.use('/api/objave', objave);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server je pokrenut na portu ${port}`));

