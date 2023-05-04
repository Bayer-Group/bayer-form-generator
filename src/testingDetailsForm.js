import React from "react";
import FormComponent from "./FormComponent";

const TestingDetails = ({ state, setState }) => {
  const testingDetailsDefinition = [
    {
      title: "Sample Delivery Date",
      type: "date",
      state: "sampleDeliveryDate",
    },
  ];
  return (
    <FormComponent
      state={state}
      changeHandler={setState}
      fields={testingDetailsDefinition}
      title="Testing Details"
      containerStyles={{ marginTop: "-1rem" }}
    />
  );
};

export default TestingDetails;
