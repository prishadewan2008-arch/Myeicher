import { Component } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-vecv-credentials',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './vecv-credentials.html',
  styleUrl: './vecv-credentials.css',
})
export class VecvCredentials {
  constructor (private router : Router) {}
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
  
  onSignIn(){
    this.router.navigate(['/landing-page']);
  }
}
