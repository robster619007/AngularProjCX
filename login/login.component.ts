import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public name = '';
  public displayname = true;
  // tslint:disable-next-line:no-input-rename
  @Input('cambrianData') public title;
  @Output() public userEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.userEvent.emit('Welcome to CambrianZ ' + this.name);
  }

}
