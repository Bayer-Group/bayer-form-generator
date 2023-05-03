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

const FormComponent = ({
  fields,
  title,
  changeHandler,
  state,
  containerStyle,
  additionalProps,
}) => {
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>{title}</InputLabel>
            <Select
              label={title}
              style={{ width: "100vh", ...style }}
              disabled={disabled}
              onChange={(e) => {
                changeHandler({ ...state, [field.state]: e.target.value });
              }}
              value={state[field.state]}
              {...additionalProps}
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
          style={{ ...style }}
          disabled={disabled}
          value={state[field.state]}
          onChange={(e) => {
            changeHandler({ ...state, [field.state]: e.target.value });
          }}
          {...additionalProps}
        />
      );
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <Paper elevation={1} style={{ padding: "0.5rem", ...containerStyle }}>
        <Grid container spacing={1} style={{ padding: "0.5rem" }}>
          {title && (
            <Typography variant="h6" style={{ marginLeft: "0.6rem" }}>
              {title}
            </Typography>
          )}
          {map(fields, (field, index) => {
            const bottomPadding =
              index === fields.length - 1 ? "0rem" : "0.5rem";
            return (
              <Grid
                item
                xs={12}
                style={{
                  paddingBottom: bottomPadding,
                  ...field.containerStyle,
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
