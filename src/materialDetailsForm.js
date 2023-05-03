import React from "react";
import FormComponent from "./FormComponent";

const MaterialDetails = ({ state, setState }) => {
  const materialDetailsDefinition = [
    {
      title: "Crop",
      options: [
        {
          label: "Corn",
          value: "corn",
        },
        {
          label: "Canola",
          value: "canola",
        },
      ],
      type: "select",
      state: "crop",
    },
    {
      title: "Material Purpose",
      options: [
        {
          label: "Good Stuff",
          value: "goodStuff",
        },
        {
          label: "Bad Stuff",
          value: "badStuff",
        },
      ],
      type: "select",
      state: "materialPurpose",
    },
    {
      title: "Sample Type",
      options: [
        {
          label: "Sampley Stuff",
          value: "sampleyStuff",
        },
        {
          label: "Less Sampley Stuff",
          value: "lessSampleyStuff",
        },
      ],
      type: "select",
      state: "sampleType",
      hidden: true,
    },
    {
      title: "Compliance Type",
      options: [
        {
          label: "Very Compliant",
          value: "veryCompliant",
        },
        {
          label: "Not So Compliant -- pls don't tell anyone",
          value: "notSoCompliant",
        },
      ],
      type: "select",
      state: "sampleType",
    },
  ];
  return (
    <FormComponent
      state={state}
      changeHandler={setState}
      fields={materialDetailsDefinition}
      title="Material Details"
      containerStyles={{ marginTop: "-1rem" }}
    />
  );
};

export default MaterialDetails;
