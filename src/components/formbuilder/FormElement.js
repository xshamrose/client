// FormElement.js
import React from "react";
import { useDrag } from "react-dnd";

const FormElement = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "FORM_ELEMENT",
    item: { type, label },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: "move" }}>
      {type === "label" ? (
        <span>{label}</span>
      ) : (
        <input type="text" placeholder={label} />
      )}
    </div>
  );
};

export default FormElement;
