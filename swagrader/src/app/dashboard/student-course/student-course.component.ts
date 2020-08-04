import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-course',
  templateUrl: './student-course.component.html',
  styleUrls: ['./student-course.component.css']
})
export class StudentCourseComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'task', 'releaseDate', 'regrading_requests',];
  dataSource = [];
  public metadata: any;

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.metadata = {
      "id": "ygrhghgrkrgjb",
      "course_number": "ESC101",
      "course_title": "Fundamentals Of Computing",
      "term": "Summer",
      "year": "2019",
      "instructor": "Swaprava Nath",
      "description": "This course will teach you the fundamentals of Machine languages and computer programming. We'll be learning C-Programming in general.",
      "average": "52.5",
    };

    this.dataSource = [
      {
        "sno": "1",
        "name": "Input and Output",
        "task": "None, Grades out",
        "releaseDate": "23-08-2019",
        "regrading_requests": "Closed"
      },
      {
        "sno": "2",
        "name": "Loops",
        "releaseDate": "5-09-2019",
        "task": "None",
        "regrading_requests": "Closed"
      },
      {
        "sno": "3",
        "name": "Arrays",
        "releaseDate": "12-08-2019",
        "task": "Grading",
        "regrading_requests": "Closed"
      },
      {
        "sno": "4",
        "name": "Major Quiz 1",
        "task": "Make regrading requests",
        "releaseDate": "25-08-2019",
        "regrading_requests": "Open"
      }
    ];

  }

  onGoBack () {
    this.location.back();
  }


}

