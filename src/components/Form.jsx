import React, { Component } from "react";

function Form() {
  return (
    <form className="generator__form">
      <input
        className="generator__form--top-text"
        name="topText"
        onChange={this.props.textChange}
        value={this.props.topText}
        type="text"
        placeholder="Top Text"
      />
      <input
        className="generator__form--bottom-text"
        name="bottomText"
        onChange={this.props.textChange}
        value={this.props.BottomText}
        type="text"
        placeholder="Bottom Text"
      />
      <button className="generator__form--button">Generate!</button>
    </form>
  );
}

export default Form;
