export interface IButton { label: String, styleBtn: String, onClick: () => void }
export type ListStatus = {
    dataStatus: IStatusJobRequest[],
}

export interface IStatusJobRequest {
    id: Number,
    status: String
}

export interface ICompobox {
    id: number;
    label: string;
    value: string;
}

export interface IInputCompobox {
    label: String;
    placeholder: String;
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

export interface IStatus {
    [key: string]: string
}