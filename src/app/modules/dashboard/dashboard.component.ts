import { Component, OnInit , OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  isLoggedIn = false;
  avatarInitial = '';
  username = '';
  authStatus!: Subscription;

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private toast: ToastService
  ) { }

  ngOnInit(): void {
    this.authStatus = this.auth.loggedInStatus$.subscribe(status => {
      this.isLoggedIn = status;

      if(status) {
        this.username = this.auth.getPersistedUser().username;
        this.avatarInitial = this.username[0] || 'Q';
      }
    })
  }

  ngOnDestroy() {
    this.authStatus.unsubscribe();
  }

  logout() {
    this.auth.logout();
    this.toast.showSuccess('Successfully logged out.');
    this.router.navigateByUrl('/');
  }

}
