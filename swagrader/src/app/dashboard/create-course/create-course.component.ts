import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {
  terms = ["Spring", "Summer", "Fall", "Winter"];
  years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CreateCourseComponent>,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      course_number: ['', Validators.required],
      course_title: ['', Validators.required],
      term: ['', Validators.required],
      year: [2019, Validators.required],
      entry_restricted: [false, Validators.required],
      course_description: ['', Validators.required]
    })
  }

  save() {
    if (this.form.invalid) {
      return;
    }

    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
