import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ActionButton({ href, text, icon, className }) {
  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={icon} />
      {text}
    </a>
  );
};
