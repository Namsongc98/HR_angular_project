export interface IButton { label: String, styleBtn: String, onClick?: (event: MouseEvent) => void }
export type ListStatus = {
    dataStatus: IStatusItem[],
}

export interface IStatusItem {
    id: number,
    status: string,
    counter?: number
}
export interface IStatusApplicant extends IStatusItem {
    id: number,
    status: string,
    counter: number
}



export interface ICompobox {
    id: number;
    label: string;
    value: string | number;
}

export interface IInputCompobox {
    label: string;
    placeholder: string;
    listDataComboBox: ICompobox[];
}

export interface IColumn {
    title: string;
    dataIndex: string;
    key: string;
}
export interface IInputTable {
    columns: IColumn[]
    data: any[]
}


export interface IDataTable {
    [key: string]: String
}

export interface IDataJobRequest {
    key: string;
    job_title: string;
    department: string;
    building_no: string;
    applicants: string;
    requester: string;
    created_at: string;
    status: string;
    actions: string;
}
export interface IDataApplicant {
    key: number;
    candidate_name: string;
    job_title: string;
    applied_at: string;
    status: string;
}

export interface IStatus {
    [key: string]: string
}

export interface IInputTag {
    label: string;
    placeholder: string;
    type: string;
    value: string;
    name: string;
}
export interface ITextareaTag {
    label: string;
    placeholder: string;
    rows: string;
    cols: string;
    name: string;
    value: string;
}
export interface IDatePick {
    label: string; value: string; defaultValue: string; name: string; placeholder: string; type: string
}
export interface IDataNewApplicants {
    key: number;
    candidate_name: string;
    job_title: string;
    department: string;
}
export interface IDataOpenedJobs {
    key: number;
    job_title: string;
    department: string;
    applicant: number;
}