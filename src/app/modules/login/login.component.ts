import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm = this.fb.group({
    identifier: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  private loginSub: Subscription | undefined;
  public errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private ss: StorageService,
    private toast: ToastService
  ) {}

  ngOnDestroy(): void {
    if (this.loginSub) {
      this.loginSub.unsubscribe();
    }
  }

  login() {
    const credentials = this.loginForm.value;
    console.log(credentials);

    this.loginSub = this.auth
      .login(credentials.identifier, credentials.password)
      .subscribe({
        next: (resp) => {
          this.loginForm.reset();
          this.auth.persistUser(resp);
          this.toast.showSuccess('Successfully logged in');
          const attemptedRoute = this.ss.getItem('attemptedRoute');
          this.ss.removeItem('attemptedRoute');
          this.router.navigateByUrl('/dashboard');
        },
        error: () => {
          this.errorMessage = 'Login unsuccessful. check your credentials.';
          this.toast.showDanger(this.errorMessage);
        },
      });
  }

  ngOnInit(): void {}
}
