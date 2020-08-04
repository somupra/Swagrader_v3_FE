import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export interface Subquestion {
  id: number;
  sno: number;
  name: string;
  marks: number;
}
export interface Question {
  id: number;
  sno: number;
  name: string;
  marks: number;
  subquestions: Subquestion[];
  newques: boolean;
}
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  metadata: any;
  courseDetail: any;
  pdf_link;
  private fetchedOutline: any = [];
  private submit_form_url: string = "";
  private keys;
  public form: {
    questions: Question[];
  };
  public outline: {
    //course_id: string,
    //parent_assign: number,
    questions: any,
  };

  constructor(
    private zone: NgZone,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // this.getKeysService.current_keys.subscribe(key => {
    //   this.keys = key;
    //   this.submit_form_url = api_base_url + "dashboard/courses/" + this.keys.course_id + "/assignments/" + this.keys.assign_id + "/outline/"
    // });
    // this.outlineService.getMetadata(this.keys.course_id, this.keys.assign_id)
    //   .subscribe(data => {
    //     this.metadata = data;
    //     this.pdf_link = this.metadata.pdf;

    //   });

    this.form = {
      questions: []
    };

  };
  ngOnInit() {
    this.courseDetail = this.courseDetail = {
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

    this.metadata = {
      "sno": "1",
      "title": "Input_and_Output",
      // "status": {
      "under_config": 2,
      "upload_scans": 2,
      "under_mapping": 2,
      "under_grading": 3,
      "under_regrading": 2,
      "graded": 1,
      // },

      "peergrading": true,

      "progress": "100",
      "regradingRequests": "Closed"
    }

    this.pdf_link = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

    // this.instructorCourseService.getCourseMetadata(this.keys.course_id).subscribe(detail => this.courseDetail = detail);

    // this.outlineService.getOutline(this.keys.course_id, this.keys.assign_id)
    //   .subscribe(data => {
    this.fetchedOutline = [{
      "parent_assign": "ESC201: Resistors",
      "sno": 1,
      "title": "first question",
      "marks": 10.0,
      "global_rubrics": [
        {
          "description": "Correct",
          "marks": 10.0
        },
        {
          "description": "Incorrect",
          "marks": 0.0
        }
      ],
      "sub_questions": [
        {
          "parent_ques": "Resistors: Ques_1",
          "sno": 1,
          "title": "first subquestion",
          "marks": 8.0,
          "global_subrubrics": [
            {
              "description": "Correct",
              "marks": 8.0
            },
            {
              "description": "Incorrect",
              "marks": 0.0
            }
          ]
        },
        {
          "parent_ques": "Resistors: Ques_1",
          "sno": 2,
          "title": "second subquestion",
          "marks": 2.0,
          "global_subrubrics": [
            {
              "description": "Correct",
              "marks": 2.0
            },
            {
              "description": "Incorrect",
              "marks": 0.0
            }
          ]
        }
      ]
    },
    {
      "parent_assign": "ESC201: Resistors",
      "sno": 2,
      "title": "second question",
      "marks": 5.0,
      "global_rubrics": [
        {
          "description": "Correct",
          "marks": 5.0
        },
        {
          "description": "Incorrect",
          "marks": 0.0
        }
      ],
      "sub_questions": [
        {
          "parent_ques": "Resistors: Ques_2",
          "sno": 1,
          "title": "the only subquestion",
          "marks": 5.0,
          "global_subrubrics": [
            {
              "description": "Correct",
              "marks": 5.0
            },
            {
              "description": "Incorrect",
              "marks": 0.0
            }
          ]
        }
      ]
    }
    ];
    for (var k = 0; k < this.fetchedOutline.length; k++) {
      for (var i = 0; i < this.fetchedOutline.length; i++) {
        if (this.fetchedOutline[i].sno === k + 1) {
          var current_ques = {
            id: this.fetchedOutline[i].sno,
            sno: this.fetchedOutline[i].sno,
            name: this.fetchedOutline[i].title,
            marks: this.fetchedOutline[i].marks,
            subquestions: [],
            newques: false,
          };

          for (var l = 0; l < this.fetchedOutline[i].sub_questions.length; l++) {
            for (var j = 0; j < this.fetchedOutline[i].sub_questions.length; j++) {
              if (this.fetchedOutline[i].sub_questions[j].sno === l + 1) {
                var current_subques = {
                  id: this.fetchedOutline[i].sub_questions[j].sno,
                  sno: this.fetchedOutline[i].sub_questions[j].sno,
                  name: this.fetchedOutline[i].sub_questions[j].title,
                  marks: this.fetchedOutline[i].sub_questions[j].marks,
                };

                current_ques.subquestions.push(current_subques);
                break;
              };
            }
          };
          this.form.questions.push(current_ques);
          break;
        }
      }



    }
  }




  public addQuestion(): void {
    this.form.questions.push({
      id: Date.now(),
      sno: this.form.questions.length + 1,
      name: "",
      marks: 0,
      subquestions: [
        {
          id: Date.now(),
          sno: 1,
          name: "",
          marks: 0,
        }],
      newques: true,
    });

  }
  public addSubquestion(qindex: number): void {
    if (this.form.questions[qindex].newques === true) {

      this.form.questions[qindex].newques = false;
    } else {
      this.form.questions[qindex].subquestions.push({
        id: Date.now(),
        sno: this.form.questions[qindex].subquestions.length + 1,
        name: "",
        marks: 0,
      });
      this.form.questions[qindex].marks = 0;
      for (var i = 0; i < this.form.questions[qindex].subquestions.length; i++) {
        this.form.questions[qindex].marks = this.form.questions[qindex].marks + this.form.questions[qindex].subquestions[i].marks;
      }
    }
  }
  public processForm(form: any): void {
    this.outline = {
      //course_id: this.keys.course_id,
      //parent_assign: this.keys.assign_id,
      questions: [],
    };


    for (var i = 0; i < this.form.questions.length; i++) {
      this.form.questions[i].sno = i + 1;
      for (var j = 0; j < this.form.questions[i].subquestions.length; j++) {
        this.form.questions[i].subquestions[j].sno = j + 1;
      };
    };

    for (var i = 0; i < this.form.questions.length; i++) {
      var current_ques = {
        sno: i + 1,
        title: this.form.questions[i].name,
        marks: this.form.questions[i].marks,
        sub_questions: [],
      };

      for (var j = 0; j < this.form.questions[i].subquestions.length; j++) {

        var current_subques = {
          sno: j + 1,
          title: this.form.questions[i].subquestions[j].name,
          marks: this.form.questions[i].subquestions[j].marks,
        };

        if (this.form.questions[i].newques === false) {
          current_ques.sub_questions.push(current_subques);
        };
      };
      this.outline.questions.push(current_ques);
    };

    // this.outlineService.saveOutline(this.submit_form_url, JSON.stringify(this.outline.questions))
    //   .subscribe(
    //     data => {
    //       this.alertService.success('Outline Set.', true);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       console.log(error);
    //     }
    //   );
    this.zone.run(() => this.router.navigate(['/in-course', this.courseDetail.course_number, 'assignment', this.metadata.title, 'upload-scans']));

    console.warn("Handling form submission!");

    console.group("JSON Response");
    console.log(JSON.stringify(this.outline));
    console.groupEnd();

    console.group("Form Model");
    console.log(form);
    console.groupEnd();

  }
  public removeQuestion(index: number): void {

    this.form.questions.splice(index, 1);


  }
  public removeSubquestion(qindex: number, index: number): void {

    this.form.questions[qindex].subquestions.splice(index, 1);
    this.form.questions[qindex].marks = 0;
    for (var i = 0; i < this.form.questions[qindex].subquestions.length; i++) {
      this.form.questions[qindex].marks = this.form.questions[qindex].marks + this.form.questions[qindex].subquestions[i].marks;
    }


  }


}

