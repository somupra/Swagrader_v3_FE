import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    private registerResponse={
        username: '',
        email: '',
        password1: '',
        password2: ''
    };
    loading = false;
    submitted = false;
    registerForm: FormGroup;
    registerLoading = false;
    registerSubmitted = false;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private zone: NgZone,
        ) {
            // override the route reuse strategy
            this.router.routeReuseStrategy.shouldReuseRoute = function(){
               return false;
            }
       
            this.router.events.subscribe((evt) => {
               if (evt instanceof NavigationEnd) {
                  // trick the Router into believing it's last link wasn't previously loaded
                  this.router.navigated = false;
                  // if you need to scroll back to top, here is the right place
               }
           });
       
       }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        //this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.registerForm = this.formBuilder.group({
            
            username: ['', Validators.required],
            email: ['', Validators.required],
            password1: ['', [Validators.required, Validators.minLength(8)]],
            password2: ['', [Validators.required, Validators.minLength(8)]],

        });

        
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    get f1() { return this.registerForm.controls;}
    

    onLogin() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        console.log(this.f.username.value);
        console.log(this.f.password.value);
    }
    onRegister() {
        this.registerSubmitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.registerResponse.username = this.f1.username.value;
        this.registerResponse.email = this.f1.email.value;
        this.registerResponse.password1 = this.f1.password1.value;
        this.registerResponse.password2 = this.f1.password2.value;
        
        console.log(this.f1.username.value);
        console.log(this.f1.password1.value);
    }
    
}