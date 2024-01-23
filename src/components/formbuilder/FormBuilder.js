// FormBuilder.js
import React, { useState } from "react";
import FormElement from "./FormElement";
import FormPage from "./FormPage";

const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);

  const addFormElement = (type, label) => {
    const newFormElements = [...formElements, { id: Date.now(), type, label }];
    setFormElements(newFormElements);
  };

  return (
    <div>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <div style={{ marginRight: "20px" }}>
          <h2>Form Elements</h2>
          <FormElement type="label" label="Label" />
          <FormElement type="input" label="Text Input" />
          {/* Add more form elements as needed */}
        </div>
        <div>
          <h2>Form Page</h2>
          <FormPage formElements={formElements} onDrop={addFormElement} />
        </div>
      </div>
      <div>
        <h2>Form Preview</h2>
        {formElements.map((element) => (
          <div key={element.id}>
            {element.type === "label" ? (
              <span>{element.label}</span>
            ) : (
              <input type="text" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
