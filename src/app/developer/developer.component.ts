import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  count:number = 1;
  constructor() {
    setInterval(()=>{
      this.count++;
    }, 1000)
   }
   
  ngOnInit() {
  }

}