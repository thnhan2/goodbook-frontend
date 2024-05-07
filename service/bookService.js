const axios = require('axios');

async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:3000/books');
        return response.data.data;
    } catch (err) {
        console.log(err);
        throw new Error('failed to fetch books');
    }
}

module.exports = {
    getAllBooks,
};
