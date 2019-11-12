import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  constructor() { }

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
      // this.commonService.showError('Enter User ID.');
      retVal = false;
    }
    if(this.model.email.trim() == ''){ 
      // this.commonService.showError('Enter Password.');
      retVal = false;
    }
    if(this.model.phone == ''){ 
      // this.commonService.showError('Enter Password.');
      retVal = false;
    }
     
   return retVal;
  }
  onFormSubmit(){
    if(!this.ValidateContact()) return;
    
    console.log(this.model);
  }

}
