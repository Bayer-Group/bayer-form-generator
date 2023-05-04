import { Select, MenuItem, InputLabel, Box, FormControl } from "@mui/material";
import React from "react";
import FormComponent from "../FormComponent";

const SelectExamples = ({ state, setState }) => {
  const selectExamplesDefinition = [
    {
      title: "Select",
      options: [
        {
          label: "Very cool option!!!!",
          value: "cool",
        },
        {
          label: "Less Cool Option",
          value: "lessCool",
        },
      ],
      type: "select",
      state: "selectNormal",
    },
    {
      title: "Select with purple background!",
      options: [
        {
          label: "Very cool option!!!!",
          value: "cool",
        },
        {
          label: "Less Cool Option",
          value: "lessCool",
        },
      ],
      type: "select",
      state: "selectStyled",
      style: { backgroundColor: "purple" },
    },
    {
      title: "Disabled Select!",
      options: [
        {
          label: "Very cool option!!!!",
          value: "cool",
        },
        {
          label: "Less Cool Option",
          value: "lessCool",
        },
      ],
      type: "select",
      state: "selectDisabled",
      disabled: true,
    },
    {
      title: "Custom Defined Select",
      type: "select",
      componentOverride: (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Custom Defined Select!</InputLabel>
            <Select
              label="Custom Defined Select"
              variant="outlined"
              style={{ width: "100vh" }}
              onChange={(e) => {
                setState({ ...state, owners: e.target.value });
              }}
              value={state.selectCustom}
            >
              <MenuItem style={{ color: "blue" }} value="cathy">
                Cathy
              </MenuItem>
              <MenuItem style={{ color: "red" }} value="fry">
                Fry
              </MenuItem>
              <MenuItem style={{ color: "green" }} value="lily">
                Lily
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      ),
      state: "owners",
    },
    {
      title: "Hidden Select! Peekaboo!!!",
      options: [
        {
          label: "Very cool option!!!!",
          value: "cool",
        },
        {
          label: "Less Cool Option",
          value: "lessCool",
        },
      ],
      type: "select",
      state: "selectHidden",
      hidden: state.hideSelect,
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

export default SelectExamples;
