import { Select, MenuItem, InputLabel, Box, FormControl } from "@mui/material";
import React from "react";
import FormComponent from "../FormComponent";

const DateExamples = ({ state, setState }) => {
  const selectExamplesDefinition = [
    {
      title: "Date",
      type: "date",
      state: "dateNormal",
    },
    {
      title: "Date Disabled",
      type: "date",
      state: "dateDisabled",
      disabled: true,
    },
    {
      title: "Date Hidden",
      type: "date",
      state: "dateHidden",
      hidden: state.hideDate,
    },
  ];
  return (
    <FormComponent
      state={state}
      changeHandler={setState}
      fields={selectExamplesDefinition}
      title="Select Examples"
      containerStyles={{ marginTop: "-1rem" }}
    />
  );
};

export default DateExamples;
