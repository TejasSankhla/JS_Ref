const axios = require('axios');
const { title } = require('process');
async function run() {

    const response = await axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=f4150c58');
    console.log(response.data.Title);
}
run();