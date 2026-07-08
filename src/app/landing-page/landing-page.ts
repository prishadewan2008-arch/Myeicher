import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './../services/data';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit {

  private dataService = inject(DataService);

  ngOnInit() {
    // 2. Call the method and subscribe to the data stream
    this.dataService.getPosts().subscribe({
      next: (data) => {
        // 3. Print the data to the console
        console.log('Received posts data:', data);
      },
      error: (error) => {
        console.error('Something went wrong:', error);
      }
    });
  }
  showOurServices = false;
  showHelp = false;
  ourServices(){
    this.showOurServices = !this.showOurServices;
  }

  help(){
    this.showHelp = !this.showHelp;
  }
}
