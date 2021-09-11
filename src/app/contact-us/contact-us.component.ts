import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  styleUrls: ['./contact-us.component.css'],
  templateUrl: './contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
  ownerName: string;
  emailOne: string;
  emailTwo: string;

  constructor() {
    this.ownerName = 'Mr. Ravi Kumar Murugani';
    this.emailOne = 'ravialstom@gmail.com';
    this.emailTwo = 'alstomhealthcare@gmail.com';
   }

  ngOnInit(): void {
  }

}
