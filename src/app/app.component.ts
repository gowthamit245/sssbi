import { Component, OnInit, ElementRef , HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sssbi-dev';
  showservices="close";
  menu = "close";
  headerScrollView = 'scrollHeader-close';
  upScrollView = 'upscroll-close';
  pagename = '';

  
  constructor(public el: ElementRef, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    // this.router.events.filter((event: RouterEvent) => event instanceof NavigationStart)
    // .subscribe((x) => {
    //   if (x['url'].indexOf('admin/') > -1) {
    //       this.pagename = false;
    //   } else {
    //     this.pagename = true;
    //   }
    // });
    
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((x) => {
      console.log(x['url'].indexOf('/contact'));
      if (x['url'].indexOf('/contact') > -1) {
              this.pagename = 'contactus';
          } else {
            this.pagename = '';
          }
    });
  }
  
  @HostListener('window:scroll', ['$event'])
  checkScroll(e) {
    const scrollPosition = window.pageYOffset
    console.log(scrollPosition);
    if (scrollPosition > 200) {
      this.headerScrollView = 'scrollHeader-open'
    } else {
      this.headerScrollView = 'scrollHeader-close'
    }
    if(scrollPosition > 700){
      this.upScrollView = 'upscroll-open';
    } else {      
      this.upScrollView = 'upscroll-close';
    }
  }
  

  OpenMenuModel(){
    if(this.menu == 'close'){
      this.menu = 'open';
    }else{
      this.menu = 'close';
      this.showservices = '';
    }
  }
  Hide(){
    this.menu = 'close';
  }
  DisplayServicesList(sel){
    if(sel == 'Services'){
    this.showservices = 'sel-'+sel;
    } else if(sel == 'Aboutus'){
    this.showservices = 'sel-'+sel;
    } else {
    this.showservices = '';
    }
  }
  onActivate(event) {
    window.scroll(0,0);
  }
  onUpArrow(){
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 50); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
    }, 10);
  }

}
