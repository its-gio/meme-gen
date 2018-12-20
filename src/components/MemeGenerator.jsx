import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      img: "http://i.imgflip.com/1bij.jpg"
    };
  }

  render() {
    return <div>I'm a meme generator</div>;
  }
}

export default MemeGenerator;
