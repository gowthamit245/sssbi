import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../_services/common.service';
import { User, Jobdetails} from '../../model/user';
import { URL } from '../../urls';
@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  grid_status: any;
  job_list :Array<any>=[];
  jobDetails : Jobdetails = new Jobdetails();
  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.getjoblist();
  }
  getjoblist(){
    console.log(this.jobDetails);
    var url = URL.getjobdetails;
    var filterList = [];
    filterList.push(this.jobDetails);
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
            this.job_list=result[0].data;
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
      console.log(this.jobDetails+"dtyfugi");
        // this.InsertDesign();
      
     
     }
    //  InsertDesign(){
    //    console.log(this.jobDetails);
    //   var url = URL.searchJobs;
    //   var filterList = [];
    //   filterList.push(this.jobDetails);
    //   let promise = new Promise((resolve, reject) => {		  
    //     let promiseArray = [];
    //     promiseArray.push(this.commonService.postMethodData(url, filterList)); 
    //     Promise.all(promiseArray).then(result => {
    //       console.log(result);
    //       if(result.length > 0){
    //         if(result[0].code == 200){
    //           console.log(result[0].data);
    //           this.commonService.showSuccess('Successfully Submitted.');	
    //         }  else if(result[0].code == 201){
    //           this.commonService.showError(result[0].message);
    //         }else  {
    //           this.commonService.showError('Failed to Submit');  
    //         }
    //       }
    //       resolve('done');
    //     }).catch(err => {
    //       console.log(err);
    //       // this.commonService.setLoader(false);
    //       this.commonService.showError('Error connecting to server');
    //       reject(err);
    //     }) 
    //   });
    //  }
}
