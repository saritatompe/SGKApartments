import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

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
  
  
  constructor(private translate: TranslateService, private router: Router ) {
    translate.setDefaultLang('en');
    this.router.navigate(['../login']);

  }

  onChange(event){
    debugger
    this.translate.setDefaultLang(event);
  }
}
