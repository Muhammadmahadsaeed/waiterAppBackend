const express = require('express');
const router = express.Router();
var db = require('../config/db.js');


router.get('/getAll', function(req, res, next) {
    var sql = "SELECT * FROM login";
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(rows)
    })
  });
  
  /*get method for fetch single product*/
//   router.get('/:id', function(req, res, next) {
//     var id = req.params.id;
//     var sql = `SELECT * FROM products WHERE id=${id}`;
//     db.query(sql, function(err, row, fields) {
//       if(err) {
//         res.status(500).send({ error: 'Something failed!' })
//       }
//       res.json(row[0])
//     })
//   });
  
  /*post method for create product*/
  router.post('/create', function(req, res) {
    var name = req.body.name;
    var pwd = req.body.pwd;
    console.log(req.body)
    var sql = `INSERT INTO login (user_name, pwd) VALUES ("${name}", "${pwd}")`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success',result})
    })
  });
  
  /*put method for update product*/
//   router.put('/update/:id', function(req, res, next) {
//     var id = req.params.id;
//     var name = req.body.name;
//     var sku = req.body.sku;
//     var price = req.body.price;
  
//     var sql = `UPDATE products SET name="${name}", sku="${sku}", price="${price}" WHERE id=${id}`;
//     db.query(sql, function(err, result) {
//       if(err) {
//         res.status(500).send({ error: 'Something failed!' })
//       }
//       res.json({'status': 'success'})
//     })
//   });
  
  /*delete method for delete product*/
//   router.delete('/delete/:id', function(req, res, next) {
//     var id = req.params.id;
//     var sql = `DELETE FROM products WHERE id=${id}`;
//     db.query(sql, function(err, result) {
//       if(err) {
//         res.status(500).send({ error: 'Something failed!' })
//       }
//       res.json({'status': 'success'})
//     })
//   })
module.exports = router;










// https://github.com/itzpradip/material-bottom-tab-react-navigation-4/blob/master/App.js