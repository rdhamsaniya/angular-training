import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-heroes-accordian',
  templateUrl: './heroes-accordian.component.html',
  styleUrls: ['./heroes-accordian.component.css']
})



export class HeroesAccordianComponent implements OnInit {

  constructor(private router:Router,private auth : AuthService) { }

  ngOnInit() {
    if(!this.auth.isLoggednIn())
    {
      this.router.navigate(["login"]);
    }
  }

}
