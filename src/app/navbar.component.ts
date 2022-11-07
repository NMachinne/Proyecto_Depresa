import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,RouterModule,TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public loginS:LoginService, public localS:LocalstorageService,private translate:TranslateService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.localS.remove("user");
    this.loginS.signOut();
  }

  cambiarEspanol(){
    this.translate.use('es');
    localStorage.setItem("language","es");
  }
  changeToEnglish(){
    this.translate.use('en');
    localStorage.setItem("language","en");
  }

}
