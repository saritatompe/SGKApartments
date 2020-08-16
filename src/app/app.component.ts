import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SGKApartments';
  languages = [
    { id: 1, code: "en", name:"English" },
    { id: 2, code: "mr", name:"Marathi" }
    ];
  
  
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  onChange(event){
    debugger
    this.translate.setDefaultLang(event);
  }
}
