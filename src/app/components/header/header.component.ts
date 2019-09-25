import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  public get userPic() {
    return this.authService.user.images && this.authService.user.images[0] ? this.authService.user.images[0].url : null;
  }

  ngOnInit() {
  }

}
