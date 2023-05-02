import { Select, MenuItem, InputLabel } from "@mui/material";
import React, { useState } from "react";
import FormComponent from "./FormComponent";

const SubmissionForm = () => {
  const [stuff, setStuff] = useState({});

  const submissionFormDefinition = [
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
      title: "Lab Submission Name",
      type: "text",
      style: {
        backgroundColor: "lightgreen",
      },
      state: "labSubmissionName",
    },
    {
      title: "Owners",
      type: "select",
      componentOverride: (
        <>
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
        </>
      ),
      state: "owners",
    },
  ];
  console.log("stuff", stuff);
  return (
    <FormComponent
      state={stuff}
      changeHandler={setStuff}
      fields={submissionFormDefinition}
      title="Requestor Details"
    />
  );
};

export default SubmissionForm;
