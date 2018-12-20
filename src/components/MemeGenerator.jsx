import React, { Component } from "react";

import Form from "./Form";

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };

    this.textChange = this.textChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(blob => blob.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
        console.log(this.state.allMemeImgs);
      });
  }

  textChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="generator">
        <Form textChange={this.textChange} {...this.state} />
        <div className="generator__content-container">
          <img
            className="generator__content-container--image"
            src={this.state.randomImg}
            alt=""
          />
          <h2 className="generator__content-container--top-text">
            {this.state.topText}
          </h2>
          <h2 className="generator__content-container--bottom-text">
            {this.state.bottomText}
          </h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
