import React from "react";

const Footer = props => {
  return (
    <div className="footer">
      <ul>
        {props.contactInfos.map((info, index) => {
          return <li key={index}>{info}</li>;
        })}
      </ul>
    </div>
  );
};

export default Footer;
