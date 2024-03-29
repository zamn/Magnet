"use strict";

const bcrypt = require('bcrypt');

class Auth {

  constructor(){
    this.saltRounds = 8;
  }

  genPassword(plainTextPassword){
    return new Promise((resolve, reject) => {
      bcrypt.hash(plainTextPassword, this.saltRounds, function(err, hash) {
        if (err) {
          reject(err);
        }
        else {
          console.log(hash)
          resolve(hash);
        }
      });
    })
  }

  verifyPassword(plainTextPassword, hashedPassword){
    return new Promise((resolve, reject) => {
      bcrypt.compare(plainTextPassword, hashedPassword, function(err, bool) {
        if (err) {
          reject(err);
        }
        else {
          resolve(bool);
        }
      });
    })
  }

}

module.exports = new Auth;
