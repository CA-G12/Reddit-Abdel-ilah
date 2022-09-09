const { Pool } = require('pg');
require('env2')('.env')

const { DEV_DB_URL } = process.env;

const connection = new Pool({
    connectionString: DEV_DB_URL,
    ssl:false
})

module.exports = connection