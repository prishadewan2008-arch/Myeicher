import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from '../services/data';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';
import { AuthService } from '../services/auth';

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
  allMenuColumns: any[] = [];
  allowedFeatures: string[] = [];
  isAdmin: boolean = false;
  loggedInUserName = '';

  constructor(
    private router: Router,
    private menuService: DataService,
    private firestore: Firestore,
    private authService: AuthService
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
      this.selectUser('Prisha');
    });
    this.authService.userName$.subscribe(name => {
    this.loggedInUserName = name;
});
  }

  canShowSection(id: string): boolean {
    return this.allowedFeatures.includes(id);
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

  mysubscriptions() {
    this.showHelp = false;
    this.showOurServices = false;
    this.router.navigate(['/my-subscriptions']);
  }

  landingPage() {
    this.showHelp = false;
    this.showOurServices = false;
    this.router.navigate(['/landing-page']);
  }

  users = [
    'Prisha',
    'Priti',
    'Priyanka',
    'Aman',
    'Ankit',
    'Akhil',
    'Riya',
    'Rishika',
    'Ronak',
    'Rahul',
  ];

  filteredUsers: string[] = [];
  searchText = '';

  searchUsers() {
    if (this.searchText.trim() === '') {
      this.filteredUsers = [];
      return;
    }

    this.filteredUsers = this.users.filter((user) =>
      user.toLowerCase().startsWith(this.searchText.toLowerCase()),
    );
  }

  async selectUser(user: string) {
    this.searchText = user;
    // this.filteredUsers = [];
    // this.filteredUsers = this.users.filter((user) =>
    //   user.toLowerCase().startsWith(this.searchText.toLowerCase()),
    // );

    const usersRef = collection(this.firestore, 'users');

    const q = query(usersRef, where('name', '==', user));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      const userData = querySnapshot.docs[0].data();

console.log(userData);
      if (userData['isAdmin'] === true) {
        this.isAdmin = true;
        this.allowedFeatures = this.data.map((section) => section.id);
      } else {
        this.isAdmin = false;
        this.allowedFeatures = userData['features'];
      }
    } else {
      console.log('User not found');
      this.allowedFeatures = [];
    }

    this.filteredUsers = [];
  }
}
