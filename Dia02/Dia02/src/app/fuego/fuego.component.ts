import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuego',
  templateUrl: './fuego.component.html',
  styleUrls: ['./fuego.component.css']
})
export class FuegoComponent implements OnInit {
  objects = {
    data: [
      {
        "name": "John",
        "age": 30,
        "car": "Ford",
        "id":1
      },
      {
        "name": "Andre",
        "age": 23,
        "car": "VW",
        "id":2
      },
      {
        "name": "Lisa",
        "age": 34,
        "car": "Ford",
        "id":3
      },
      {
        "name": "Adrian",
        "age": 10,
        "car": "BMW",
        "id":4
      }
    ]
  }

  constructor() { }

  index(i:number)
  {
    console.log(this.objects.data[i].id);
  }

  ngOnInit() {
  }

}
