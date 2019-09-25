import { Component, OnInit, ElementRef , HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  techScrollView : string = 'hide';
  constructor(public el: ElementRef) { }

  ngOnInit() {
  }
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    console.log(componentPosition);
    const scrollPosition = window.pageYOffset
    console.log(scrollPosition);
    if (scrollPosition > 2995) {
      this.techScrollView = 'boxTechView'
    } else {
      this.techScrollView = 'boxTechView-close'
    }
  }

}
