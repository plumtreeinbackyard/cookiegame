const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'localhost/cookieGame';
const db = monk(connectionString);
 
module.exports = db;