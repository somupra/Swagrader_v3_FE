import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { InstructorCourseComponent } from './dashboard/instructor-course/instructor-course.component';
import { StudentCourseComponent } from './dashboard/student-course/student-course.component';
import { TaCourseComponent } from './dashboard/ta-course/ta-course.component';
import { CourseSettingsComponent } from "./dashboard/course-settings/course-settings.component";
import { AssignmentComponent } from "./grading/assignment/assignment.component";

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'in-course/:name', component: InstructorCourseComponent, pathMatch: 'full' },
  { path: 'in-course/:name/course-settings', component: CourseSettingsComponent, pathMatch: 'full' },
  { path: 'in-course/:name/assignment/:ass_name/outline', component: AssignmentComponent, pathMatch: 'full' },
  { path: 'st-course/:name', component: StudentCourseComponent, pathMatch: 'full' },
  { path: 'ta-course/:name', component: TaCourseComponent, pathMatch: 'full' },

];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes)],
//   exports: [RouterModule]
// })
export const AppRoutingModule = RouterModule.forRoot(appRoutes);