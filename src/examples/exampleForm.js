import { Button } from "@mui/material";
import { useState } from "react";
import DateExamples from "./dateExample";
import "./exampleForm.css";
import SelectExamples from "./selectExample";
import TextExamples from "./textExamples";
function ExampleForm() {
  const [formData, setFormData] = useState({
    hideTextbox: true,
    hideSelect: true,
    hideDate: true,
  });
  return (
    <div className="Form">
      <Button
        onClick={() => {
          setFormData({
            ...formData,
            hideTextbox: !formData.hideTextbox,
            hideSelect: !formData.hideSelect,
          });
        }}
      >
        Click for spooky secrets
      </Button>
      <TextExamples state={formData} setState={setFormData} />
      <DateExamples state={formData} setState={setFormData} />
      <SelectExamples state={formData} setState={setFormData} />
    </div>
  );
}

export default ExampleForm;
