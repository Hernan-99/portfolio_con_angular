import { Component, OnInit } from '@angular/core';

//importacion de las librerias del modulo forms
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup = new FormGroup({});
  public exp =
    /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private formB: FormBuilder) {
    this.formLogin = this.formB.group({
      email: ['', [Validators.required, Validators.pattern(this.exp)]], //Validators.pattern() para expresion reg
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    // alert('Ok');
    console.log(this.formLogin);
    console.log(this.formLogin.value);
  }
  ngOnInit(): void {}
}
