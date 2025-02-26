import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-teamwork-add',
  templateUrl: './teamwork-add.component.html',
  styleUrls: ['./teamwork-add.component.css']
})
export class TeamworkAddComponent {
  newMember = { name: '', email: '', role: '' };
  roles: string[] = [
    'Manager',
    'Sales Representative',
    'Customer Support',
    'Content Creator',
    'Marketing Specialist',
    'Moderator'
  ];
  

  constructor(private router: Router) {}

  onSubmit() {
    if (this.newMember.name && this.newMember.email && this.newMember.role) {
      console.log('New Member:', this.newMember);
      alert('Member added successfully!');
      this.router.navigate(['/teamwork-brand']);
    } else {
      alert('Please fill in all required fields.');
    }
  }

  cancel() {
    this.router.navigate(['/teamwork-brand']); 
  }

}
