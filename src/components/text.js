import { TextField } from "@mui/material";
const TextComponent = ({
  title,
  field,
  style,
  disabled,
  disabledStyle,
  state,
  changeHandler,
}) => {
  return (
    <TextField
      label={title}
      variant="outlined"
      style={{ ...disabledStyle, ...style }}
      disabled={disabled}
      value={state[field.state]}
      onChange={(e) => {
        changeHandler({ ...state, [field.state]: e.target.value });
      }}
    />
  );
};

export default TextComponent;
