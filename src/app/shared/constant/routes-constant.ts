import { Routes } from "@angular/router";
import { LayoutHomeComponent } from "src/app/core/layout/layout-home/layout-home.component";
import { ApplicantsComponent } from "src/app/features/applicants/page/applicants/applicants.component";
import { DetailApplicantComponent } from "src/app/features/applicants/page/detail-applicant/detail-applicant.component";
import { LayoutApplicantsComponent } from "src/app/features/applicants/layout/layout-applicants/layout-applicants.component";
import { DashboardComponent } from "src/app/features/dashboard/dashboard/dashboard.component";
import { LayoutJobRequestComponent } from "src/app/features/job-requests/layout/layout-job-request/layout-job-request.component";
import { JobRequestMainComponent } from "src/app/features/job-requests/page/job-request-main/job-request-main.component";
import { CreateJobRequestComponent } from "src/app/features/job-requests/page/create-job-request/create-job-request.component";
import { DetailJobRequestComponent } from "src/app/features/job-requests/page/detail-job-request/detail-job-request.component";


export const routes: Routes = [
  {
    path: "",
    component: LayoutHomeComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "applicants",
        component: LayoutApplicantsComponent,
        children: [
          {
            path: "",
            component: ApplicantsComponent,
          },
          {
            path: ":id",
            component: DetailApplicantComponent,
          },
        ]
      },
      {
        path: "job-requests",
        component: LayoutJobRequestComponent,
        children: [
          {
            path: "",
            component: JobRequestMainComponent,
          },
          {
            path: "create-job-request",
            component: CreateJobRequestComponent,
          },
          {
            path: ":id",
            component: DetailJobRequestComponent,
          }
        ]
      },
    ],
  },
];

export const listNavRoutes = [
  {
    id: 1,
    label: 'Dashboard',
    to: "/"
  },
  {
    id: 2,
    label: 'Applicants',
    to: "applicants"
  },
  {
    id: 3,
    label: 'Job Requests',
    to: "job-requests"
  }
]