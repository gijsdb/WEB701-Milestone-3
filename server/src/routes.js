const AuthController = require('./controllers/AuthController')
const HopController = require('./controllers/HopController')
const BidController = require('./controllers/BidController')
const FarmController = require('./controllers/FarmController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
    app.post('/register', AuthControllerPolicy.register, AuthController.register) 

    app.post('/login', AuthController.login) 
    app.put('/updateaccount', AuthControllerPolicy.updateaccount, AuthController.updateaccount) 

    app.post('/addhop', HopController.addhop) 

    app.get('/retrievehops', HopController.retrievehops) 
    app.get('/retrievehop/:id', HopController.retrievehop) 
    app.get('/getfarmershops/:id', HopController.getfarmershops) 

    app.post('/addbid', BidController.addbid)
    app.get('/retrievebids/:id', BidController.retrievebids)  

    app.post('/addfarm', FarmController.addfarm)
    app.get('/retrievefarms', FarmController.retrievefarms)
    app.get('/getfarmersfarm/:id', FarmController.getfarmersfarm)
}