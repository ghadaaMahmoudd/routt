// import { Component } from '@angular/core';
//  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//  import { AuthService } from 'src/app/services/auth.service';

//  @Component({
//   selector: 'loginadmin',
//    templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.css']
// })
// export class LoginAdminComponent {
//   registrationForm: FormGroup;
//   loginError: boolean = false;
//   loginErrorMessage: string = '';

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.registrationForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;

//       this.authService.loginAdmin(formData).subscribe({
//         next: (response: any) => {
//           this.loginError = false;
//           console.log('Login successful!', response);
//         },
//         error: (error) => {
//           this.loginError = true;
//           this.loginErrorMessage =
//             error.error?.message || 'Login failed. Please try again.';
//           console.error('Login failed:', error);
//         },
//       });
//     } else {
//       this.loginError = true;
//       this.loginErrorMessage =
//         'Form is invalid. Please check the fields.';
//       console.log('Form is invalid.');
//     }
//   }

//   closeError() {
//     this.loginError = false;
//   }
// }



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'loginadmin',
//   templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.css'],
// })
// export class LoginAdminComponent {
//   registrationForm: FormGroup;
//   loginError: boolean = false;
//   loginErrorMessage: string = '';

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.registrationForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]], // Ensure email format
//       password: ['', [Validators.required, Validators.minLength(6)]], // At least 6 characters
//     });
//   }

  // onSubmit() {
  //   if (this.registrationForm.valid) {
  //     const formData = this.registrationForm.value;

  //     this.authService.loginAdmin(formData).subscribe({
  //       next: (response: any) => {
  //         this.loginError = false;
  //         console.log('Login successful!', response);
  //       },
  //       error: (error) => {
  //         this.loginError = true;
  //         this.loginErrorMessage =
  //           error.error?.message || 'Login failed. Please try again.';
  //         console.error('Login failed:', error);
  //       },
  //     });
  //   } else {
  //     this.loginError = true;
  //     this.loginErrorMessage =
  //       'Form is invalid. Please check the fields.';
  //     console.log('Form is invalid.');
  //   }
  // }

  // closeError() {
  //   this.loginError = false;
  // }


//   onSubmit() {
//   if (this.registrationForm.valid) {
//     const formData = this.registrationForm.value;

//
//     console.log('Payload being sent:', formData);

//     this.authService.loginAdmin(formData).subscribe({
//       next: (response: any) => {
//         this.loginError = false;
//         console.log('Login successful!', response);
//       },
//       error: (error) => {
//         this.loginError = true;
//         this.loginErrorMessage =
//           error.error?.message || 'Login failed. Please try again.';
//         console.error('Login failed:', error);
//       },
//     });
//   } else {
//     this.loginError = true;
//     this.loginErrorMessage = 'Form is invalid. Please check the fields.';
//     console.log('Form is invalid.');
//   }
// }
// closeError() {
//     this.loginError = false;
//    }
// }




// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'loginadmin',
//   templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.css'],
// })
// export class LoginAdminComponent {
//   registrationForm: FormGroup;
//   loginError: boolean = false;
//   loginErrorMessage: string = '';

//   constructor(private fb: FormBuilder, private authService: AuthService) {
//     this.registrationForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;

//       // Log payload for debugging
//       console.log('Payload being sent:', formData);

//       this.authService.loginAdmin(formData).subscribe({
//         next: (response: any) => {
//           this.loginError = false;
//           console.log('Login successful!', response);
//         },
//         error: (error) => {
//           this.loginError = true;
//           this.loginErrorMessage =
//             error.error?.message || 'Login failed. Please try again.';
//           console.error('Login failed:', error);
//         },
//       });
//     } else {
//       this.loginError = true;
//       this.loginErrorMessage = 'Form is invalid. Please check the fields.';
//       console.error('Form is invalid.');
//     }
//   }

//   closeError() {
//     this.loginError = false;
//   }
// }




//



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router'; // استيراد Router للتنقل

// @Component({
//   selector: 'loginadmin',
//   templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.css'],
// })
// export class LoginAdminComponent {
//   registrationForm: FormGroup;
//   loginError: boolean = false;
//   loginErrorMessage: string = '';

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.registrationForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;

//       this.authService.loginAdmin(formData).subscribe({
//         next: (response: any) => {
//           this.loginError = false;
//           console.log('Login successful!', response);

//           // التنقل إلى صفحة "trying"
//           this.router.navigate(['/app-dashboard']);
//         },
//         error: (error) => {
//           this.loginError = true;
//           this.loginErrorMessage =
//             error.error?.message || 'Login failed. Please try again.';
//           console.error('Login failed:', error);
//         },
//       });
//     } else {
//       this.loginError = true;
//       this.loginErrorMessage =
//         'Form is invalid. Please check the fields.';
//       console.error('Form is invalid.');
//     }
//   }

//   closeError() {
//     this.loginError = false;
//   }
// }






// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from 'src/app/services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'loginadmin',
//   templateUrl: './login-admin.component.html',
//   styleUrls: ['./login-admin.component.css'],
// })
// export class LoginAdminComponent {
//   registrationForm: FormGroup;
//   loginError: boolean = false;
//   loginErrorMessage: string = '';

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.registrationForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;

//       this.authService.loginAdmin(formData).subscribe({
//         next: (response: any) => {
//           this.loginError = false;
//           console.log('Login successful!', response);
//           this.router.navigate(['/app-dashboard']);
//         },
//         error: (error) => {
//           this.loginError = true;
//           this.loginErrorMessage =
//             error.error?.message || 'Login failed. Please try again.';
//           console.error('Login failed:', error);
//         },
//       });



// this.authService.loginAdmin(formData).subscribe({
//   next: (response: any) => {
//     this.loginError = false;
//     console.log('Login successful!', response);
//     this.router.navigate(['/app-dashboard']);
//   },
//   error: (error) => {
//     this.loginError = true;
//     this.loginErrorMessage =
//       error.error?.message || 'Login failed. Please try again.';
//     console.error('Login failed:', error);
//   },
// });




//     } else {
//       this.loginError = true;
//       this.loginErrorMessage = 'Form is invalid. Please check the fields.';
//       console.error('Form is invalid.');
//     }
//   }

//   closeError() {
//     this.loginError = false;
//   }
// }






import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AdminComponent } from '../admin/admin/admin.component';

@Component({
  selector: 'loginadmin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
  registrationForm: FormGroup;
  loginError: boolean = false;
  loginErrorMessage: string = '';
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      this.loginError = true;
      this.loginErrorMessage = 'Form is invalid. Please check the fields.';
      return;
    }

    this.loading = true;
    const formData = this.registrationForm.value;
    // formData.Role="admin";

    this.authService.loginAdmin(formData).subscribe({
      next: (response: any) => {
        this.loginError = false;
        this.loading = false;
        console.log('✅ Login successful!', response);

        localStorage.setItem('token', response.token); // حفظ التوكن إن وُجد
        this.router.navigate(['/admin']);
      },
      error: (error) => {
        this.loading = false;
        this.loginError = true;
        this.loginErrorMessage =
          error.error?.message || '❌ Login failed. Please try again.';
        console.error('Login failed:', error);
      },
    });
  }

  closeError() {
    this.loginError = false;
  }
}
