import React from "react";

function ContentContainer(props) {
  return (
    <div className="content-container">
      <img className="content-container__image" src={props.randomImg} alt="" />
      <h2
        className="content-container__top-text"
        style={{ color: props.color }}
      >
        {props.topText}
      </h2>
      <h2
        className="content-container__bottom-text"
        style={{ color: props.color }}
      >
        {props.bottomText}
      </h2>
    </div>
  );
}

export default ContentContainer;
