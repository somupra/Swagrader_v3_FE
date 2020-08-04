import { BrowserModule } from '@angular/platform-browser';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './authentication/login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InstructorCourseComponent } from './dashboard/instructor-course/instructor-course.component';
import { StudentCourseComponent } from './dashboard/student-course/student-course.component';
import { TaCourseComponent } from './dashboard/ta-course/ta-course.component';
import { CreateCourseComponent } from './dashboard/create-course/create-course.component';
import { CourseSettingsComponent } from "./dashboard/course-settings/course-settings.component";
import { CreateAssignmentComponent } from './grading/create-assignment/create-assignment.component';
import { AssignmentComponent } from "./grading/assignment/assignment.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    InstructorCourseComponent,
    StudentCourseComponent,
    TaCourseComponent,
    CreateCourseComponent,
    CourseSettingsComponent,
    CreateAssignmentComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [CreateCourseComponent]
})
export class AppModule { }
