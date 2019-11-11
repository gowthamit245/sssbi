import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild("secBox1", { static: true }) secBox1: ElementRef;
  @ViewChild("secBox2", { static: true }) secBox2: ElementRef;

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

}
