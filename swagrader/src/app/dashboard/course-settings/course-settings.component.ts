import { Component, OnInit, Inject } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-course-settings',
  templateUrl: './course-settings.component.html',
  styleUrls: ['./course-settings.component.css']
})
export class CourseSettingsComponent implements OnInit {
  terms = ["Spring", "Summer", "Fall", "Winter"];
  years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022];

  displayedColumns: string[] = ['sno', 'name', 'marks', 'releaseDate', 'dueDate', 'submissions', 'regradingRequests', 'peergraded'];
  dataSource = [];
  public courseDetail;

  constructor(
    private location: Location
  ) { }


  ngOnInit() {
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
      "ta_count": "10",
      "gamma": "0.5",
      "mu": "0.5",
    };
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
    //this._iCourseService.getAssignmentsList()
    //.subscribe(assignments => this.dataSource = assignments);
    // this._iCourseService.getCourseMetadata(this.courseDetail.course_id)
    //     .subscribe(data=>this.courseDetail = data);
  }

  onGoBack() {
    this.location.back();
  }

}

