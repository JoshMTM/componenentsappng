import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: '# of users'},
    { value: 900, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ]; 

  items = [
    { image: '/assets/images/ikeacouch.jpg',
      title: 'Couch',
      description: 'This is a fantastic couch to sit on'
    },
    { image: '/assets/images/cupboard.jpg',
      title: 'Dresser',
      description: 'This is a great dresser to put stuff in'
    },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
