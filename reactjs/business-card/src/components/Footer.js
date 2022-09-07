import React from "react";
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import ActionButton from "./ActionButton";

export default function Footer() {
  const data = [
    {
      href: "https://twitter.com/RonyeVernaes",
      icon: faTwitterSquare
    },
    {
      href: "https://www.facebook.com/ronyevernaes",
      icon: faFacebookSquare
    },
    {
      href: "https://www.instagram.com/ronyevernaes",
      icon: faInstagramSquare
    },
    {
      href: "https://github.com/ronyevernaes",
      icon: faGithubSquare
    }
  ]
  return (
    <div className="footer">
      {data.map(item =>
        <ActionButton className="footer-action" href={item.href} icon={item.icon} key={item.href} />
      )}
    </div>
  );
};
