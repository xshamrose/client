// FormContainer.js
import React from "react";
import { useDrop } from "react-dnd";

const FormContainer = ({ formElements, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "FORM_ELEMENT",
    drop: (item) => onDrop(item.label),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: isOver ? "2px dashed #000" : "2px dashed #ddd",
        padding: "10px",
      }}
    >
      {formElements.map((element) => (
        <div key={element.id}>{element.label}</div>
      ))}
    </div>
  );
};

export default FormContainer;
