import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Eng/ Basma',
      role: 'UI/UX Designer',
      image: 'assets/Rectangle 2471.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin', link: '#' }
      ]
    },
    {
      name: 'Eng/ Rawan',
      role: 'Frontend Developer',
      image: 'assets/Rectangle 2471.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin', link: '#' }
      ]
    },
    {
      name: 'Eng/ Ghada',
      role: 'Frontend Developer',
      image: 'assets/Rectangle 2471.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin', link: '#' }
      ]
    },
    {
      name: 'Eng/ Mohamed',
      role: 'Backend Developer',
      image: 'assets/Rectangle 2471.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin', link: '#' }
      ]
    },
    {
      name: 'Eng/ Ahmed',
      role: 'Backend Developer',
      image: 'assets/Rectangle 2471.png',
      socials: [
        { iconClass: 'fab fa-facebook', link: '#' },
        { iconClass: 'fab fa-instagram', link: '#' },
        { iconClass: 'fab fa-linkedin', link: '#' }
      ]
    }
  ];
  

}
