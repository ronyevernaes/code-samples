import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ActionButton from "./ActionButton";

export default function ActionBar() {
  return (
    <div className="action-bar">
      <ActionButton href="mailto:contact@ronyevernaes.me" className="email" icon={faEnvelope} text="Email" />
      <ActionButton href="https://www.linkedin.com/in/ronyevernaes/" className="linkedin" icon={faLinkedin} text="LinkedIn" />
    </div>
  );
};
