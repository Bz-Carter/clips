import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials = {
    email: '',
    password: ''
  }

  showAlert = false;
  alertMsg = 'Please wait! we are logging you in.';
  alertColor = 'blue';
  insubmission = false;

  constructor(private auth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! we are logging you in.';
    this.alertColor = 'blue';
    this.insubmission = true
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credentials.email, this.credentials.password
      )
    } catch (e) {
      this.insubmission = false
      this.alertMsg = 'An unexpected error occurred. Please try again later.'
      this.alertColor = 'red'

      console.log(e)

      return
    }

    this.alertMsg = 'Success! You are now logged in.'
    this.alertColor = 'green'
  }

}
