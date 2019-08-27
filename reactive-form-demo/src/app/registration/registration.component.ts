import { Component, OnInit } from '@angular/core';
import { PasswordValidatorService } from "./password-validator.service";

import { FormArray, FormControl, FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    mobileNo: new FormControl('')
  });

  change: any;
  staticJsonData: any;
  newControllers: any;
  show: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private passwordValidatorService: PasswordValidatorService) {
    this.profileForm = this.formBuilder.group({
      firstName: ['',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          this.passwordValidatorService.passwordValidators()
          
        ]
      ],
      mobileNo: ['',
        [
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ]
    });
  }

  ngOnInit() {

    this.profileForm.get('firstName').valueChanges.subscribe(change => {
      // this.profileForm.get('fullName').setValue();
    });


    this.profileForm.valueChanges.subscribe(change => {
      this.change = change;
      // console.log(this.profileForm.get('firstName').errors);
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.show = true;
    if (this.profileForm.valid) {
      console.log('Inside save method');

      this.profileForm.setValue(this.profileForm.value);

      console.log(this.profileForm.value);
    } else {
      console.log('Invalid form');
    }
    // console.warn(this.profileForm.value);
  }

}
