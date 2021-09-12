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

  customerName: string;
  customerEmail: string;
  emailSubject: string;
  emailMessage: string;

  constructor() {
    this.ownerName = 'Mr. Ravi Kumar Murugani';
    this.emailOne = 'ravialstom@gmail.com';
    this.emailTwo = 'alstomhealthcare@gmail.com';

    this.customerName = '';
    this.customerEmail = '';
    this.emailSubject = '';
    this.emailMessage = '';
   }

   onSubmit() {
     if(this.customerName == '' || this.customerName == '' || this.emailSubject == '' || this.emailMessage == '')
     {
        alert('Please enter all the fields and Submit!');
     }
     else
      alert("Thanks for your feedback; our team wil get back to you soon!")
   }

  ngOnInit(): void {
  }

}
