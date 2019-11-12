import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../../_services/common.service';
export class Contact {

  constructor(
    public name: string='',
    public email: string='',
    public phone: string='',
    public message?: string,
   
  ) {  }

}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild("secBox1", { static: true }) secBox1: ElementRef;
  @ViewChild("secBox2", { static: true }) secBox2: ElementRef;
 
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
    
    if(this.model.name.trim() == ''){ 
       this.commonService.showError('Enter User Name.');
      retVal = false;
    }
    if(this.model.email.trim() == ''){ 
       this.commonService.showError('Enter Email.');
      retVal = false;
    }
    if(this.model.phone == ''){ 
      this.commonService.showError('Enter Phone Number.');
      retVal = false;
    }
     
   return retVal;
  }
  onFormSubmit(){
    if(!this.ValidateContact())
    {
      return;
    }
    else{
      this.model= new Contact();
      this.commonService.showSuccess('Your Details Successfully Submitted.');
    }

    
    console.log(this.model);
  }

}
