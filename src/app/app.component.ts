import { Component} from '@angular/core';
import { INote } from './model/INote';
import { ThemeService } from './theme.service';
import { LocalstorageService } from './services/localstorage.service';
import { LoginService } from './services/login.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoDepresa';
  isDarkMode: boolean;
  private user!: string;

  constructor(private themeService: ThemeService, public translate:TranslateService) {
    this.translate.addLangs(['es','en']);
    if(localStorage.getItem('language')){
      translate.setDefaultLang(localStorage.getItem('language')!);
      translate.use(localStorage.getItem('language')!);
  }
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

}
