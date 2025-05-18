import { Component } from '@angular/core';
declare var bootstrap: any;


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
    standalone:true,imports:[],
})
export class SettingComponent {
  saveChanges(): void {

    const modalElement = document.getElementById('successModal');
    const modal = new bootstrap.Modal(modalElement!);
    modal.show();


    setTimeout(() => {
      modal.hide();
    }, 5000);
  }
}
