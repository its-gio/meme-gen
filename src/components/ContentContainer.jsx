import React from "react";

function ContentContainer(props) {
  return (
    <div className="generator__content-container">
      <img
        className="generator__content-container--image"
        src={props.randomImg}
        alt=""
      />
      <h2 className="generator__content-container--top-text">
        {props.topText}
      </h2>
      <h2 className="generator__content-container--bottom-text">
        {props.bottomText}
      </h2>
    </div>
  );
}

export default ContentContainer;
