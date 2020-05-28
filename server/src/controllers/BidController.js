const {Bid} = require('../models')

module.exports = {
    async retrievebids (req, res) {
      const hopId = req.params.id
      console.log(hopId)
      try { 
        Bid.findAll({
          where: {
            hopId: hopId,
          },
          raw: true,
        }).then(bid => {
          res.json(bid);
        });
      } catch(error) {
        console.log(error);
      }
    },
    async addbid (req, res) {
      try {
        console.log(req.body)
        const bid = await Bid.create(req.body)
        res.send(bid.toJSON())
      } catch(err) {
        res.status(400).send({
            error: 'Failed to create bid'
        })
      }
    }
}