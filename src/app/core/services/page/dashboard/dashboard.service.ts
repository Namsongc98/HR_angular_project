import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IDataNewApplicants, IDataOpenedJobs } from 'src/app/module/components/components.type';
import {  dataNewApplicants, dataOpenedJobs } from 'src/app/shared/constant/constant-page/dashboard/dashboard';

const OpenedJobs: IDataOpenedJobs[] = dataOpenedJobs;
const NewApplicants: IDataNewApplicants[] = dataNewApplicants;
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() {}

  getOpenedJobs(): Observable<IDataOpenedJobs[]> {
    return of(OpenedJobs).pipe(delay(500));
  }
  getNewApplicants(): Observable<any[]> {
    return of(NewApplicants).pipe(delay(500));
  }


}