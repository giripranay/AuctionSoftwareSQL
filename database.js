
var mysql = require('mysql');
var conn = mysql.createConnection({
  host: '127.0.0.1', // Replace with your host name
  user: 'giripranay',      // Replace with your database username
  password: '12345678',      // Replace with your database password
  database: 'chad' // // Replace with your database Name
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;