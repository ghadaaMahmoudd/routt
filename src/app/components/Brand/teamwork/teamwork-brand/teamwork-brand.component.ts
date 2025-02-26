import { Component } from '@angular/core';

@Component({
  selector: 'app-teamwork-brand',
  templateUrl: './teamwork-brand.component.html',
  styleUrls: ['./teamwork-brand.component.css']
})
export class TeamworkBrandComponent {
  teamMembers = [
    { name: '', email: '', role: '', status: '', created: '' },
    { name: '', email: '', role: '', status: '', created: '' },
    { name: '', email: '', role: '', status: '', created: '' },
  ];

  showSuccessMessage: boolean | undefined;

  showDeleteModal = false;
  memberToDelete: any = null;

  confirmDelete(member: any) {
    this.memberToDelete = member;
    this.showDeleteModal = true;
    document.body.classList.add('modal-open');
  }
  
  cancelDelete() {
    this.showDeleteModal = false;
    document.body.classList.remove('modal-open');
  }
  
  deletemember() {
    if (this.memberToDelete) {
      this.teamMembers = this.teamMembers.filter(member => member !== this.memberToDelete);
      this.memberToDelete = null;
      this.showDeleteModal = false;
      this.showSuccessMessage = true;
      document.body.classList.remove('modal-open');
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 2000);
    }
  }
  

}
