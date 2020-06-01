const {Farm} = require('../models')

module.exports = {
    async addfarm(req, res) {
        try {
            console.log('farmed')
            const farm = await Farm.create(req.body)
            res.send(farm.toJSON())
          } catch(err) {
            console.log(err.name)
            res.status(400).send({
                error: 'Theres an error'
            })
        }
    },
    async retrievefarms(req,res) {
        try {
            await Farm.findAll().then(function (farms) {
                res.json(farms)
            });
        }
        catch(error) {
            console.log(error)
        }
    },
    async getfarmersfarm(req,res) {
        try {
            const farmerId = req.params.id
            try { 
              Farm.findAll({
                where: {
                  userId: farmerId,
                },
                raw: true,
              }).then(farm => {
                res.json(farm);
              });
            } catch(error) {
              console.log(error);
            }
          } catch(err) {
            res.status(500).send({
              error: 'An error occured'
            })
          }
    }
}