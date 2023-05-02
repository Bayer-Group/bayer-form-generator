import {
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { map } from "lodash";
import React from "react";

const FormComponent = ({ fields, title, changeHandler, state }) => {
  const createField = (field) => {
    const {
      title,
      type,
      componentOverride,
      style = {},
      disabled = false,
    } = field;
    if (componentOverride) {
      return componentOverride;
    }
    if (type === "select") {
      return (
        <>
          <InputLabel>Select Thingy</InputLabel>
          <Select
            label={title}
            style={{ width: "100vh", ...style }}
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
        </>
      );
    }
    if (type === "text") {
      return (
        <TextField
          label={title}
          variant="outlined"
          style={{ ...style }}
          disabled={disabled}
          value={state[field.state]}
          onChange={(e) => {
            changeHandler({ ...state, [field.state]: e.target.value });
          }}
        />
      );
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Paper elevation={1} style={{ padding: "0.5rem" }}>
        <Grid container spacing={1} style={{ padding: "0.5rem" }}>
          {title && <Typography variant="h6">{title}</Typography>}
          {map(fields, (field) => (
            <Grid item xs={12} style={{ ...field.containerStyle }}>
              {createField(field)}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default FormComponent;
