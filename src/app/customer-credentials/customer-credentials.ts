import { afterNextRender, Component, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-customer-credentials',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './customer-credentials.html',
  styleUrl: './customer-credentials.css',
})
export class CustomerCredentials implements OnDestroy {

  mobileNumber='';
  username='';
  password='';
  errorMessage='';

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

  constructor(
    private router : Router,
    private authService: AuthService,
    private firestore: Firestore) {
    afterNextRender(() => {
      const mobile = history.state?.['mobile'] as string | undefined;
      if(!mobile){
        this.router.navigate(['/']);
        return;
      }

      this.mobileNumber = mobile;
      this.intervalId = setInterval(() => this.nextSlide(), 3000);
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.prevIndex.set(this.currentIndex())
    this.currentIndex.update((index) => (index + 1) % this.images.length);
  }

  // onLogin(): void {
  //   if(!this.username.trim() || !this.password.trim()) {
  //     this.errorMessage = 'Please enter your username and password';
  //     return;
  //   }

  //   this.errorMessage='';
  //   console.log('Customer login', {
  //     mobile: this.mobileNumber,
  //     username: this.username,
  //   });

  //   this.router.navigate(['/landing-page']);
  // }


  async onLogin() {

  const q = query(
    collection(this.firestore, 'users'),
    where('Username', '==', this.username),
    where('role', '==', 'Customer')
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    alert("Customer not found");
    return;
  }

  const customerData = querySnapshot.docs[0].data();

  const email = customerData['email'];

  this.authService.customerLogin(email, this.password)
    .then(() => {
      console.log("Customer Login Successful");
      this.authService.setUserName(customerData['name']);
      this.router.navigate(['/landing-page']);
    })
    .catch(error => {
      console.log(error);
    });
}

  goBack(): void {
    this.router.navigate(['/']);
  }

  userIdControl = new FormControl('',[
    Validators.required,
  ])

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9@$!%*?&]{6,}$')
  ])
}
