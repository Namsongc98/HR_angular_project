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

export const createComboBoxProps = (label: String, placeholder: String, listDataComboBox: ICompobox[]) => ({
  label,
  placeholder,
  listDataComboBox,
})
// export const createDateProp = (label:String, value, defaultValue, name, onChange, placeholder) => ({
//     label,
//     value,
//     defaultValue,
//     name,
//     onChange,
//     placeholder
// });
// export const createInputTextProp = (label: String,
//     placeholder:String,
//     type,
//     value,
//     name,
//     onChange,) => ({
//         label,
//         placeholder,
//         type,
//         value,
//         name,
//         onChange,
//     });
// export const createTextareaProp = (label,
//     placeholder,
//     rows,
//     cols,
//     name,
//     value,
//     onChange) => ({
//         label,
//         placeholder,
//         rows,
//         cols,
//         name,
//         value,
//         onChange,
//     });
export const btnInput = (label: String, styleBtn: String, onClick: () => void) => ({ label, styleBtn, onClick });

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