import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from 'src/app/validators/must-match.validator';
import { SearchService } from 'src/app/register/country-auto-suggestion/search.service'

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    constructor() { 
      
    }
}

