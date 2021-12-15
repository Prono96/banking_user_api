const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../modules/users');
const bcrypt = require('bcrypt');
// const users = require('../modules/users');


// Add user login 
router.post('/signup', (req, res) => {
  users.find({email: req.body.email})
  .exec()
  .then(user => {
    if(user.length >= 1) {
      return res.status(409).json({
        message: "Mail Exist"
      })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
          return res.status(500).json({
            error: err
          });
        } else { 
          const user = new User({
            _id: new mongoose.Types.ObjectId(),
            email: require.body.email, 
            password: hash
          });
          user
          .save()
          .then(result => {
            console.log(result);
            res.status(201).json({
              message: 'User Created'
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({
              error: err
            });
          })
        }
      }) 
    }
  });
 
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err) {
      return res.status(500).json({
        error: err
      });
    } else { 
      const user = new users({
        _id: new mongoose.Types.ObjectId(),
        email: require.body.email, 
        password: hash
      });
      user
      .save()
      .then(result => {
        console.log(result);
        res.status(201).json({
          message: 'User Created'
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      })
    }
  }) 
});

// User deposit money 
router.post('/get', (req, res)=>{
  return res.status(200).json({
    message: 'working very fine'
  });
  })

module.exports = router;