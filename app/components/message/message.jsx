import React from 'react';

export default function Message(props) {
  const message  = props.message;

  if (!message) { return <noscript/>; }

  return (
    <span>{message}</span>
  )
};
