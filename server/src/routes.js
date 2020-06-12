const AuthController = require('./controllers/AuthController')
const HopController = require('./controllers/HopController')
const BidController = require('./controllers/BidController')
const FarmController = require('./controllers/FarmController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
    app.post('/api/register', AuthControllerPolicy.register, AuthController.register) 

    app.post('/api/login', AuthController.login) 
    app.put('/api/updateaccount', AuthControllerPolicy.updateaccount, AuthController.updateaccount) 

    app.post('/api/addhop', HopController.addhop) 

    app.get('/api/retrievehops', HopController.retrievehops) 
    app.get('/api/retrievehop/:id', HopController.retrievehop) 
    app.get('/api/getfarmershops/:id', HopController.getfarmershops) 

    app.post('/api/addbid', BidController.addbid)
    app.get('/api/retrievebids/:id', BidController.retrievebids)  

    app.post('/api/addfarm', FarmController.addfarm)
    app.get('/api/retrievefarms', FarmController.retrievefarms)
    app.get('/api/getfarmersfarm/:id', FarmController.getfarmersfarm)
}