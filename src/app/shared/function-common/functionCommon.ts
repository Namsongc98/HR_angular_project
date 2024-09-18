import { IColumn, ICompobox, IDataTable, IStatus, IStatusJobRequest } from "src/app/module/components/components.type";

export const getAllHoursInDay = () => {
  const hoursArray = [];
  for (let hour = 0; hour < 24; hour++) {
    hoursArray.push({ id: hour, label: hour, value: hour });
  }
  return hoursArray;
};
export const getAllMinutesInHour = () => {
  const minutesArray = [];
  for (let minute = 0; minute < 60; minute++) {
    minutesArray.push({ id: minute, label: minute, value: minute });
  }
  return minutesArray;
};

export const createComboBoxProps = (label: string, placeholder: string, listDataComboBox: ICompobox[], name: string) => ({
  label,
  placeholder,
  listDataComboBox,
  name
})
// export const createDateProp = (label:String, value, defaultValue, name, onChange, placeholder) => ({
//     label,
//     value,
//     defaultValue,
//     name,
//     onChange,
//     placeholder
// });
export const createInputTextInput = (label: string,
  placeholder: string,
  type: string,
  value: string,
  name: string,
) => ({
  label,
  placeholder,
  type,
  value,
  name,

});
export const createTextareaInput = (label: string,
  placeholder: string,
  rows: string,
  cols: string,
  name: string,
  value: string) => ({
    label,
    placeholder,
    rows,
    cols,
    name,
    value,

  });
export const btnInput = (label: string, styleBtn: string, onClick: () => void) => ({ label, styleBtn, onClick });

// export const modalProp = (open, title, onClick) => ({ open, title, onClick });
export const tableInput = (columns: IColumn[], data: any[]) => ({ columns, data });
export const lisStatusInput = (dataStatus: IStatusJobRequest[], handleFilter?: () => any) => ({ dataStatus, handleFilter });

export const setClassNameColumnsTable = (dataColumns: any, status: IStatus, action: IStatus, data: any): string => {
  switch (dataColumns.dataIndex) {
    case 'status':
      return status[data.status]
    case 'actions':
      return action[data.actions]
    default:
      return action['default']
  }
}