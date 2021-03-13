import { Feedback, CONTACT_TYPES } from '@/app/shared/feedback';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const FEEDBACK_FORM_DEFAULT: Feedback = {
  firstname: '',
  lastname: '',
  telNumber: 0,
  email: '',
  agree: false,
  contactType: 'None',
  message: '',
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType: string[] = CONTACT_TYPES;
  @ViewChild('fform') feedbackFormDirective;

  formErrors = {
    firstname: '',
    lastname: '',
    telNumber: '',
    email: '',
  };

  validationMessages = {
    firstname: {
      required: 'First Name is required.',
      minlength: 'First Name must be at least 2 characters long.',
      maxlength: 'FirstName cannot be more than 25 characters long.'
    },
    lastname: {
      required: 'Last Name is required.',
      minlength: 'Last Name must be at least 2 characters long.',
      maxlength: 'Last Name cannot be more than 25 characters long.'
    },
    telNumber: {
      required: 'Tel. number is required.',
      pattern: 'Tel. number must contain only numbers.'
    },
    email: {
      required: 'Email is required.',
      email: 'Email not in valid format.'
    },
  };

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: [FEEDBACK_FORM_DEFAULT.firstname, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]],
      lastname: [FEEDBACK_FORM_DEFAULT.lastname, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]],
      telNumber: [FEEDBACK_FORM_DEFAULT.telNumber, [
        Validators.required,
        Validators.pattern,
      ]],
      email: [FEEDBACK_FORM_DEFAULT.email, [
        Validators.required,
        Validators.email
      ]],
      agree: FEEDBACK_FORM_DEFAULT.agree,
      contactType: FEEDBACK_FORM_DEFAULT.contactType,
      message: FEEDBACK_FORM_DEFAULT.message,
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    console.log(data);
    if (!this.feedbackForm) {
      return;
    }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const errorsKey in control.errors) {
            if (control.errors.hasOwnProperty(errorsKey)) {
              this.formErrors[field] += messages[errorsKey];
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      ...FEEDBACK_FORM_DEFAULT,
    });
    this.feedbackFormDirective.resetForm();
  }
}
