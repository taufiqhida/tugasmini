const {users} =require('../models'),
    utils = require('../utils'),
    jwt = require('jsonwebtoken'),
    bcrypt = require('bcrypt'),
    secret_key = process.env.JWT_KEY || 'no_secret'
const {re} = require("prisma/build/child");
require('dotenv').config()
module.exports = {
    register:async (req, res) =>{
        try{
          const data = await users.create({
              data: {
                  nama: req.body.nama,
                  email: req.body.email,
                  swafoto: req.body.swafoto,
                  passsword : req.body.passsword
              }
          })
        }catch (error){

        }
    }
}
