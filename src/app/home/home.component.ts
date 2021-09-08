import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  companyTitle: string; 
  companySubtitle: string; 

  constructor() {
    this.companyTitle = "Alstom Healthcare Systems";
    this.companySubtitle = "Channel partner for Philips Respitronics";
   }

  ngOnInit(): void {
  }

}
