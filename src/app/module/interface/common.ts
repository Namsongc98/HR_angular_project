import { IButton } from "../components/components.type";

export interface IDialogConfirm {
    isVisible: boolean,
    title: string,
    content: string,
    body:string,
    footer: IButton[],
  }