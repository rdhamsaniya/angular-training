import { Component, OnInit } from '@angular/core';
import { Source } from 'webpack-sources';
import { isNgContainer } from '@angular/compiler';

import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private auth : AuthService) { }

  listOfCountry = [
    { c_id: 'IN', name: 'India' },
    { c_id: 'AU', name: 'Australia' },
    { c_id: 'US', name: 'United States' },
    { c_id: 'UK', name: 'United Kingdom' }
  ];

  listOfStates = [{ c_id: 'IN', s_id: 'GJ', name: 'Gujarat' },
  { c_id: 'IN', s_id: 'RJ', name: 'Rajasthan' },
  { c_id: 'AU', s_id: 'SY', name: 'Sydney' },
  { c_id: 'AU', s_id: 'MB', name: 'Melbourne' },
  { c_id: 'US', s_id: 'CF', name: 'California' },
  { c_id: 'US', s_id: 'MI', name: 'Miami' },
  { c_id: 'UK', s_id: 'LN', name: 'London' },
  { c_id: 'UK', s_id: 'OL', name: 'Oval' }
  ];

  listOfCity = [
    { c_id: 'IN', s_id: 'GJ', t_id: 'RJ', name: 'Rajkot' },
    { c_id: 'IN', s_id: 'GJ', t_id: 'AH', name: 'Ahmedabad' },
    { c_id: 'AU', s_id: 'SY', t_id: 'ED', name: 'Edilad' },
    { c_id: 'AU', s_id: 'MB', t_id: 'CB', name: 'Canbara' },
    { c_id: 'US', s_id: 'CF', t_id: 'LA', name: 'LosA' },
    { c_id: 'US', s_id: 'MI', t_id: 'MM', name: 'Mimi' },
    { c_id: 'UK', s_id: 'LN', t_id: 'OT', name: 'Old Treford' },
    { c_id: 'UK', s_id: 'OL', t_id: 'EG', name: 'Egg' }
  ]

  listOfLandmarks = [
    { c_id: 'IN', s_id: 'GJ', t_id: 'RJ', l_id: 'ML', name: 'Mahal', image: 'assets/img/rajasthan.jpg' },
    { c_id: 'IN', s_id: 'GJ', t_id: 'RJ', l_id: 'HW', name: 'Hawa', image: 'assets/img/rajasthan.jpg' },
    { c_id: 'AU', s_id: 'SY', t_id: 'ED', l_id: 'OP', name: 'Opera', image: 'assets/img/sydney.jpg' },
    { c_id: 'AU', s_id: 'MB', t_id: 'CB', l_id: 'JT', name: 'Jetty', image: 'assets/img/melbourne.jpg' },
    { c_id: 'US', s_id: 'CF', t_id: 'LA', l_id: 'FL', name: 'Flow', image: 'assets/img/california.jpg' },
    { c_id: 'US', s_id: 'MI', t_id: 'MM', l_id: 'BH', name: 'Beach', image: 'assets/img/miami.jpg' },
    { c_id: 'UK', s_id: 'LN', t_id: 'OT', l_id: 'I', name: 'Eye', image: 'assets/img/london.jpg' },
    { c_id: 'UK', s_id: 'OL', t_id: 'EG', l_id: 'E', name: 'Egg', image: 'assets/img/oval.jpg' }
  ]

  selectedListOfStates = [
    { c_id: 'IN', s_id: 'GJ', name: 'Gujarat' },
    { c_id: 'IN', s_id: 'RJ', name: 'Rajasthan' },
  ];
  selectedListOfCity = [
    { c_id: 'IN', s_id: 'GJ', t_id: 'RJ', name: 'Rajkot'},
    { c_id: 'IN', s_id: 'GJ', t_id: 'AH', name: 'Ahmedabad' }
  ];
  selectedListOfLandmark = [
    { c_id: 'IN', s_id: 'GJ', t_id: 'RJ', l_id: 'ML', name: 'Mahal', image: 'assets/img/rajasthan.jpg' },
    { c_id: 'IN', s_id: 'GJ', t_id: 'RJ', l_id: 'HW', name: 'Hawa', image: 'assets/img/rajasthan.jpg' }
  ]
  selectedCountry;
  selectedState;
  selectedCity;
  selectedLandmark;

  selectedIndex = 0;
  err: boolean = false;
  
  ngOnInit() {
    if(!this.auth.isLoggednIn())
    {
      this.router.navigate(["login"]);
    }
    this.selectedCountry = this.listOfCountry[0].name;
    this.selectedState = this.selectedListOfStates[0].name;
    this.selectedCity = this.selectedListOfCity[0].name;
    this.selectedLandmark = this.selectedListOfLandmark[0].name;
  }

  selectCountry(index: number, id: string, name: string) {
    console.log(index);
    this.selectedCountry = name;
    this.selectedListOfStates = [];
    this.selectedListOfStates = this.listOfStates.filter(item => item.c_id === id);

    if (this.selectedListOfStates.length > 0) {
      this.err = false;
      this.selectedState = this.selectedListOfStates[0].name;
      this.selectedIndex = 0;

      this.selectState(0,this.selectedListOfStates[0].s_id,this.selectedState);
    }
    else {
      this.selectedState = "Select state";
      this.selectedCity = "Select state";
      this.err = true;
    }

  }

  selectState(index: number, stateId: string, name: string) {
    this.selectedState = name;
    // this.selectedIndex = index;
    // console.log(this.selectedIndex);
    this.selectedListOfCity = [];
    this.selectedListOfCity = this.listOfCity.filter(item => item.s_id === stateId);
    if (this.selectedListOfCity.length > 0) {
      this.err = false;
      this.selectedCity = this.selectedListOfCity[0].name;
      this.selectedIndex = 0;

      this.selectCity(0,this.selectedListOfCity[0].t_id,this.selectedCity);
    }
    else {
      this.selectedCity = "Select City";
      this.err = true;
    }
  }

  selectCity(index: number, cityId: string, name: string) {

    this.selectedCity = name;
    console.log(cityId);

    this.selectedListOfLandmark = [];
    this.selectedListOfLandmark = this.listOfLandmarks.filter(item => item.t_id === cityId);
    console.log(this.selectedListOfLandmark);
    if (this.selectedListOfLandmark.length > 0) {
      this.err = false;
      this.selectedLandmark = this.selectedListOfLandmark[0].name;
      this.selectedIndex = 0;
    }
    else {
      this.selectedLandmark = "Select Landmark";
      this.err = true;
    }
  }

  selectLandmark(index: number, name: string) {
    this.selectedLandmark = name;
  }

  setIndex(index: number) {
    console.log(index);
    this.selectedIndex = index;
    // this.selectedState = this.selectedListOfStates[this.selectedIndex].name;
    this.selectedCity = this.selectedListOfCity[this.selectedIndex].name;
  }
  slide(index: number): number {
    console.log(index);

    return 1;
  }

  // prevImage() {
  //   console.log("prev-index=" + this.selectedIndex);
  //   if (this.selectedIndex == 0) {
  //     this.selectedIndex = this.selectedListOfStates.length - 1;
  //   }
  //   else {
  //     this.selectedIndex = this.selectedIndex - 1;
  //   }
  //   this.selectedState = this.selectedListOfStates[this.selectedIndex].name;
  //   console.log("prev-index=" + this.selectedIndex);

  // }

  // nextImage() {
  //   console.log("prev-index=" + this.selectedIndex);

  //   if (this.selectedIndex == this.selectedListOfStates.length - 1) {
  //     this.selectedIndex = 0;
  //   }
  //   else {
  //     this.selectedIndex = this.selectedIndex + 1;
  //   }
  //   this.selectedState = this.selectedListOfStates[this.selectedIndex].name;

  //   console.log("prev-index=" + this.selectedIndex);

  // }
}
