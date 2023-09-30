import React from "react";
import { Button } from "~/interface";
import styles from "./Button.module.scss"

const Button = ({ btnClass, title, onClick }: Button) => {
  return <button onClick={onClick} className={`btn ${btnClass} ${styles.commonBtn}`}>{title}</button>;
};

export default Button;
