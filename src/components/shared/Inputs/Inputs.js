import React from "react";

const Inputs = ({ type, id, classs }) => {
  return (
    <input
      type={type}
      name={type}
      id={id}
      className={classs}
      required
    />
  );
};

export default Inputs;
