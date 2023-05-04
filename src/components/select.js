import { Select, MenuItem, InputLabel, Box, FormControl } from "@mui/material";
import { map } from "lodash";

const SelectComponent = ({
  title,
  field,
  style,
  disabled,
  disabledStyle,
  state,
  changeHandler,
}) => {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel>{title}</InputLabel>
        <Select
          label={title}
          style={{ width: "100vh", ...disabledStyle, ...style }}
          disabled={disabled}
          onChange={(e) => {
            changeHandler({ ...state, [field.state]: e.target.value });
          }}
          value={state[field.state]}
        >
          {map(field.options, (option) => {
            const { value, label } = option;
            return <MenuItem value={value}>{label}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectComponent;
