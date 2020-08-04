import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateAssignmentComponent } from "../../grading/create-assignment/create-assignment.component";

@Component({
  selector: 'app-instructor-course',
  templateUrl: './instructor-course.component.html',
  styleUrls: ['./instructor-course.component.css']
})
export class InstructorCourseComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'status', 'gradingMode', 'regradingRequests', 'progress'];
  dataSource: any = [];

  courseDetail: any;
  private keys;


  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
  ) {
  }

  ngOnInit() {

    this.dataSource = [
      {
        "sno": "1",
        "title": "Input_and_Output",
        // "status": {
        "configure": 2,
        "upload_scans": 2,
        "under_mapping": 2,
        "under_grading": 3,
        "under_regrading": 2,
        "graded": 1,
        // },

        "peergrading": true,

        "progress": "100",
        "regradingRequests": "Closed"
      },
      {
        "sno": "2",
        "title": "Loops",
        // "status": {
        "configure": 2,
        "upload_scans": 2,
        "under_mapping": 2,
        "under_grading": 3,
        "under_regrading": 2,
        "graded": 1,
        // },
        "peergrading": false,

        "progress": "100",
        "regradingRequests": "Closed"
      },
      {
        "sno": "3",
        "title": "Arrays",
        // "status": {
        "configure": 2,
        "upload_scans": 2,
        "under_mapping": 2,
        "under_grading": 2,
        "under_regrading": 0,
        "graded": 0,
        // },

        "peergrading": false,

        "progress": "87",
        "regradingRequests": "Closed"
      },
      {
        "sno": "4",
        "title": "Major_Quiz_1",
        // "status": {
        "configure": 2,
        "upload_scans": 2,
        "under_mapping": 2,
        "under_grading": 3,
        "under_regrading": 1,
        "graded": 0,
        // },

        "peergrading": true,

        "progress": "75",
        "regradingRequests": "Open"
      },
      {
        "sno": "5",
        "title": "Functions",
        // "status": {
        "configure": 2,
        "upload_scans": 2,
        "under_mapping": 2,
        "under_grading": 1,
        "under_regrading": 0,
        "graded": 0,
        // },

        "peergrading": false,

        "progress": "43.8",
        "regradingRequests": "Open"
      },
      {
        "sno": "6",
        "title": "Mid_semester_Exam",
        // "status": {
        "configure": 2,
        "upload_scans": 2,
        "under_mapping": 1,
        "under_grading": 0,
        "under_regrading": 0,
        "graded": 0,
        // },


        "peergrading": true,
        "progress": "0",
        "regradingRequests": "Closed"
      },
    ];

    this.courseDetail = {
      "id": "ygrhghgrkrgjb",
      "course_number": "ESC101",
      "course_title": "Fundamentals Of Computing",
      "term": "Summer",
      "year": "2019",
      "instructor": "Swaprava Nath",
      "course_description": "This course will teach you the fundamentals of Machine languages and computer programming. We'll be learning C-Programming in general.",
      "course_avg": "52.5",
      "st_count": "400",
      "ta_count": "10"

    }

  }
  onClickAssignment(assignment: any) {
    this.zone.run(() => this.router.navigate(['/in-course/', this.courseDetail.course_number, 'assignment', assignment.title, 'outline']));


    // this.getKeysService.getKeys({
    //   course_id: this.courseDetail.course_id,
    //   assign_id: assignment.id
    // });
    // if (assignment.graded) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number]));
    //   return;
    // };

    // if (assignment.under_regrading === 1) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', assignment.title, 'regrading-progress']));
    //   return;
    // };
    // if (assignment.under_grading === 1) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', assignment.title, 'grading-settings']));
    //   return;
    // };
    // if (assignment.under_grading === 2) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', assignment.title, 'grading-progress']));
    //   return;
    // };
    // if (assignment.under_mapping === 2) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', assignment.title, 'mapping']));
    //   return;
    // };
    // if (assignment.under_mapping === 1) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', assignment.title, 'upload-scans']));
    //   return;
    // };
    // if (assignment.under_config === 1) {
    //   this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', assignment.title, 'outline']));
    //   return;
    // };
  }

  // courseSettings() {
  //   const dialogConfig = new MatDialogConfig();

  //   dialogConfig.disableClose = true;
  //   dialogConfig.autoFocus = true;

  //   const dialogRef = this.dialog.open(
  //     CourseSettingsComponent, dialogConfig
  //   )


  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result != null) {
  //       console.log('Course created');
  //       console.log(
  //         JSON.stringify(result)
  //       );
  //     }
  //   });
  // }

  createAssign() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '1000px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(
      CreateAssignmentComponent, dialogConfig
    )


    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        console.log('Assignment created');
        console.log(
          JSON.stringify(result)
        );
      }
    });
  }


}
