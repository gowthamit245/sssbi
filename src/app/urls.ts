import { environment } from '../environments/environment';

 var server = environment.apiUrl;


export const URL = {
  SERVER: server,  
  user_deatils:  server + 'user/user_deatils',
  getjobdetails  :  server + 'user/getjobdetails',
  searchJobs :  server + 'user/searchJobs',
  getjobDetailsOnId :  server + 'user/getjobDetailsOnId',
  insertApplyJobDetails :  server + 'user/insertApplyJobDetails',
};
