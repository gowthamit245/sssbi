import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonService } from '../../_services/common.service';
import { User, Jobdetails} from '../../model/user';
import {userJobDetails} from '../../model/userJobDetails';

import { URL } from '../../urls';
@Component({
  selector: 'app-career-inner-page',
  templateUrl: './career-inner-page.component.html',
  styleUrls: ['./career-inner-page.component.css']
})
export class CareerInnerPageComponent implements OnInit {

  constructor(private ActivatedRoute: ActivatedRoute, private commonService : CommonService) { }
  id : any;
  job_list :Array<any>=[];
  jobDetails : Jobdetails = new Jobdetails();
  userJobDetails : userJobDetails = new userJobDetails();
  eventDetails : Array<any> = [];
  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getjobDetailsOnId();
  }
 
  getjobDetailsOnId(){
    var url = URL.getjobDetailsOnId;
    var filterList = [];
    filterList.push(this.id);
    // this.commonService.setLoader(true);
    let promise = new Promise((resolve, reject) => {		  
      let promiseArray = [];
      promiseArray.push(this.commonService.postMethodData(url, filterList)); 
      Promise.all(promiseArray).then(result => {
        console.log(result);
        if(result.length > 0){
          // this.commonService.setLoader(false);
          if(result[0].code == 200){
            console.log(result[0].data);
           this.job_list = result[0].data;
           this.eventDetails=this.job_list.find(x=>x.id==this.id);
            // this.commonService.showSuccess('Successfully Submitted.');	
            
          // this.router.navigate(['/sales-details']);
          }  else if(result[0].code == 201){
            this.commonService.showError(result[0].message);
          }else  {
            // this.commonService.showError('Failed to Submit');  
          }
        }
        resolve('done');
      }).catch(err => {
        console.log(err);
        // this.commonService.setLoader(false);
        this.commonService.showError('Error connecting to server');
        reject(err);
      }) 
    });
  }
  
  onFormSubmit(){
    var url = URL.insertApplyJobDetails;
    var filterList = [];
    filterList.push(this.userJobDetails);
    // this.commonService.setLoader(true);
    let promise = new Promise((resolve, reject) => {		  
      let promiseArray = [];
      promiseArray.push(this.commonService.postMethodData(url, filterList)); 
      Promise.all(promiseArray).then(result => {
        console.log(result);
        if(result.length > 0){
          // this.commonService.setLoader(false);
          if(result[0].code == 200){
            console.log(result[0].data);
           this.job_list = result[0].data;
          //  this.eventDetails=this.job_list.find(x=>x.id==this.id);
            // this.commonService.showSuccess('Successfully Submitted.');	
            
          // this.router.navigate(['/sales-details']);
          }  else if(result[0].code == 201){
            this.commonService.showError(result[0].message);
          }else  {
            // this.commonService.showError('Failed to Submit');  
          }
        }
        resolve('done');
      }).catch(err => {
        console.log(err);
        // this.commonService.setLoader(false);
        this.commonService.showError('Error connecting to server');
        reject(err);
      }) 
    });
  }
}
