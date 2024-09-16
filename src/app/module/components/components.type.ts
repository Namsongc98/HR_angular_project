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