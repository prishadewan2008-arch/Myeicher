import { CommonModule } from '@angular/common';
import { afterNextRender, Component, signal } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-dealer-credentials',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './dealer-credentials.html',
  styleUrl: './dealer-credentials.css',
})
export class DealerCredentials {

  currentIndex = signal(0);
  prevIndex = signal(0);

  images = [
    'assets/bg1.svg',
    'assets/bg2.svg',
    'assets/bg3.svg',
    'assets/bg4.svg',
    'assets/bg5.svg',
  ];

  private intervalId?: ReturnType<typeof setInterval>;

  constructor (
    private router : Router,
    private authService: AuthService,
    private firestore: Firestore) {
    afterNextRender(() => {
      this.intervalId = setInterval(() => this.nextSlide(), 3000);
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.prevIndex.set(this.currentIndex());
    this.currentIndex.update((index) => (index + 1) % this.images.length);
  }
  
  goBack(): void{
    // this.router.navigate(['/']);
    this.authService.logout()
    .then(() => {
      console.log("Logged out");

      // redirect to login page
      this.router.navigate(['/']);
    })
    .catch(err => {
      console.log(err.message);
    });
  }

  userIdControl = new FormControl('',[
    Validators.required,
  ])

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9@$!%*?&]{6,}$')
  ])

dealerId = '';
password = '';

async onDealerLogin() {

  const q = query(
    collection(this.firestore, 'users'),
    where('dealerId', '==', this.dealerId),
    where('role', '==', 'Dealer')
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    alert("Dealer ID not found");
    return;
  }

  const dealerData = querySnapshot.docs[0].data();

  const email = dealerData['email'];

  this.authService.dealerLogin(email, this.password)
    .then(() => {
      console.log("Dealer Login Successful");
      this.router.navigate(['/landing-page']);
    })
    .catch(error => {
      console.log(error);
    });
}
  
}
