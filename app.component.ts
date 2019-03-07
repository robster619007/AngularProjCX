import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'CambrianZ';
  public message = '';
  click = false;
  public displayLogin = false;
  onClick(login) {
    this.click = true;
    if (this.click === true && this.displayLogin === false) {
      this.displayLogin = true;
      return true;
    } else {
    this.click = false;
    this.displayLogin = false;
    return false;
    }
  }

}
