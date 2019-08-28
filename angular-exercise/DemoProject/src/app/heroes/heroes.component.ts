import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero = 'Windstorm';
  num= 21.2456;
  created = moment('2016-01-01T23:35:01');
  constructor(private router:Router,private auth : AuthService) {
    console.log('heros-loaded');
   }

  ngOnInit() {
    if(!this.auth.isLoggednIn())
    {
      this.router.navigate(["login"]);
    }
  }

}
