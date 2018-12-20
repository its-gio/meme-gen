import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input
        className="form__top-text"
        name="topText"
        onChange={props.textChange}
        value={props.topText}
        type="text"
      />
      <label className="form__top-text--label" htmlFor="topText">
        Top Text
      </label>
      <input
        className="form__bottom-text"
        name="bottomText"
        onChange={props.textChange}
        value={props.BottomText}
        type="text"
        placeholder="Bottom Text"
      />
      <label className="form__bottom-text--label" htmlFor="bottomText">
        Bottom Text
      </label>
      <button className="form__button">Generate!</button>
    </form>
  );
}

export default Form;
