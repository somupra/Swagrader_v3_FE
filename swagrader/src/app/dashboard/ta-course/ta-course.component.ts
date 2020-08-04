import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ta-course',
  templateUrl: './ta-course.component.html',
  styleUrls: ['./ta-course.component.css']
})
export class TaCourseComponent implements OnInit {
  displayedColumns: string[] = ['sno', 'name', 'task_assigned', 'created_on', 'deadline'];

  metadata: any;
  dataSource: any;
  private keys;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private zone: NgZone,
  ) {
  }

  ngOnInit() {
    this.metadata = {
      "id": "ygrhghgrkrgjb",
      "course_number": "ESC101",
      "course_title": "Fundamentals Of Computing",
      "term": "Summer",
      "year": "2019",
      "instructor": "Swaprava Nath",
      "course_description": "This course will teach you the fundamentals of Machine languages and computer programming. We'll be learning C-Programming in general.",
      "course_avg": "52.5",
      "st_count": "400",
    };
    this.dataSource = [
      {
        "sno": 1,
        "title": "Input_Output",
        "action": "None",
        "date_posted": "29-09-2019",
        "action_deadline": "5-10-2019",
        "progress": 0
      },
      {
        "sno": 2,
        "title": "Loops",
        "action": "None",
        "date_posted": "29-09-2019",
        "action_deadline": "5-10-2019",
        "progress": 0
      },
      {
        "sno": 3,
        "title": "Arrays",
        "action": "Regrading",
        "date_posted": "29-09-2019",
        "action_deadline": "5-10-2019",
        "progress": 90
      },
      {
        "sno": 4,
        "title": "Pointers",
        "action": "Regrading",
        "date_posted": "29-09-2019",
        "action_deadline": "5-10-2019",
        "progress": 73
      },
      {
        "sno": 5,
        "title": "Functions",
        "action": "Grading",
        "date_posted": "29-09-2019",
        "action_deadline": "5-10-2019",
        "progress": 40
      },
      {
        "sno": 6,
        "title": "Recursions",
        "action": "Mapping",
        "date_posted": "29-09-2019",
        "action_deadline": "5-10-2019",
        "progress": 10
      }
    ];

  }
  // onClickAssignment(assignment: any){
  //   // this.getKeysService.getKeys({course_id: this.metadata.course_id,
  //     // assign_id: assignment.id});
  //   // if(assignment.action === "No action till now"){
  //   //   this.zone.run(() => this.router.navigate(['/ta-course',this.metadata.course_number,'assignment', assignment.title, 'no-task']));
  //   //   return;
  //   // };
  //   if(assignment.action === "Regrading"){
  //     this.zone.run(() => this.router.navigate(['/ta-course',this.metadata.course_number, 'assignment', assignment.title, 'regrading-requests-dashboard']));
  //     return;
  //   };
  //   if(assignment.action === "Grading"){
  //     this.zone.run(() => this.router.navigate(['/ta-course',this.metadata.course_number, 'assignment', assignment.title, 'grading-dashboard']));
  //     return;
  //   };
  //   if(assignment.action === "Mapping Submissions"){
  //     this.zone.run(() => this.router.navigate(['/ta-course',this.metadata.course_number, 'assignment', assignment.title, 'mapping']));
  //     return;
  //   };
  // }


}
