import { Component} from '@angular/core';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private authService: AuthService) {}

  public currentUser = this.authService.currentUser;
  public logout = () => this.authService.logout();
}
