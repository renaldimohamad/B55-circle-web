import React from "react";

function TItle(props) {
  console.log(props);

  return <p className="text-danger">{props.title}</p>;
}

export default TItle;
