const { Pool } = require('pg');
require('env2')('.env')

const { DEV_DB_URL, DATABASE_URL } = process.env;
let database = ''
if (process.env.NODE_ENV == 'pro')
{
    database = DATABASE_URL
} else
{
    database = DEV_DB_URL
}
const connection = new Pool({
    connectionString: database,
    ssl: process.env.NODE_ENV == "pro"
        ? { rejectUnauthorized: false }
        : false,
})

module.exports = connection