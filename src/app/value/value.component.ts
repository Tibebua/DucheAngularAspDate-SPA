import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues(){
    const url = 'http://localhost:5000/api/values';
    this.http.get(url).subscribe(result => {
      this.values = result;
      console.log(result);
    }, error => {
      console.log(error);
    })
  }

}
