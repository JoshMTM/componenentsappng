import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue', content: 'This is why the sky is blue'
    },
    { title: 'How big is the red sea', content: 'Why do you want to know how big is the red sea'},
    {title: 'what does an orange taste like', content: 'nobody has ever tasted an orange so to know that is actually mission impossible'}
  ]
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
