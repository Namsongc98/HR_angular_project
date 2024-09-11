import { Routes } from "@angular/router";
import { LayoutHomeComponent } from "src/app/core/layout/layout-home/layout-home.component";


export const routes: Routes = [
    {
      path: "",
      component: LayoutHomeComponent ,
    //   children: [
    //     {
    //       path: "",
    //       component: Dashboard ,
    //     },
    //     {
    //       path: "applicants",
    //       component: LayoutApplicants ,
    //       children: [
    //         {
    //           path: "",
    //           component: Applicants ,
    //         },
    //         {
    //           path: ":id",
    //           component: DetailApplicant ,
    //         },
    //       ]
    //     },
    //     {
    //       path: "job-requests",
    //       component: LayoutJobRequests ,
    //       children: [
    //         {
    //           path: "",
    //           component: JobRequests ,
    //         },
    //         {
    //           path: "create-job-request",
    //           component: CreateJobRequest ,
    //         },
    //         {
    //           path: ":id",
    //           component: DetailJobRequest ,
    //         }
    //       ]
    //     },
    //   ],
    },
  ];