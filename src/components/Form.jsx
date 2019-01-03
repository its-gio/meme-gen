import React from "react";

function Form(props) {
  return (
    <form className="form" onSubmit={props.generateImage}>
      <div className="form__text-container">
        <input
          className="form__top-text"
          name="topText"
          onChange={props.textChange}
          value={props.topText}
          type="text"
          required
        />
        <label className="form__top-text--label" htmlFor="topText">
          Top Text
        </label>
      </div>
      <div className="form__text-container">
        <input
          className="form__bottom-text"
          name="bottomText"
          onChange={props.textChange}
          value={props.BottomText}
          type="text"
          required
        />
        <label className="form__bottom-text--label" htmlFor="bottomText">
          Bottom Text
        </label>
      </div>
      <input
        type="color"
        name="color"
        value={props.color}
        onChange={props.textChange}
      />
      <button className="form__button">Generate!</button>
    </form>
  );
}

export default Form;
