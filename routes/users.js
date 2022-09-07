// var express = require('express');
// var router = express.Router();
// var connection  = require('../database.js');
 
 
// /* GET home page. */
// router.get('/', function(req, res, next) {
      
//  connection.query('select projects.cid,projects.project_title,users.username from ilance_users users inner join ilance_projects projects on users.user_id = projects.user_id;',function(err,rows)     {
 
//         if(err){
//          req.flash('error', err); 
//          res.render('list',{page_title:"Users - Node.js",data:''});   
//         }else{
            
//             res.render('list',{page_title:"Users - Node.js",data:rows});
//         }
                            
//          });
        
//     });
 
 
// module.exports = router;


var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table
router.get('/list', function(req, res, next) {
    var sql='select projects.cid,projects.project_title,users.username from ilance_users users inner join ilance_projects projects on users.user_id = projects.user_id;';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('list', { title: 'User List', userData: data});
  });
});
module.exports = router;