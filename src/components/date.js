import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const DateComponent = ({
  title,
  field,
  style,
  disabled,
  state,
  changeHandler,
}) => {
  //todo: figure out how to disable this noticeably
  const disabledStyle = disabled ? { backgroundColor: "red" } : {};
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={title}
        style={{ ...disabledStyle, ...style }}
        disabled={disabled}
        value={state[field.state]}
        onChange={(e) => {
          changeHandler({ ...state, [field.state]: e });
        }}
      />
    </LocalizationProvider>
  );
};

export default DateComponent;
