var userApi = require('./userapi');
var path = require('path');
const multipart = require('connect-multiparty');
var counter = 0;
var EXT_RE = /(\.[_\-a-zA-Z0-9]{0,16}).*/g;
const multipartMiddleware = multipart({
    uploadDir : '../src/assets/uploads',
    
    // filename: function(filename, callback){
    //   counter++;
    //   var name = filename.replace(EXT_RE, "");
    //   callback(name+'-YEAH-'+counter+'.png');

    // }
});
module.exports = function (app) { 

   
    app.post('/api/user/user_deatils', userApi.user_deatils);
    app.post('/api/user/getjobdetails', userApi.getjobdetails);
    app.post('/api/user/searchJobs', userApi.searchJobs);
    app.post('/api/user/getjobDetailsOnId', userApi.getjobDetailsOnId);
    app.post('/api/user/insertApplyJobDetails', multipartMiddleware,userApi.insertApplyJobDetails);

    
    
    
    
}