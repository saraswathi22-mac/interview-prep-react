import React from "react";
import { Button } from "~/interface";

const Button = ({ btnClass, title, onClick }: Button) => {
  return <button onClick={onClick} className={`btn ${btnClass}`}>{title}</button>;
};

export default Button;
