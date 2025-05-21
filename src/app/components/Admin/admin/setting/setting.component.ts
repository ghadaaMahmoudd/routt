// import { Component } from '@angular/core';
// declare var bootstrap: any;


// @Component({
//   selector: 'app-setting',
//   templateUrl: './setting.component.html',
//   styleUrls: ['./setting.component.css'],

// })
// export class SettingComponent {
//   saveChanges(): void {

//     const modalElement = document.getElementById('successModal');
//     const modal = new bootstrap.Modal(modalElement!);
//     modal.show();


//     setTimeout(() => {
//       modal.hide();
//     }, 5000);
//   }
// }




import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

declare var bootstrap: any;

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  user: any = {}; // بيانات الأدمن من الـ API
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser(): void {
    this.accountService.getCurrentUser().subscribe({
      next: (data: any) => {
        this.user = data;
          console.log(data);
      },
      error: (err: any) => {
        console.error('Error fetching current user:', err);
      }
    });
  }

  saveChanges(): void {
    // هنا يمكنك إرسال البيانات المعدّلة للـ API إذا رغبت
    const modalElement = document.getElementById('successModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();
    setTimeout(() => {
      modal.hide();
    }, 3000);
  }
}