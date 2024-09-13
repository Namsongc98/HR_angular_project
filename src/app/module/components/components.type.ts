export interface IButton { label: String, styleBtn: String, onClick: () => void }
export type ListStatus = {
    dataStatus: IStatusJobRequest[],
}

export interface IStatusJobRequest {
    id: Number,
    status: String
}