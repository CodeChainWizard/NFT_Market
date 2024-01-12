import React from "react";

// INTERNAL IMPORT
import Style from "./Title.module.css";

const Title = ({ heading, paraghaph }) => {
  return (
    <div className={Style.title}>
      <div className={Style.title_box}>
        <h2>{heading}</h2>
        <p>{paraghaph}</p>
      </div>
    </div>
  );
};

export default Title;
