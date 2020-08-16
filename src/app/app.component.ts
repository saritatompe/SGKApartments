import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SGKApartments';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  setLanguage(event,value){
    debugger
    console.log("jdkhjkhkdsj",value);
    this.translate.setDefaultLang('en');
  }
}
