var userApi = require('./userapi');


module.exports = function (app) { 

   
    app.post('/api/user/user_deatils', userApi.user_deatils);
    app.post('/api/user/getjobdetails', userApi.getjobdetails);
    app.post('/api/user/searchJobs', userApi.searchJobs);
    app.post('/api/user/getjobDetailsOnId', userApi.getjobDetailsOnId);

    
    
    
    
}