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

  constructor(
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: [FEEDBACK_FORM_DEFAULT.firstname, Validators.required],
      lastname: [FEEDBACK_FORM_DEFAULT.lastname, Validators.required],
      telNumber: [FEEDBACK_FORM_DEFAULT.telNumber, Validators.required],
      email: [FEEDBACK_FORM_DEFAULT.email, Validators.required],
      agree: FEEDBACK_FORM_DEFAULT.agree,
      contactType: FEEDBACK_FORM_DEFAULT.contactType,
      message: FEEDBACK_FORM_DEFAULT.message,
    });
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
