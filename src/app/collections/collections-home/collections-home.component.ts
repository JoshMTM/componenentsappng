import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

data = [
  { name: 'James', job: 'Designer', age: 24, employed: true }, 
  { name: 'Jill', job: 'Engineer', age: 26, employed: false  },
  { name: 'Elyse', job: 'Enginner', age: 25, employed: true  }
];

headers = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'job', label: 'Job' },
  { key: 'employed', label: 'Has a Job?'}
];

  constructor() { }

  ngOnInit(): void {
  }

}
