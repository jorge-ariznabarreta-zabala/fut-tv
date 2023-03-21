const axios = require('axios');
const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';

const instance = axios.create({
  baseURL: corsAnywhere + 'https://apiclient.besoccerapps.com/scripts/api/',
});

module.exports = instance;