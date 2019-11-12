import { Injectable } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( public toastr: ToastrManager) { }
  showSuccess(msg) {
    this.toastr.successToastr(msg, 'Success!');
}

showError(msg) {
    this.toastr.errorToastr(msg, 'Oops!');
}
}
