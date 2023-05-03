import { Select, MenuItem, InputLabel, Box, FormControl } from "@mui/material";
import React, { useState } from "react";
import FormComponent from "./FormComponent";

const RequestorDetails = () => {
  const [stuff, setStuff] = useState({});

  const requestorDetailsDefinition = [
    {
      title: "Lab ID",
      options: [
        {
          label: "Lab 1",
          value: "lab1",
        },
        {
          label: "Lab 2",
          value: "lab2",
        },
      ],
      type: "select",
      state: "labId",
    },
    {
      title: "Submission Type",
      options: [
        {
          label: "Cool Submission Type",
          value: "cool",
        },
        {
          label: "Less Cool Submission Type",
          value: "lessCool",
        },
      ],
      type: "select",
      state: "submissionType",
    },
    {
      title: "Submission Name",
      type: "text",
      style: {
        backgroundColor: "lightgreen",
      },
      state: "submissionName",
    },
    {
      title: "Owners",
      type: "select",
      componentOverride: (
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Select Thingy</InputLabel>
            <Select
              label="Owners"
              variant="outlined"
              style={{ width: "100vh" }}
              onChange={(e) => {
                setStuff({ ...stuff, owners: e.target.value });
              }}
              value={stuff.owners}
            >
              <MenuItem value="cathy">Cathy</MenuItem>
              <MenuItem value="fry">Fry</MenuItem>
              <MenuItem value="lily">Lily</MenuItem>
            </Select>
          </FormControl>
        </Box>
      ),
      state: "owners",
    },
  ];
  return (
    <FormComponent
      state={stuff}
      changeHandler={setStuff}
      fields={requestorDetailsDefinition}
      title="Requestor Details"
    />
  );
};

export default RequestorDetails;
