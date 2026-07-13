<<<<<<< HEAD
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './../services/data';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule, FormsModule],
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

users = [
  {
    name: "Prisha",
    email: "prisha@gmail.com",
    role: "Admin"
  },
  {
    name: "Aman",
    email: "aman@gmail.com",
    role: "Dealer"
  },
  {
    name: "Riya",
    email: "riya@gmail.com",
    role: "Customer"
  }
];

filteredUsers: any[] = [];
searchText = "";

searchUsers(){
  
  if(this.searchText.trim() === ""){
    this.filteredUsers = [];
    return;
  }

  this.filteredUsers = this.users.filter(user =>
     user.name.toLowerCase().
     includes(this.searchText.toLowerCase()));
}

  showAlerts(){
    this.router.navigate(['/alerts']);
  }

  
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage {}
>>>>>>> 0611b8e (increased the space between nav items)
