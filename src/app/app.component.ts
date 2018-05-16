import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title: string = 'Vietnam';
  countDownDate: number = new Date("Sep 8, 2018 12:30:00").getTime();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  expired: boolean = false;

  ngOnInit(){
    setInterval(() => {this.dateCountdown()}, 1000)
  }
 
  dateCountdown(): void {
      // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = this.countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // If the count down is finished, write some text 
    if (distance < 0) this.expired = true;
 
    }
}
