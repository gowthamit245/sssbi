import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sssbi-dev';
  showservices="close";
  menu = "close";
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

}
