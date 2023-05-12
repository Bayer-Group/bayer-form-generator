import React from "react";
import FormComponent from "../FormComponent";

const TextExamples = ({ state, setState }) => {
  const textExamplesDefinition = [
    {
      title: "Normal textbox!",
      type: "text",
      state: "textboxNormal",
    },
    {
      title: "Example with style applied",
      type: "text",
      style: {
        backgroundColor: "lightgreen",
      },
      state: "textboxStyled",
    },
    {
      title: "Disabled textbox :(",
      type: "text",
      state: "textboxDisabled",
      disabled: true,
    },
    {
      title: "Hidden textbox :eyes:",
      type: "text",
      state: "textboxHidden",
      hidden: state.hideTextbox,
    },
  ];
  return (
    <FormComponent
      state={state}
      changeHandler={setState}
      fields={textExamplesDefinition}
      title="Textbox Examples"
    />
  );
};

export default TextExamples;
