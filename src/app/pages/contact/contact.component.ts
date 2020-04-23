import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../../_services/common.service';
import { User } from '../../model/user';
import { URL } from '../../urls';
export class Contact {

  // constructor(
  //   public name: string='',
  //   public email: string='',
  //   public phone: string='',
  //   public message?: string,
   
  // )
  //  {  }

}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild("secBox1", { static: true }) secBox1: ElementRef;
  @ViewChild("secBox2", { static: true }) secBox2: ElementRef;
  User : User = new User();
  model: Contact = new Contact();
  constructor(
    private commonService : CommonService
  ) { }

  ngOnInit() {
    console.log(this.secBox1);
  }
  contactScroll(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      let secBoxScrollVal = this.secBox1.nativeElement.scrollHeight + this.secBox2.nativeElement.scrollHeight - 100;
      console.log(secBoxScrollVal);
      if(pos<secBoxScrollVal){
        window.scrollTo(0, pos + 50); // how far to scroll on each step
      }else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
  }
  ValidateContact(){
    var retVal = true; 
    
    if(this.User.name.trim() == ''){ 
       this.commonService.showError('Enter User Name.');
      retVal = false;
    }
    if(this.User.email.trim() == ''){ 
       this.commonService.showError('Enter Email.');
      retVal = false;
    }
    // if(this.User.ph_no. trim() == ''){ 
    //   this.commonService.showError('Enter Phone Number.');
    //   retVal = false;
    // }
     
   return retVal;
  }
  onFormSubmit(){
    if(!this.ValidateContact())
    {
      return;
    }
    else{
      // this.User= new User();
      this.InsertCustomerDetails();
      // this.commonService.showSuccess('Your Details Successfully Submitted.');
    }

    
    console.log(this.User);
  }
  InsertCustomerDetails(){
    console.log(this.User);
    var url = URL.user_deatils;
    var filterList = [];
    filterList.push(this.User);
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
            // this.user =result[0].data;
            this.commonService.showSuccess('Successfully Submitted.');	
            
          // this.router.navigate(['/sales-details']);
          }else  {
            this.commonService.showError('Failed to Submit');  
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
