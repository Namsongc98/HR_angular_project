export interface IInterview {
    id: number;
    name_interview: string;
    status: InterviewerStatus | string;
    time: string;
    job_title: string;
    department: string;
    interviewer: string;
}
export type InterviewerStatus =
    | 'New'
    | 'Waiting for Round 1'
    | 'Completed Round 1'
    | 'Approved'
    | 'Waiting for Round 2'
    | 'Completed Round 2'
    | 'Onboarded'
    | 'Rejected'
    | 'Scheduled round 1'
    | 'Pass Round 1'
    | 'Pass Round 2'
    | 'Scheduled round 2'
    | 'Fail';

 export   interface IInterViewForm {
        interviewer: string;
        interviewerDate: string;
        hour: string;
        minute: string;
      }