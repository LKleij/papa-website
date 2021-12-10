import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { globalPaddingLeftAndRight } from '../app.constants';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  globalPaddingLeftAndRight = globalPaddingLeftAndRight;
  contactForm: FormGroup;

  emailFocus = false
  messageFocus = false

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.contactForm = this.formBuilder.group({
      firstName: ['', [
        Validators.required
      ]],
      lastName: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(10)
      ]]
    });

    document.getElementById('email').addEventListener('focusin', () => this.emailFocus = true);
    document.getElementById('email').addEventListener('focusout', () => this.emailFocus = false);


    document.getElementById('message').addEventListener('focusin', () => this.messageFocus = true);
    document.getElementById('message').addEventListener('focusout', () => this.messageFocus = false);


  }



  get email() {
    return this.contactForm.get('email');
  }

  get name() {
    return this.contactForm.get('name');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
