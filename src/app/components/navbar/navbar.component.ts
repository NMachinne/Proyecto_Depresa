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

  bool: boolean = false;
  public ctheme(){
    var cbody =document.body;
    if(this.bool){
        cbody.className ="light-mode";
        this.bool = false;
    } else{
        cbody.className ="dark-mode";
      this.bool = true;
    }
  }
} 