var userApi = require('./userapi');

const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: '../src/assets/images/uploads'

});
module.exports = function (app) { 

   
    app.post('/api/user/user_deatils', userApi.user_deatils);
    app.post('/api/user/getjobdetails', userApi.getjobdetails);
    app.post('/api/user/searchJobs', userApi.searchJobs);
    app.post('/api/user/getjobDetailsOnId', userApi.getjobDetailsOnId);
    app.post('/api/user/insertApplyJobDetails', multipartMiddleware,userApi.insertApplyJobDetails);

    
    
    
    
}