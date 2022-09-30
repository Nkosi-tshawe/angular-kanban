import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { StorageService } from 'src/app/core/services/storage/storage.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm = this.fb.group({
    fullName: ['', Validators.required],
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  private registrationSub: Subscription | undefined;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private router: Router,
    private ss: StorageService,
    private toast: ToastService
  ) {}

  ngOnDestroy(): void {
    if (this.registrationSub) {
      this.registrationSub.unsubscribe();
    }
  }

  get password() {
    return this.signupForm.get('password');
  }

  signup() {
    const user = this.signupForm.value;

    this.registrationSub = this.auth
      .register(user.username, user.email, user.password)
      .subscribe({
        next: (resp) => {
          this.signupForm.reset();
          this.auth.persistUser(resp);
          this.toast.showSuccess(
            'Successfully created account. Redirecting you to the quizzes'
          );

          const attemptedRoute = this.ss.getItem('attemptedRoute');
          this.ss.removeItem('attemptedRoute');
          this.router.navigateByUrl(attemptedRoute || '/');
        },
        error: () => {
          this.toast.showDanger('There was a problem registering your account');
        },
      });
  }

  ngOnInit(): void {}
}
