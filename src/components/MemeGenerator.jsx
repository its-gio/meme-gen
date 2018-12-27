import React, { Component } from "react";

import Form from "./Form";
import ContentContainer from "./ContentContainer";

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: []
  };

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(blob => blob.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  textChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  generateImage = e => {
    e.preventDefault();
    const num = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const newRandomImg = this.state.allMemeImgs[num].url;
    this.setState({ randomImg: newRandomImg });
  };

  render() {
    return (
      <div className="generator">
        <Form
          textChange={this.textChange}
          generateImage={this.generateImage}
          {...this.state}
        />
        <ContentContainer {...this.state} />
      </div>
    );
  }
}

export default MemeGenerator;
