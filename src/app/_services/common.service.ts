import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(public toastr: ToastrManager, private http: HttpClient) { }
  showSuccess(msg) {
    this.toastr.successToastr(msg, 'Success!');
}

showError(msg) {
    this.toastr.errorToastr(msg, 'Oops!');
}
postMethodData(url, data){
  let userDetails = '';
  userDetails = localStorage.getItem('authToken'); 
  var jsonString = JSON.stringify(data);
  if(jsonString != undefined)
  jsonString = jsonString.replace("'", "''");
  data = JSON.parse(jsonString); 
  if(userDetails == undefined || userDetails == null){
    return this.http.post(url,data).toPromise();
  }else{
    let headers = new HttpHeaders({ 
    'Authorization': userDetails });
    let options = { headers: headers };
    return this.http.post(url,data, options).toPromise();
  }
}
getMethodData(url){
  let userDetails = '';
  userDetails = localStorage.getItem('authToken'); 
  console.log(userDetails);
  if(userDetails == undefined || userDetails == null){
    return this.http.get(url).toPromise();
  }else{
    let headers = new HttpHeaders({ 
    'Authorization': userDetails });
    let options = { headers: headers };
    return this.http.get(url, options).toPromise();
  }
}
}
