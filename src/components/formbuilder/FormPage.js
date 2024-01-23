// FormPage.js
import React from "react";
import { useDrop } from "react-dnd";

const FormPage = ({ formElements, onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: "FORM_ELEMENT",
    drop: (item) => onDrop(item.type, item.label),
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
        minHeight: "200px",
      }}
    >
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
  );
};

export default FormPage;
