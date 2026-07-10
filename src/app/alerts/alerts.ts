import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data';

@Component({
  selector: 'app-alerts',
  imports: [],
  templateUrl: './alerts.html',
  styleUrl: './alerts.css',
})
export class Alerts implements OnInit {

  data: any[] = [];

  constructor(
    private router: Router,
    private menuService: DataService){}

  ngOnInit(){
    console.log("hello");
    this.menuService.getMenu().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

}
