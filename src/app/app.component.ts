import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'i18n-test';
  public feelings: string = $localize`:@@myFeelings:I love CCP`;
}
