import { Grid, Paper, Typography } from "@mui/material";
import { map } from "lodash";
import React from "react";
import DateComponent from "./components/date";
import TextComponent from "./components/text";
import SelectComponent from "./components/select";

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
        <SelectComponent
          title={title}
          field={field}
          disabled={disabled}
          disabledStyle={disabledStyle}
          style={style}
          state={state}
          changeHandler={changeHandler}
        />
      );
    }
    if (type === "text") {
      return (
        <TextComponent
          title={title}
          field={field}
          disabled={disabled}
          disabledStyle={disabledStyle}
          style={style}
          state={state}
          changeHandler={changeHandler}
        />
      );
    }
    if (type === "date") {
      return (
        <DateComponent
          title={title}
          field={field}
          disabled={disabled}
          style={style}
          state={state}
          changeHandler={changeHandler}
        />
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
