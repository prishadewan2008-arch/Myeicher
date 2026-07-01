import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-login-page',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
  // providers: [NgbCarouselConfig]
})
export class LoginPage {
  selectedRole = 'Customer';

  onChange(event: string): void {
    this.selectedRole = event;
    console.log(event);
  }

  images = [
    'assets/bg1.svg',
    'assets/bg2.svg'
  ]

  currentIndex = 0;

  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(()=>{
      this.next();
    }, 3000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  next() { 
    debugger;
    this.currentIndex =
      (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    debugger;
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) %
      this.images.length;
  }


  // next() {
  //   this.currentIndex++;
  //   if(this.currentIndex >= this.images.length){
  //     this.currentIndex = 0;
  //   }
  // }

  // prev(){
  //   this.currentIndex--;
  //   if(this.currentIndex < 0){
  //     this.currentIndex = this.images.length - 1;
  //   }
  // }

}
