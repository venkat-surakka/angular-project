import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-oxygen',
  templateUrl: './oxygen.component.html',
  styleUrls: ['../../../src/styles.css'],
})
export class OxygenComponent implements OnInit {
  url: string = 'http://192.168.20.10:88/api/OxygenCylinders';
  // url: string = 'https://reqres.in/api/users';
  items : any;

  constructor(private http: HttpClient ) {
    this.http.get<any>(this.url).subscribe(res => {
      console.log(res.data);

      this.items = res.data;
    })
  }

  ngOnInit(): void {
  }

}
