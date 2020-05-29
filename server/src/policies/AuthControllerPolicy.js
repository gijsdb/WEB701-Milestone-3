const joi = require('joi')

module.exports = {
    register(req, res, next) {
        console.log(req.body)
        const schema = {
            username: joi.allow(),
            email: joi.string().email(),
            password: joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}')
            ),
            accountType: joi.allow()
        }
        const { error, value } = joi.validate(req.body, schema)

        if(error) {
         switch(error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'You must provide a valid email'
                })
            break
            case 'password':
                res.status(400).send({
                    error: 'The password provided did not match the rules'
                })
            break
            default:
                res.status(400).send({
                    error: 'Something has gone wrong'
                })
         }
        } else {
          next()
        }
    },
    updateaccount(req, res, next) {
        console.log("checking password")
        const schema = {
            newEmail: joi.string().email(),
            password: joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}')
            ),
            oldEmail: joi.allow()
        }
        const { error, value } = joi.validate(req.body, schema)

        if(error) {
         switch(error.details[0].context.key) {
            case 'email':
                res.status(400).send({
                    error: 'You must provide a valid email'
                })
            break
            case 'password':
                res.status(400).send({
                    error: 'The password provided did not match the rules'
                })
            break
            default:
                res.status(400).send({
                    error: 'Something has gone wrong'
                })
         }
        } else {
          next()
        }
    }
}