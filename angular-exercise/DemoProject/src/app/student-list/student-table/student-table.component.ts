import { Component, OnInit } from '@angular/core';
// import {AuthService} from '../../auth.service';
// import {Router} from '@angular/router';
import { StudentHttpService } from '../student-http.service';
import { Subscription } from 'rxjs';
import { Student } from '../student';
import { FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';



@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {


  students: Student[];
  selected: Student;

  upForm: FormGroup;
  selectedId: number;
  selectDeleteName: string;
  updateId: number;
  subsription: Subscription;
  id: string = 'name'; //set default
  reverse: boolean = false;
  fullLoaded: boolean = false;
  updateDOBDefault: Date;
  sort(id) {
    this.id = id;
    this.reverse = !this.reverse;
  }
  p: number = 1;

  constructor(public datepipe: DatePipe, private fb: FormBuilder, private listService: StudentHttpService, private router: Router, private auth: AuthService) { }
  // , private toastr: ToastrManager
  ngOnInit() {
    if (!this.auth.isLoggednIn()) {
      this.router.navigate(["login"]);
    }
    console.log('Hey from here');
    this.upForm = this.fb.group({
      name: ["", Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]{2}[a-zA-Z ]{0,16}[a-zA-Z]{2}$')
      ])],
      dob: ["", Validators.compose([
        Validators.required,
        validateDOB
      ])],
      city: ["", Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z]{2,20}$')
      ])],
      mobile: ["", Validators.compose([
        Validators.required,
        Validators.pattern('[6789][0-9]{9}')
      ])]
    })
    this.getstudents();
  }

  updateForm(id: number) {

    console.log(id);
    let index = this.listService.getStudentById(id).subscribe(student => {
      console.log(student);

      this.upForm = this.fb.group({
        name: [student.name, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]{2}[a-zA-Z ]{0,16}[a-zA-Z]{2}$')
        ])],
        dob: [student.dob],
        city: [student.city, Validators.compose([
          Validators.required,
          Validators.pattern('^[a-zA-Z]{2,20}$')
        ])],
        mobile: [student.mobile, Validators.compose([
          Validators.required,
          Validators.pattern('[6789][0-9]{9}')
        ])]
      })
    });
    
  }

  getstudents(): void {
    this.subsription = this.listService.getStudents()
      .subscribe(students => {
        this.students = students
        return students;
      });
  }
  setDeleteIndex(ind: number, name: string) {

    this.selectedId = ind;
    this.selectDeleteName = name;
    this.delete(ind);
  }

  delete(ind: number) {

    this.listService.deleteStudent(ind).subscribe(std => {
      this.selectedId = null;
      let index = this.students.findIndex(item => item.id === ind);
      this.students.splice(index, 1);
    });
  }

  cancel() {
    this.selectedId = -1;
    this.updateId = null;
  }

  getIndex(id: number): number {
    return this.students.findIndex(item => item.id == id);
  }
  update(uname: string, umobile: string, udob: string, ucity: string, index: number, id: number) {
    
    console.log(index);
    const itemIndex = this.getIndex(id);
    if (this.updateId == id) {
      console.log('true');
      this.updateId = undefined;
      this.listService.getStudentById(id)
        .subscribe(std => {
          
          std.name = uname;
          std.dob= udob;
          std.city = ucity;
          // console.log("id" + id + uname + umobile + udob + ucity + id);
          this.listService.update(std).subscribe(std=>{});
        });
      this.save(id);
    }
    else {
      console.log('false' + udob);
      this.updateId = id;
      console.log(this.updateDOBDefault);
      this.updateDOBDefault = this.convertDate(udob);
      console.log(this.updateDOBDefault);


      this.updateForm(id);
    }
  }

  save(id: number) {
    console.log('here');

  }

  convertDate(date: string): Date {
    const str = date.split('-');

    const year = Number(str[2]);
    const month = Number(str[1]) - 1;
    const dateOfMonth = Number(str[0]);
    return new Date(year, month, dateOfMonth);
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }


}
export function validateDOB(control: AbstractControl): ValidationErrors | null {

  let currentDateTime = new Date();
  let oldDateTime = new Date(currentDateTime.getFullYear() - 100, currentDateTime.getMonth(), currentDateTime.getDate());
  let newDateTime = new Date(currentDateTime.getFullYear() - 10, currentDateTime.getMonth(), currentDateTime.getDate());
  oldDateTime.setHours(0, 0, 0, 0);
  newDateTime.setHours(0, 0, 0, 0);
  currentDateTime.setHours(0, 0, 0, 0);
  // console.log(currentDateTime);
  let controlValue = new Date(control.value);
  controlValue.setHours(0, 0, 0, 0);

  console.log(currentDateTime + '-' + controlValue)

  return null;

}
