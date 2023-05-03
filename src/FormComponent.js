import {
  Grid,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
} from "@mui/material";
import { map } from "lodash";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const FormComponent = ({
  fields,
  title,
  changeHandler,
  state,
  containerStyles,
}) => {
  const createField = (field) => {
    const {
      title,
      type,
      componentOverride,
      style = {},
      disabled = false,
    } = field;
    const disabledStyle = disabled ? { backgroundColor: "#f5f5f5" } : {};
    if (componentOverride) {
      return componentOverride;
    }
    if (type === "select") {
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
    }
    if (type === "text") {
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
    }
    if (type === "date") {
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
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Paper elevation={1} style={{ padding: "0.5rem", ...containerStyles }}>
        <Grid container spacing={1} style={{ padding: "0.5rem" }}>
          {title && (
            <Typography variant="h6" style={{ marginLeft: "0.6rem" }}>
              {title}
            </Typography>
          )}
          {map(fields, (field, index) => {
            const bottomPadding =
              index === fields.length - 1 ? "0rem" : "0.5rem";
            if (field.hidden) return <></>;
            return (
              <Grid
                item
                xs={12}
                style={{
                  paddingBottom: bottomPadding,
                  ...field.containerStyles,
                }}
              >
                {createField(field)}
              </Grid>
            );
          })}
        </Grid>
      </Paper>
    </div>
  );
};

export default FormComponent;
