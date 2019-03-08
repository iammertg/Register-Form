import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { MustMatch } from "../validators/must-match.validator";
import { Router, ActivatedRoute } from "@angular/router";
import { SearchService } from "./country-auto-suggestion/search.service";
import { Countries } from './testmodel';


// const tempList =  [
//     { name: "Mert", no: 1},
//     { name: "Mert2", no: 2},
//     { name: "Mert3", no: 3},
// ]

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  @ViewChild("countryTextbox") countryTextBox: ElementRef;

  //country: string;
  //results: any[] = [];
  countryInfo:Countries[];

  showCountryList: boolean = false;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        confirmEmail: ["", [Validators.required]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", Validators.required],
        country: [""]
      },
      {
        validator: MustMatch("email", "confirmEmail")
      }
    );

    this.registerForm.get('country').valueChanges.subscribe(val => {
        
        
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return console.log("Form is invalid!");
    } else {
      this.router.navigate(["success"], { relativeTo: this.route });
    }
  }

  onResultClick() {
    //Set input value
    
    // this.showCountryList = false;
    // this.results = [];
    this.showCountryList = true;
    this.searchService.getCountry().subscribe((res: any[]) => {
      this.countryInfo = res;
    })
  
}
}
