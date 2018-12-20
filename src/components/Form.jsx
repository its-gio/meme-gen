import React from "react";

function Form(props) {
  return (
    <form className="generator__form">
      <input
        className="generator__form--top-text"
        name="topText"
        onChange={props.textChange}
        value={props.topText}
        type="text"
        placeholder="Top Text"
      />
      <input
        className="generator__form--bottom-text"
        name="bottomText"
        onChange={props.textChange}
        value={props.BottomText}
        type="text"
        placeholder="Bottom Text"
      />
      <button className="generator__form--button">Generate!</button>
    </form>
  );
}

export default Form;
