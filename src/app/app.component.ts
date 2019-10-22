import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sssbi-dev';
  menu = "close";
  OpenMenuModel(){
    if(this.menu == 'close'){
      this.menu = 'open';
    }else{
      this.menu = 'close';
    }
  }
}
