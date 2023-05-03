import React, { useState } from "react";
import FormComponent from "./FormComponent";

const MaterialDetails = () => {
  const [stuff, setStuff] = useState({});

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
      state={stuff}
      changeHandler={setStuff}
      fields={materialDetailsDefinition}
      title="Material Details"
    />
  );
};

export default MaterialDetails;
