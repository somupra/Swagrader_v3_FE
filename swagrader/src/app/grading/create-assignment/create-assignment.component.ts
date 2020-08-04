import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";



@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent implements OnInit {
  private submit_form_url = "";
  assign_id: number;
  metadata: any;
  private keys;
  private flag = "false";
  public newAssignForm: FormGroup;
  //private assign_uploader: FileUploader;
  //private ansKey_uploader: FileUploader;
  private selectedFile: File;
  private selectedFileAns_key: File;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<CreateAssignmentComponent>,
    private router: Router,
    private zone: NgZone,
  ) { }

  ngOnInit() {
    this.metadata = {
      "instructor": [
        "Somu Prajapati"
      ],
      "course_id": "hlasdkk243834ui",
      "course_number": "ESC201",
      "course_title": "Introduction to Electronics",
      "term": "Fall",
      "year": 2019,
      "entry_restricted": true,
      "role": "st"
    };

    this.newAssignForm = this.fb.group({
      assign_name: ['', Validators.required],
      assign_pdf: ['', Validators.required],
      answer_pdf: ['', Validators.required],
    })
  }
  get f() { return this.newAssignForm.controls; }

  public onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    //console.log(file);

  }
  public onAnsKeySelected(event) {
    this.selectedFileAns_key = event.target.files[0];
    //console.log(file);

  }

  public onSubmit(): void {
    if (this.newAssignForm.invalid) {
      return;
    }
    console.log("hello");
    // console.log(this.newAssignForm.value.assign_name);
    //formdata.append('course', JSON.stringify(null));
    this.dialogRef.close(this.newAssignForm.value);
    // this.zone.run(() => this.router.navigate(['/in-course/', this.metadata.course_number, 'assignment', this.newAssignForm.value.assign_name, 'outline']));

    // formdata.append('peergrading', JSON.stringify(false));
    // formdata.append('regrading_requests', JSON.stringify(false));
    // formdata.append('param_mu', JSON.stringify(null));
    // formdata.append('param_gm', JSON.stringify(null));

    //formdata.append('course_id', this.metadata.course_id);
    // console.log(formdata.get("param_mu"));
    //console.log("hjklsdiofefmks entering"); 
    // console.log(formdata);  
    // this.newAssignService.createAssign(formdata, this.submit_form_url)
    //   .subscribe(
    //     data => {
    //       this.alertService.success('New assignment created successfully.', true);
    //       console.log(JSON.stringify(data));
    //       this.assign_id = data.id;
    //       console.log(data.id);
    //       console.log(data);
    //       this.getKeysService.getKeys({
    //         course_id: this.metadata.course_id,
    //         assign_id: data.id
    //       });
    //       var current_assign = data.title;
    //       console.log(current_assign);
    //       this.getKeysService.current_keys.subscribe(key => {
    //         console.log(JSON.stringify(key));
    //       });

    //       //this.zone.run(() => this.router.navigate(['/in-course/',this.metadata.course_number,'assignment',current_assign,'outline']));

    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );


  };
  public goBack(): void {
    this.dialogRef.close();
  };

}
