const {categories} = require('../models')

module.exports = {
    create: async (req, res)=> {
        try {
            const data = await categories.create({
                data : {
                    nama : req.body.name,
                    accounts : {
                        create: {
                          nama: req.body.nama,
                          email: req.body.email,
                          swafoto: req.body.swafoto,
                          passsword : req.body.passsword
                        }
                    }
                }
            })

            return res.status(2001).json({
                data
            })
        }catch (error) {
            return res.status(500).json({
                error
            });
        }
    },
    list : async (req, res)=>{
        try {
            const data = await categories.findMany();

            return res.status(201).json({
                data
            })
        }catch (error) {
            return res.status(500).json({
                error
            })
        }
    }
}