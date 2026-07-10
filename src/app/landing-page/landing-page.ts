import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './../services/data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {

  // private dataService = inject(DataService);

  // ngOnInit() {
  //   // 2. Call the method and subscribe to the data stream
  //   this.dataService.getPosts().subscribe({
  //     next: (data) => {
  //       // 3. Print the data to the console
  //       console.log('Received posts data:', data);
  //     },
  //     error: (error) => {
  //       console.error('Something went wrong:', error);
  //     }
  //   });
  // }
  showOurServices = false;
  showHelp = false;
  ourServices(){
    this.showOurServices = !this.showOurServices;
  }

  help(){
    this.showHelp = !this.showHelp;
  }

  data: any[] = [];
  menuColumns: any[][] = [];


  constructor(
    private router: Router,
    private menuService: DataService){}

  ngOnInit(){

  this.menuService.getMenu().subscribe(data => {

    this.data = data;

    this.menuColumns = [
      [this.data[0], this.data[1]],
      [this.data[2], this.data[3], this.data[4]],
      [this.data[5], this.data[6], this.data[7]],
      [this.data[8]]
    ];

    console.log(this.menuColumns);
  });

}

  showAlerts(){
    this.router.navigate(['/alerts']);
  }

  
}
