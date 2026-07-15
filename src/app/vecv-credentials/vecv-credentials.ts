import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth';
import { Firestore, collection, query, where, getDocs } from '@angular/fire/firestore';


@Component({
  selector: 'app-vecv-credentials',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './vecv-credentials.html',
  styleUrl: './vecv-credentials.css',
})
export class VecvCredentials {
  constructor (
    private router : Router,
    private authService: AuthService,
    private firestore: Firestore) {}
  goBack(): void{
    this.router.navigate(['/']);
  }

  userIdControl = new FormControl('',[
    Validators.required,
  ])

  passwordControl = new FormControl('', [
    Validators.required,
    Validators.pattern('^[A-Za-z0-9@$!%*?&]{6,}$')
  ])
  

  username = '';
  password = '';

 async onSignIn() {

  const q = query(
    collection(this.firestore, 'users'),
    where('Username', '==', this.username),
    where('role', '==', 'VECV')
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    alert("Vecv not found");
    return;
  }

  const VecvData = querySnapshot.docs[0].data();

  const email = VecvData['email'];

  this.authService.VecvLogin(email, this.password)
    .then(() => {
      console.log("Vecv Login Successful");
      this.router.navigate(['/landing-page']);
    })
    .catch(error => {
      console.log(error);
    });
}
}
