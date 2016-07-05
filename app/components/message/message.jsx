import React from 'react';
import style from "./message.css";

export default function Message(props) {
  const message  = props.message;

  if (!message) { return <noscript/>; }

  return (
    <span className={style.message}>{message}</span>
  )
};
