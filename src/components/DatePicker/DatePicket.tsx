import React from "react";
import DatePicker from "react-date-picker";
import { DatePickerProps } from "./types";

const CustomDatePicker: React.FC<DatePickerProps> = ({
  title,
  onChange,
  date,
}) => {
  const handleChange = (newDate: any) => {
    onChange(newDate);
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <DatePicker value={date} onChange={handleChange} />
      </div>
    </div>
  );
};

export default CustomDatePicker;
