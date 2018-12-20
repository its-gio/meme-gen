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

    this.textChange = this.textChange.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(blob => blob.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  textChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="topText"
            onChange={this.textChange}
            value={this.state.topText}
            type="text"
            placeholder="Top Text"
          />
          <input
            name="bottomText"
            onChange={this.textChange}
            value={this.state.BottomText}
            type="text"
            placeholder="Bottom Text"
          />
          <button>Generate!</button>
        </form>
        {this.state.topText} : {this.state.bottomText}
      </div>
    );
  }
}

export default MemeGenerator;
