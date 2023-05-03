import { useState } from "react";
import "./submissionForm.css";
import MaterialDetails from "./materialDetailsForm";
import RequestorDetails from "./requestorDetailsForm";
import TestingDetails from "./testingDetailsForm";

function SubmissionForm() {
  const [formData, setFormData] = useState({});
  return (
    <div className="App">
      <RequestorDetails state={formData} setState={setFormData} />
      <MaterialDetails state={formData} setState={setFormData} />
      <TestingDetails state={formData} setState={setFormData} />
    </div>
  );
}

export default SubmissionForm;
