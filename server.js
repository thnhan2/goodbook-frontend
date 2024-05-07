const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');

const bookService = require('./service/bookService');
const compareByCreatedAt = require('./util/compareCreateDate');
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    try {
        const books = await bookService.getAllBooks();
        books.sort(compareByCreatedAt);
        res.render('index', { books });
    } catch (error) {
        console.log(error);
        res.render('404');
    }
});
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
