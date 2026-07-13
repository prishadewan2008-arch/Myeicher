import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from '../services/data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  showOurServices = false;
  showHelp = false;
  data: any[] = [];
  menuColumns: any[][] = [];

  constructor(
    private router: Router,
    private menuService: DataService,
  ) {}

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data) => {
      this.data = data;
      this.menuColumns = [
        [this.data[0], this.data[1]],
        [this.data[2], this.data[3], this.data[4]],
        [this.data[5], this.data[6], this.data[7]],
        [this.data[8]],
      ];
    });
  }

  ourServices(): void {
    this.showOurServices = !this.showOurServices;
    if (this.showOurServices) {
      this.showHelp = false;
    }
  }

  help(): void {
    this.showHelp = !this.showHelp;
    if (this.showHelp) {
      this.showOurServices = false;
    }
  }

  onItemClick(itemName: string): void {
    if (itemName === 'My Alerts') {
      this.showOurServices = false;
      this.router.navigate(['/alerts']);
    }
  }

  mysubscriptions(){
    this.router.navigate(['/my-subscriptions']);
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

searchUsers() {

  if(this.searchText.trim() === "") {
    this.filteredUsers = [];
    return;
  }


  this.filteredUsers = this.users.filter(user =>
    user.name.toLowerCase()
    .includes(this.searchText.toLowerCase())
  );

}
}
