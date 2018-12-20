import React, { Component } from "react";

class MemeGenerator extends Component {
  constructor() {
    super();

    this.state = {
      topText: "",
      bottomText: "",
      img: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(blob => blob.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  render() {
    return <div>I'm a meme generator</div>;
  }
}

export default MemeGenerator;
