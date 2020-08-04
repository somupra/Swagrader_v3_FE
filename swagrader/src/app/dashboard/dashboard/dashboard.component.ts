import { Component, OnInit, NgZone, Inject } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { CreateCourseComponent } from '../create-course/create-course.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public courses: any = [];
  public roles: String[] = [];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private zone: NgZone,
  ) {
  }
  ngOnInit() {

    this.roles = ['instructor', 'ta', 'student']
    this.courses = [
      {
        "instructor": [
          "Niket Jain"
        ],
        "course_id": "hlasdkk243834ui",
        "course_number": "ESC201",
        "course_title": "Introduction to Electronics",
        "term": "Fall",
        "year": 2019,
        "entry_restricted": true,
        "role": "in"
      }, {
        "instructor": [
          "Somu Prajapati"
        ],
        "course_id": "hlasdkk243834ui",
        "course_number": "ECO101",
        "course_title": "Microeconomics",
        "term": "Fall",
        "year": 2019,
        "entry_restricted": true,
        "role": "st"
      }, {
        "instructor": [
          "Somu Prajapati"
        ],
        "course_id": "hlasdkk243834ui",
        "course_number": "CSE771",
        "course_title": "Introduction to Machine Learning",
        "term": "Fall",
        "year": 2019,
        "entry_restricted": true,
        "role": "ta"
      }
    ];
  }

  onClick(course) {
    var course_number = course.course_number;
    if (course.role == 'in') {
      this.zone.run(() => this.router.navigate(['/in-course', course_number]));
    }
    if (course.role == 'st') {
      this.zone.run(() => this.router.navigate(['/st-course', course_number]));
    }
    if (course.role == 'ta') {
      this.zone.run(() => this.router.navigate(['/ta-course', course_number]));
    }
  }

  createCourse() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '750px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(
      CreateCourseComponent, dialogConfig
    )


    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('Course created');
        console.log(
          JSON.stringify(result)
        );
      }
    });
  }
}
