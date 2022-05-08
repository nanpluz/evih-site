import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  public showLanguageChoice = window.localStorage.getItem("lang") != "isSet";

  ngOnInit(): void {
  }

  choiceLanguage(language: string) {
    this.translateService.use(language);
    this.showLanguageChoice = false;
    window.localStorage.setItem("lang", "isSet")
  }

}
