var userApi = require('./userapi');


module.exports = function (app) { 

   
    app.post('/api/user/user_deatils', userApi.user_deatils);

    
    
}